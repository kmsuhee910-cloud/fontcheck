'use strict';

const fonts = FONT_CATALOG.fonts;
const featuredFonts = sampleFonts(fonts, 15);
const categories = FONT_CATALOG.scopes;
const main = document.getElementById('main');
const dialog = document.getElementById('dialog');
const STATUS = {
  allowed: { label: '가능', className: 'allowed' },
  conditional: { label: '조건부 가능', className: 'conditional' },
  check: { label: '별도 확인 필요', className: 'check' },
  unknown: { label: '확인되지 않음', className: 'unknown' },
  prohibited: { label: '불가', className: 'prohibited' },
  not_required: { label: '의무 없음', className: 'allowed' },
  required: { label: '표기 필요', className: 'conditional' }
};
const PRICE = { free: '무료', paid: '유료', mixed: '조건별 상이', unknown: '가격 확인 필요' };
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const normalize = value => String(value ?? '').normalize('NFKC').toLowerCase().replace(/[\s_\-·]/g, '');
const displayName = font => font.korean === font.name ? font.name : `${font.korean} · ${font.name}`;
const searchIcon = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>';

// Only reviewed records with evidence can show permission. Missing or conflicting data stays unknown.
function getRule(font, scope) {
  const entry = font.usage?.[scope];
  const validEvidence = entry?.sourceIds?.length && entry.sourceIds.every(id => font.sources.some(source => source.id === id));
  if (!entry || !validEvidence || entry.conflict || !['allowed', 'conditional', 'check', 'unknown', 'prohibited'].includes(entry.status)) {
    return { status: 'unknown', condition: entry?.conflict ? '공식 근거 사이에 충돌이 있어 허용 여부를 확정하지 않았습니다.' : '검증된 사용 조건이 아직 등록되지 않았습니다.', sourceIds: entry?.sourceIds || [], evidenceSection: '추가 확인 필요' };
  }
  return entry;
}
function externalLink(url, label, className = '') {
  if (!/^https:\/\/[^\s]+$/i.test(url || '')) return `<span>${escapeHTML(label)} · 링크 확인 필요</span>`;
  return `<a class="${escapeHTML(className)}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;
}
function evidence(font, ids) {
  return (ids || []).map(id => font.sources.find(source => source.id === id)).filter(Boolean)
    .map(source => externalLink(source.url, source.title, 'evidence-link')).join(' ');
}
function badge(status) {
  const item = STATUS[status] || STATUS.unknown;
  return `<span class="status-badge ${item.className}">${item.label}</span>`;
}
function priceBadge(font) {
  const type = font.pricing?.type || 'unknown';
  return `<span class="price-badge ${type === 'free' ? 'free' : type === 'paid' ? 'paid' : 'unknown'}">${PRICE[type] || PRICE.unknown}</span>`;
}
function findFonts(query, list = fonts) {
  const key = normalize(query.trim());
  if (!key) return { exact: null, matches: [] };
  const names = font => [font.name, font.korean, font.id, ...(font.aliases || [])].map(normalize);
  const exactMatches = list.filter(font => names(font).includes(key));
  return { exact: exactMatches.length === 1 ? exactMatches[0] : null, matches: list.filter(font => names(font).some(name => name.includes(key))) };
}
const FILTER_OPTIONS = [
  ['personal', '개인 사용'], ['commercial', '상업적 사용'], ['print', '인쇄물'],
  ['video', '영상'], ['website', '웹사이트'], ['branding', '로고'],
  ['modification', '수정'], ['redistribution', '재배포'], ['embedding', '임베딩'], ['packaging', '포장지']
];
const emptyFilters = () => ({ language: 'all', price: 'all', uses: [], attribution: 'all', conditional: true });
let activeFilters = emptyFilters();
function sanitizeFilters(value = {}) {
  return {
    language: ['ko', 'en', 'en-only'].includes(value.language) ? value.language : 'all',
    price: ['free', 'paid'].includes(value.price) ? value.price : 'all',
    uses: [...new Set((Array.isArray(value.uses) ? value.uses : []).filter(id => FILTER_OPTIONS.some(option => option[0] === id)))],
    attribution: ['not_required', 'required'].includes(value.attribution) ? value.attribution : 'all',
    conditional: value.conditional !== false
  };
}
function hasFilters(filters = activeFilters) {
  return (filters.language || 'all') !== 'all' || filters.price !== 'all' || filters.uses.length > 0 || filters.attribution !== 'all' || !filters.conditional;
}
function filterRules(font, id) {
  const scopes = { personal: ['print', 'web_image', 'video', 'packaging', 'branding'], commercial: ['print', 'web_image', 'video', 'packaging', 'branding'], website: ['web_image', 'webfont'], embedding: ['app_embedding', 'ebook_embedding'] };
  if (id === 'modification' || id === 'redistribution') {
    const rule = font.additionalRights?.[id];
    return [rule && !rule.conflict && rule.sourceIds?.length && rule.sourceIds.every(sourceId => font.sources.some(source => source.id === sourceId)) ? rule : { status: 'unknown', condition: '확인되지 않은 조건입니다.' }];
  }
  return (scopes[id] || [id]).map(scope => getRule(font, scope));
}
function matchesFilters(font, filters = activeFilters) {
  const allowed = status => status === 'allowed' || (filters.conditional && status === 'conditional');
  if (filters.language && filters.language !== 'all') {
    const support = font.languageSupport;
    if (!support || support.conflict || !support.sourceIds?.length || !support.sourceIds.every(id => font.sources.some(source => source.id === id))) return false;
    if (filters.language === 'en-only') {
      if (!support.codes.includes('en') || support.codes.includes('ko') || !support.koreanExcluded) return false;
    } else if (!support.codes.includes(filters.language)) return false;
  }
  if (filters.price !== 'all' && font.pricing?.type !== filters.price) return false;
  if (filters.attribution !== 'all') {
    const rule = font.attribution;
    if (!rule || rule.conflict || !rule.sourceIds?.length || !rule.sourceIds.every(id => font.sources.some(source => source.id === id)) || rule.status !== filters.attribution) return false;
  }
  return filters.uses.every(id => filterRules(font, id).every(rule => allowed(rule.status)));
}
function filterSummary(filters = activeFilters) {
  return [({ko:'한글 지원',en:'영문 지원','en-only':'영문 중심 · 한글 미지원'})[filters.language] || '', filters.price === 'all' ? '' : PRICE[filters.price], ...filters.uses.map(id => FILTER_OPTIONS.find(option => option[0] === id)[1]), filters.attribution === 'all' ? '' : `출처표기 ${filters.attribution === 'required' ? '필요' : '의무 없음'}`, filters.conditional ? '' : '조건부 제외'].filter(Boolean).join(' · ');
}
function filtersHash(query, filters = activeFilters) {
  return '#search=' + encodeURIComponent(query) + '&filters=' + encodeURIComponent(JSON.stringify(sanitizeFilters(filters)));
}
function parseSearchHash(hash) {
  const [encodedQuery, encodedFilters] = hash.slice(7).split('&filters=');
  const query = decodeURIComponent(encodedQuery);
  let filters = emptyFilters();
  if (encodedFilters) { try { filters = sanitizeFilters(JSON.parse(decodeURIComponent(encodedFilters))); } catch (_) { /* Ignore malformed filter data, never execute it. */ } }
  return { query, filters };
}
// Compare Korean names to their two-set keyboard strokes. No external conversion service.
function koreanKeys(text) {
  const initial = ['r','R','s','e','E','f','a','q','Q','t','T','d','w','W','c','z','x','v','g'];
  const vowel = ['k','o','i','O','j','p','u','P','h','hk','ho','hl','y','n','nj','np','nl','b','m','ml','l'];
  const final = ['', 'r','R','rt','s','sw','sg','e','f','fr','fa','fq','ft','fx','fv','fg','a','q','qt','t','T','d','w','c','z','x','v','g'];
  return Array.from(text.normalize('NFC')).map(char => {
    const code = char.charCodeAt(0) - 0xac00;
    return code >= 0 && code < 11172 ? initial[Math.floor(code / 588)] + vowel[Math.floor(code % 588 / 28)] + final[code % 28] : char;
  }).join('');
}
function editDistance(a, b) {
  const rows = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) rows[i][0] = i;
  for (let j = 0; j <= b.length; j++) rows[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1);
  }
  return rows[a.length][b.length];
}
function suggestFonts(query, list = fonts) {
  const key = normalize(query).slice(0, 100);
  if (key.length < 2) return [];
  return list.map(font => {
    let score = Infinity;
    for (const name of [font.name, font.korean, ...(font.aliases || [])]) {
      const candidate = normalize(name);
      const distance = editDistance(key, candidate);
      if (distance <= (key.length < 5 ? 1 : 2) && distance / Math.max(key.length, candidate.length) <= 0.35) score = Math.min(score, distance / Math.max(key.length, candidate.length));
      if (/[가-힣]/.test(name) && /^[a-z]+$/.test(key) && key.length >= 4) {
        const strokes = normalize(koreanKeys(name));
        if (strokes.includes(key)) score = Math.min(score, 0.05);
        else {
          const kd = editDistance(key, strokes);
          if (kd <= 2 && kd / Math.max(key.length, strokes.length) <= 0.2) score = Math.min(score, kd / Math.max(key.length, strokes.length));
        }
      }
    }
    return { font, score };
  }).filter(item => Number.isFinite(item.score)).sort((a, b) => a.score - b.score || a.font.id.localeCompare(b.font.id)).slice(0, 3).map(item => item.font);
}

function form(value = '') {
  return `<div class="search-wrap filter-wrap"><form class="search" role="search"><button type="button" class="filter-toggle" aria-label="라이선스 필터" aria-expanded="false" aria-controls="license-filters"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/><circle cx="8" cy="6" r="2" fill="white"/><circle cx="16" cy="12" r="2" fill="white"/><circle cx="10" cy="18" r="2" fill="white"/></svg>${hasFilters() ? '<i></i>' : ''}</button>${searchIcon}<input aria-label="폰트 이름" name="font" placeholder="폰트 이름을 입력하거나 필터로 찾아보세요" autocomplete="off" maxlength="100" value="${escapeHTML(value)}"><button aria-label="폰트 검색" type="submit">↑</button></form>
    <section id="license-filters" class="filter-panel" aria-label="라이선스 조건" hidden>
      <div class="filter-heading"><strong>라이선스 필터</strong><button type="button" data-filter-close aria-label="필터 닫기">×</button></div>
      <div class="filter-selects language-select"><label>폰트 언어<select name="language"><option value="all">전체</option><option value="ko" ${activeFilters.language === 'ko' ? 'selected' : ''}>한글 지원</option><option value="en" ${activeFilters.language === 'en' ? 'selected' : ''}>영문 지원</option><option value="en-only" ${activeFilters.language === 'en-only' ? 'selected' : ''}>영문 중심 · 한글 미지원</option></select></label></div>
      <p class="language-help">지원 문자 기준입니다. 한글·영문을 함께 지원하면 두 필터 모두에 표시됩니다.</p>
      <div class="filter-selects"><label>무료/유료<select name="price"><option value="all">전체</option><option value="free" ${activeFilters.price === 'free' ? 'selected' : ''}>무료</option><option value="paid" ${activeFilters.price === 'paid' ? 'selected' : ''}>유료</option></select></label>
      <label>출처표기<select name="attribution"><option value="all">전체</option><option value="not_required" ${activeFilters.attribution === 'not_required' ? 'selected' : ''}>제작물 표기 의무 없음</option><option value="required" ${activeFilters.attribution === 'required' ? 'selected' : ''}>제작물 표기 필요</option></select></label></div>
      <fieldset><legend>사용 조건 · 선택한 조건을 모두 충족</legend><div class="filter-options">${FILTER_OPTIONS.map(([id, label]) => `<label><input type="checkbox" name="use" value="${id}" ${activeFilters.uses.includes(id) ? 'checked' : ''}><span>${label}</span></label>`).join('')}</div></fieldset>
      <label class="conditional-option"><input type="checkbox" name="conditional" ${activeFilters.conditional ? 'checked' : ''}>조건부 가능 포함 · 상세 조건 확인 필요</label>
      <p class="filter-help">개인·상업적 사용은 디자인 제작 기준입니다. 웹사이트는 이미지와 웹폰트, 임베딩은 앱과 전자책을 모두 확인합니다. 미확인·별도 확인 항목은 선택한 조건의 결과에서 제외합니다. 출처표기는 제작물 기준이며 폰트 파일 배포 고지는 별도입니다.</p>
      <div class="filter-actions"><button type="button" data-filter-reset>초기화</button><button type="button" data-filter-apply>필터 적용</button></div>
    </section>${hasFilters() ? `<p class="applied-filters">적용 중: ${escapeHTML(filterSummary())}</p>` : ''}</div>`;
}
// Sample without replacement once per page load; keep the full search catalog intact.
function sampleFonts(list, limit, random = Math.random) {
  const pool = [...list];
  const count = Math.min(limit, pool.length);
  for (let i = 0; i < count; i++) {
    const j = i + Math.floor(random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
function chips() {
  return `<div class="suggestions"><span>무작위 폰트 ${featuredFonts.length}종</span>${featuredFonts.map(font => `<button class="chip" data-font="${escapeHTML(font.id)}">${escapeHTML(font.korean)}</button>`).join('')}</div>`;
}
function home() {
  main.innerHTML = `<section class="home"><div class="eyebrow"><i></i> CHECK THE FONT, FREE YOUR DESIGN</div>
    <h1>이 폰트, <em>어디까지</em> 써도 될까요?</h1><p class="subtitle">다운로드부터 라이선스까지, 흩어진 폰트 정보를 한눈에.<br>폰트별 사용 조건과 공식 근거를 함께 확인하세요.</p>
    ${form()}<div class="home-chips" tabindex="0" role="region" aria-label="무작위로 선택한 폰트 목록">${chips()}</div>
    <div class="features"><article><div class="feature-icon">↗</div><h2>다운로드와 구매 안내</h2><p>유·무료 여부와 제공 방식을<br>폰트별로 확인하세요.</p></article>
    <article><div class="feature-icon">☑</div><h2>사용 방식까지 구체적으로</h2><p>${checklistGroups.length}개 카테고리와 조건을<br>한눈에 살펴보세요.</p></article>
    <article><div class="feature-icon">◎</div><h2>출처가 있는 정보</h2><p>공식 근거와 확인일,<br>아직 모르는 조건도 표시해요.</p></article></div>
    <div class="home-bottom"><span></span>폰트 걱정은 덜고, 디자인에 더 집중하세요<span></span></div></section>`;
  bind();
}
const checklistGroups = [
  { name: '인쇄출판', items: ['print'] },
  { name: '웹사이트', items: ['web_image', 'webfont'], labels: ['이미지', '폰트'] },
  { name: '포장지', items: ['packaging'] },
  { name: '영상', items: ['video'] },
  { name: '임베딩', items: ['app_embedding', 'ebook_embedding'], labels: ['앱', '전자책'] },
  { name: 'BI/CI', items: ['branding'] },
  { name: '출처표기 의무', items: ['attribution'] }
];
function attributionRule(font) {
  return font.attribution || { status: 'unknown', condition: '출처표기 조건을 확인하지 못했습니다.', sourceIds: [] };
}
function usageRows(font) {
  return checklistGroups.map(group => `<tbody>${group.items.map((id, index) => {
    const category = categories.find(category => category.id === id);
    const rule = id === 'attribution' ? attributionRule(font) : getRule(font, id);
    const description = category?.description || '일반 제작물의 출처표기와 폰트 파일 배포 시 고지 의무를 구분합니다.';
    const label = group.labels?.[index] || group.name;
    const tooltip = `<button class="tooltip" aria-label="${escapeHTML(group.name + ' ' + label)} 설명" aria-describedby="tip-${id}">ⓘ<span role="tooltip" id="tip-${id}">${escapeHTML(description)}</span></button>`;
    const heading = group.labels
      ? `${index === 0 ? `<th scope="rowgroup" rowspan="${group.items.length}" class="group-heading">${escapeHTML(group.name)}</th>` : ''}<th scope="row" class="branch-heading">${escapeHTML(label)} ${tooltip}</th>`
      : `<th scope="row" colspan="2" class="group-heading">${escapeHTML(group.name)} ${tooltip}</th>`;
    return `<tr ${id === 'attribution' ? 'data-attribution="true"' : `data-scope="${id}"`}>${heading}<td class="rule-status">${badge(rule.status)}</td><td class="rule-condition"><p class="condition">${escapeHTML(rule.condition)}</p></td></tr>`;
  }).join('')}</tbody>`).join('');
}
function result(font) {
  const review = font.review;
  const pending = review.openQuestions.length ? `<section class="pending-box"><h2>아직 확인이 필요한 조건</h2><ul>${review.openQuestions.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>` : '';
  const evidenceLocations = checklistGroups.flatMap(group => group.items.map((id, index) => {
    const rule = id === 'attribution' ? attributionRule(font) : getRule(font, id);
    return `<li><strong>${escapeHTML(group.name + (group.labels ? ' · ' + group.labels[index] : ''))}</strong> — ${escapeHTML(rule.evidenceSection || '추가 확인 필요')}</li>`;
  })).join('');
  main.innerHTML = `<section class="results"><button class="back" data-home>← 새로운 폰트 찾기</button>${form(font.name)}
    <div class="result-heading"><div><div class="eyebrow">FONT LICENSE CHECK</div><h1>${escapeHTML(font.korean)}</h1><p>${escapeHTML(font.name)} <span class="divider">|</span> ${escapeHTML(font.author)}</p></div>${priceBadge(font)}</div>
    <div class="download-card"><div><strong>${escapeHTML(font.acquisition.site)}</strong><p>${escapeHTML(font.pricing.description)}</p><p>${escapeHTML(font.acquisition.description)}</p></div>
      ${externalLink(font.acquisition.url, font.acquisition.method === 'subscription' ? '이용권 · 구매 안내' : font.acquisition.method === 'purchase' ? '구매 안내' : '다운로드 안내')}</div>
    <div class="section-title"><h2>라이선스 체크리스트</h2><span class="legend">상태와 핵심 조건을 함께 확인하세요</span></div>
    <p class="mobile-table-hint">표를 좌우로 밀어 모든 조건을 확인하세요.</p><div class="table-shell" tabindex="0" role="region" aria-label="라이선스 체크리스트"><table class="checklist-table"><caption class="sr-only">${escapeHTML(font.korean)}의 라이선스 체크리스트: 카테고리, 상태와 조건</caption><colgroup><col class="group-col"><col class="branch-col"><col class="status-col"><col class="condition-col"></colgroup><thead><tr><th scope="col" colspan="2">카테고리</th><th scope="col">상태</th><th scope="col">핵심 조건</th></tr></thead>${usageRows(font)}</table></div>
    <details class="mobile-category-guide"><summary>카테고리 설명 보기</summary>${categories.map(category => `<p><strong>${escapeHTML(category.name)}</strong><br>${escapeHTML(category.description)}</p>`).join('')}<p><strong>출처표기 의무</strong><br>제작물의 출처표기와 폰트 파일 배포 시 저작권·라이선스 고지를 구분합니다.</p></details>
    <section class="license-card" aria-labelledby="license-heading"><div class="section-title"><h2 id="license-heading">라이선스 정보</h2><span class="review-tag">${review.status === 'verified' ? '공식 원문 확인' : '일부 조건 확인 필요'}</span></div>
      <h3>${escapeHTML(font.license.name)}</h3><p class="license-summary">${escapeHTML(font.license.summary)}</p><p>${escapeHTML(font.license.modification)}</p>
      ${font.additionalRights ? `<div class="additional-rights"><h3>수정 · 재배포 조건</h3>${Object.entries(font.additionalRights).map(([id, rule]) => `<p><strong>${id === 'modification' ? '수정' : '재배포'}</strong> ${badge(rule.status)}<br>${escapeHTML(rule.condition)} <small>확인 ${escapeHTML(rule.checkedAt)}</small></p>`).join('')}</div>` : ''}
      ${font.languageSupport ? `<p class="language-support"><strong>확인된 문자 지원: ${font.languageSupport.codes.map(code => code === 'ko' ? '한글' : '영문').join(' · ') || '미확인'}</strong><br>${escapeHTML(font.languageSupport.description)} · 확인 ${escapeHTML(font.languageSupport.checkedAt)}</p>` : ''}
      <p class="review-summary">${escapeHTML(review.summary)}</p><p class="checked-date">자료 확인일 <time datetime="${escapeHTML(font.checkedAt)}">${escapeHTML(font.checkedAt)}</time> · 계약의 유효기간이나 폰트 출시일이 아닙니다.</p>
      <div class="sources-list"><h3>공식 원문과 출처</h3>${font.sources.map(source => `<div>${externalLink(source.url, source.title)}<span>확인 ${escapeHTML(source.checkedAt)}</span></div>`).join('')}</div>
      <details class="license-evidence"><summary>항목별 근거 위치</summary><ul>${evidenceLocations}</ul></details></section>
    ${pending}<p class="note">이 요약은 표시된 공식 배포본과 이용 방식에 관한 안내입니다. 같은 이름의 다른 배포판이나 별도 계약에는 다른 조건이 적용될 수 있습니다. 사용 전 최신 원문을 확인하세요.</p></section>`;
  bind();
}
function search(query) {
  const next = filtersHash(query.trim());
  if (location.hash === next) route();
  else location.hash = next;
}
function searchResults(query) {
  const eligible = fonts.filter(font => matchesFilters(font));
  const found = query.trim() ? findFonts(query, eligible) : { exact: null, matches: eligible };
  if (found.exact) { result(found.exact); return; }
  const suggestions = found.matches.length || !query.trim() ? [] : suggestFonts(query, eligible);
  const excluded = query.trim() && findFonts(query).matches.length && !found.matches.length;
  main.innerHTML = `<section class="results"><button class="back" data-home>← 처음으로</button>${form(query)}<div class="empty"><div class="eyebrow">FONT SEARCH</div>
    <h1>${found.matches.length ? '조건에 맞는 폰트를 찾았어요' : excluded ? '선택한 필터에 맞는 폰트가 없어요' : suggestions.length ? '비슷한 폰트를 찾았어요' : '검색 결과가 없어요'}</h1>
    <p>${found.matches.length ? `${found.matches.length}개의 폰트를 찾았어요.` : `${query.trim() ? '“' + escapeHTML(query) + '” · ' : ''}검색어나 필터 조건을 조정해 보세요.`}</p>
    ${suggestions.length ? `<div class="typo-suggestions"><h2>이 폰트를 찾으셨나요?</h2>${suggestions.map(font => `<button class="typo-choice" data-font="${escapeHTML(font.id)}">${escapeHTML(font.korean)}<span>${escapeHTML(font.name)} · ${PRICE[font.pricing.type]} →</span></button>`).join('')}<p>철자가 비슷하거나 한글을 영문 키보드로 입력한 경우를 제안해요.</p></div>` : ''}
    ${found.matches.length ? `<div class="matches">${found.matches.map(font => `<button class="match" data-font="${escapeHTML(font.id)}"><span>${escapeHTML(displayName(font))}<small>${escapeHTML(font.license.name)}</small></span><span>${priceBadge(font)} <span aria-hidden="true">→</span></span></button>`).join('')}</div>` : ''}
    ${hasFilters() ? '<button class="chip clear-search-filters" type="button" data-clear-filters>필터 해제하고 다시 검색</button>' : ''}
    ${!found.matches.length ? `<p>현재 ${fonts.length}종을 등록했어요. 확인되지 않은 조건은 허용으로 추정하지 않습니다.</p>` : ''}</div></section>`;
  bind();
}
function route() {
  const hash = location.hash.slice(1);
  if (hash === 'guide' || hash === 'sources') { if (!main.innerHTML) home(); showDialog(hash); return; }
  if (dialog.open) dialog.close();
  if (hash.startsWith('font=')) {
    const font = fonts.find(font => font.id === hash.slice(5));
    if (font) { activeFilters = emptyFilters(); result(font); return; }
  }
  if (hash.startsWith('search=')) {
    try { const state = parseSearchHash(hash); activeFilters = state.filters; searchResults(state.query); } catch (error) { if (error instanceof URIError) home(); else throw error; }
    return;
  }
  activeFilters = emptyFilters();
  home();
}
function bind() {
  main.querySelector('form')?.addEventListener('submit', event => { event.preventDefault(); search(new FormData(event.target).get('font')); });
  main.querySelectorAll('[data-font]').forEach(button => button.onclick = () => { search(fonts.find(font => font.id === button.dataset.font).name); });
  main.querySelectorAll('[data-home]').forEach(button => button.onclick = () => { location.hash = ''; });
  main.querySelectorAll('[data-clear-filters]').forEach(button => button.onclick = () => { activeFilters = emptyFilters(); search(main.querySelector('[name=font]').value); });
  const wrap = main.querySelector('.filter-wrap');
  const toggle = main.querySelector('.filter-toggle');
  const panel = main.querySelector('.filter-panel');
  if (!wrap || !toggle || !panel) return;
  let pinned = false;
  let dismissed = false;
  const open = () => { panel.hidden = false; toggle.setAttribute('aria-expanded', 'true'); };
  const close = () => { panel.hidden = true; toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { dismissed = false; open(); } });
  wrap.addEventListener('pointerleave', () => { if (!pinned && !panel.contains(document.activeElement)) close(); });
  toggle.addEventListener('click', () => { pinned = !pinned; dismissed = !pinned; if (pinned) open(); else close(); });
  wrap.addEventListener('focusin', event => { if (!dismissed && (event.target === toggle || panel.contains(event.target))) open(); });
  wrap.addEventListener('focusout', event => { if (!pinned && !wrap.contains(event.relatedTarget)) close(); });
  panel.addEventListener('change', () => { pinned = true; });
  const dismiss = () => { pinned = false; dismissed = true; close(); toggle.focus(); };
  wrap.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); dismiss(); } });
  panel.querySelector('[data-filter-close]').onclick = dismiss;
  panel.querySelector('[data-filter-reset]').onclick = () => {
    panel.querySelectorAll('[name=use]').forEach(input => { input.checked = false; });
    panel.querySelector('[name=language]').value = 'all';
    panel.querySelector('[name=price]').value = 'all';
    panel.querySelector('[name=attribution]').value = 'all';
    panel.querySelector('[name=conditional]').checked = true;
    pinned = true;
  };
  panel.querySelector('[data-filter-apply]').onclick = () => {
    activeFilters = sanitizeFilters({language: panel.querySelector('[name=language]').value, price: panel.querySelector('[name=price]').value,
      attribution: panel.querySelector('[name=attribution]').value,
      uses: [...panel.querySelectorAll('[name=use]:checked')].map(input => input.value),
      conditional: panel.querySelector('[name=conditional]').checked});
    search(main.querySelector('[name=font]').value);
  };
}
function showDialog(type) {
  document.getElementById('dialog-content').innerHTML = type === 'guide' ? `<h2>라이선스, 이렇게 읽어보세요</h2>
    <div class="guide-statuses">${['allowed', 'conditional', 'check', 'unknown', 'prohibited'].map(status => badge(status)).join(' ')}</div>
    <p>“가능”은 표시된 사용 방식에 한한 허용입니다. “조건부 가능”은 명시된 조건을 충족해야 합니다. “별도 확인 필요”는 계약·사용 방식의 확인이 필요하며, “확인되지 않음”은 근거가 부족하거나 충돌하는 상태입니다. 두 상태 모두 사용 허가를 뜻하지 않습니다.</p>
    <h3>OFL은 사용 분야가 아니라 라이선스예요</h3><p>라이선스 종류는 별도 카드에 표시합니다. 같은 OFL이라도 배포본의 고지·예약 이름을 확인하세요. 출처표기 의무는 일반 제작물과 폰트 파일 배포를 구분합니다.</p>
    ${categories.map(category => `<h3>${escapeHTML(category.name)}</h3><p>${escapeHTML(category.description)}</p>`).join('')}` : `<h2>정보의 출처를 확인하세요</h2>
    <p>현재 ${fonts.length}종을 등록했으며, 공식 근거 확인 ${fonts.filter(font => font.review.status === 'verified').length}종, 일부 조건 확인 필요 ${fonts.filter(font => font.review.status === 'partial').length}종입니다. 각 결과에 공식 링크와 실제 자료 확인일을 표시합니다.</p>
    <h3>공식 자료를 개별 확인해 수동 등록합니다</h3><p>자동 갱신 기능은 연결하지 않았습니다. 허용된 공식 공개 자료의 다운로드 또는 공식 페이지 개별 열람 후 검토하여 등록합니다. 공식 배포본·라이선스를 우선하며, 눈누 등 탐색 사이트의 요약만으로 허용 여부를 등록하지 않습니다. API·데이터 이용 권한이 불분명한 자동 수집은 진행하지 않습니다.</p>
    <h3>공식 자료 제공처</h3>${externalLink('https://github.com/google/fonts', 'Google Fonts 공식 데이터 저장소')}${externalLink('https://copyright.keris.or.kr/wft/fntDwnld', 'KERIS 학교 안심폰트')}${externalLink('https://www.sandollcloud.com/font/8/Sandoll-GothicNeo1', '산돌 고딕Neo1 공식 상품 안내')}
    <h3>폰트 발견용 참고</h3>${externalLink('https://noonnu.cc/', '눈누')}`;
  if (!dialog.open) dialog.showModal();
}
document.getElementById('close-dialog').onclick = () => dialog.close();
dialog.addEventListener('close', () => {
  if (['#guide', '#sources'].includes(location.hash)) history.replaceState(null, '', location.pathname + location.search);
});
document.querySelectorAll('a[href="#guide"],a[href="#sources"]').forEach(anchor => anchor.addEventListener('click', event => {
  event.preventDefault(); showDialog(anchor.hash.slice(1));
}));
window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });
route();

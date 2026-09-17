// Apply before CSS loads to avoid a bright flash when dark mode is selected.
(() => {
  const root = document.documentElement;
  const system = window.matchMedia?.('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem('fontcheck-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) { /* Private or restricted storage: switching still works. */ }

  function apply(theme) {
    root.dataset.theme = theme;
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title = theme === 'dark' ? '라이트모드로 전환' : '다크모드로 전환';
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141218' : '#f6f2ff');
  }

  apply(preference || (system?.matches ? 'dark' : 'light'));
  system?.addEventListener('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(preference);
      try { localStorage.setItem('fontcheck-theme', preference); } catch (_) { /* Optional persistence. */ }
    });
  });
})();

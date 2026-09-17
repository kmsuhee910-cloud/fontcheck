// Reviewed records only. Missing permissions must never default to allowed.
const FONT_CATALOG = {
  "schemaVersion": 1,
  "scopes": [
    {
      "id": "print",
      "name": "인쇄",
      "description": "책, 포스터, 명함 등 인쇄된 제작물"
    },
    {
      "id": "web_image",
      "name": "웹 · 이미지",
      "description": "웹페이지에 이미지로 게시하는 글자·배너. 폰트 파일 전송과 구분합니다."
    },
    {
      "id": "webfont",
      "name": "웹 · 웹폰트",
      "description": "브라우저에 폰트 파일을 보내 실제 텍스트를 표시하는 방식"
    },
    {
      "id": "packaging",
      "name": "포장지",
      "description": "판매용 제품의 패키지, 라벨, 쇼핑백"
    },
    {
      "id": "video",
      "name": "영상",
      "description": "유튜브, 광고, 영화의 자막·영상 그래픽"
    },
    {
      "id": "app_embedding",
      "name": "앱 임베딩",
      "description": "앱·게임·소프트웨어에 폰트 파일을 포함하는 방식. UI 이미지와 다릅니다."
    },
    {
      "id": "ebook_embedding",
      "name": "전자책 임베딩",
      "description": "전자책 문서 안에 폰트를 포함하거나 파일로 동봉하는 방식"
    },
    {
      "id": "branding",
      "name": "BI/CI",
      "description": "브랜드·기업 로고와 워드마크 디자인. 상표 등록 가능성 판단과는 별개입니다."
    }
  ],
  "fonts": [
    {
      "id": "pretendard",
      "name": "Pretendard",
      "korean": "프리텐다드",
      "author": "길형진 · orioncactus",
      "aliases": [
        "프리텐더드"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "GitHub · Pretendard 공식 배포처",
        "url": "https://github.com/orioncactus/pretendard/releases",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "수정본은 원문에 지정된 예약 이름(Pretendard 등)을 허락 없이 사용하지 마세요."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "GitHub · Pretendard 공식 배포처",
          "url": "https://github.com/orioncactus/pretendard/releases",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/orioncactus/pretendard/blob/main/LICENSE",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "제작사 문자 지원 안내",
          "url": "https://github.com/orioncactus/pretendard",
          "kind": "metadata",
          "checkedAt": "2026-09-17"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 수정본은 원문에 지정된 예약 이름(Pretendard 등)을 허락 없이 사용하지 마세요.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "제작사 공식 안내의 한글·라틴 지원 기준입니다. 별도의 라틴 전용 Std 배포판과 구분합니다."
      }
    },
    {
      "id": "noto-sans-kr",
      "name": "Noto Sans KR",
      "korean": "노토 산스 KR",
      "author": "Adobe · Google",
      "aliases": [
        "노토산스",
        "본고딕"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Noto+Sans+KR",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "수정본에 예약 이름 Source를 쓰려면 권리자의 허락이 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts",
          "url": "https://fonts.google.com/specimen/Noto+Sans+KR",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/notosanskr/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/notosanskr/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "9b8b27c0dd1adbb0057d1fbe9534207ab3606114ace6755453d14668912471a1"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 수정본에 예약 이름 Source를 쓰려면 권리자의 허락이 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nanum-gothic",
      "name": "Nanum Gothic",
      "korean": "나눔고딕",
      "author": "네이버",
      "aliases": [
        "나눔 고딕"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nanum+Gothic",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "수정본은 원문에 지정된 Nanum·Naver Nanum 계열 예약 이름을 확인하세요."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts",
          "url": "https://fonts.google.com/specimen/Nanum+Gothic",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumgothic/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumgothic/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3f58e10d125ed43d363f1730b14a29a740f61c39dfa8dc1cb7be532b0072b2e2"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 수정본은 원문에 지정된 Nanum·Naver Nanum 계열 예약 이름을 확인하세요.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "inter",
      "name": "Inter",
      "korean": "인터",
      "author": "The Inter Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Inter · 공식 배포처",
        "url": "https://rsms.me/inter/",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Inter · 공식 배포처",
          "url": "https://rsms.me/inter/",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/rsms/inter/blob/master/LICENSE.txt",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/inter/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "79e4721ef4f72251c6080a40dfd9efb6728b4df1fc690f0c70eb4b1b5303a5b0"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "noto-serif-kr",
      "name": "Noto Serif KR",
      "korean": "노토 세리프 KR",
      "author": "Google",
      "aliases": [
        "노토세리프",
        "본명조"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Noto+Serif+KR",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 다른 배포판은 해당 원문을 확인하세요."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts",
          "url": "https://fonts.google.com/specimen/Noto+Serif+KR",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/notoserifkr/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/notoserifkr/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "11a2445e02b744e88e8ed6fd5b807da7df4628fcc6526a15ea9b111ba0458bf4"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 다른 배포판은 해당 원문을 확인하세요.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nanum-myeongjo",
      "name": "Nanum Myeongjo",
      "korean": "나눔명조",
      "author": "네이버",
      "aliases": [
        "나눔 명조"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nanum+Myeongjo",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "수정본은 원문에 지정된 Nanum·Naver Nanum 계열 예약 이름을 확인하세요."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts",
          "url": "https://fonts.google.com/specimen/Nanum+Myeongjo",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanummyeongjo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanummyeongjo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "9b5fb78ccdc8097d94ab915a5feba1fd3436520ab620aefe73eea10e29da709f"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 수정본은 원문에 지정된 Nanum·Naver Nanum 계열 예약 이름을 확인하세요.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "wanted-sans",
      "name": "Wanted Sans",
      "korean": "원티드 산스",
      "author": "원티드랩",
      "aliases": [
        "원티드산스"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "원티드랩 · 공식 다운로드 안내",
        "url": "https://github.com/wanteddev/wanted-sans#다운로드",
        "description": "공식 배포처에서 폰트 파일을 내려받아 설치합니다.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "원티드랩 · 공식 다운로드 안내",
          "url": "https://github.com/wanteddev/wanted-sans#다운로드",
          "kind": "distribution",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/wanteddev/wanted-sans/blob/main/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-15"
        },
        {
          "id": "language-metadata",
          "title": "제작사 문자 지원 안내",
          "url": "https://github.com/wanteddev/wanted-sans",
          "kind": "metadata",
          "checkedAt": "2026-09-17"
        }
      ],
      "checkedAt": "2026-09-15",
      "review": {
        "status": "verified",
        "summary": "배포처와 폰트별 OFL 원문을 확인했습니다. 사용 범위는 원문과 SIL FAQ를 요약했습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정 가능. OFL 유지 및 원문에 지정된 예약 이름 조건을 지켜야 합니다. 확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-16"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-16"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "제작사 공식 안내의 한글·라틴 지원 기준입니다. 별도의 라틴 전용 Std 배포판과 구분합니다."
      }
    },
    {
      "id": "sandoll-gothicneo1",
      "name": "Sandoll GothicNeo1",
      "korean": "산돌 고딕Neo1",
      "author": "산돌",
      "aliases": [
        "Sandoll 고딕Neo1",
        "산돌고딕네오1",
        "고딕네오1"
      ],
      "pricing": {
        "type": "paid",
        "description": "유료 이용권 · 실제 금액과 사용 기간은 구매 페이지에서 확인",
        "sourceIds": [
          "product",
          "subscription"
        ]
      },
      "acquisition": {
        "method": "subscription",
        "site": "산돌구름",
        "url": "https://www.sandollcloud.com/font/8/Sandoll-GothicNeo1",
        "description": "해당 폰트가 포함된 이용권을 실제 사용자 수와 기업 유형에 맞게 구매한 뒤 산돌구름 PC 앱에서 활성화합니다. 일반 이용권은 폰트 파일 직접 다운로드 상품이 아니며, 파일이 필요한 웹폰트·임베딩은 별도 계약 대상입니다.",
        "sourceIds": [
          "product",
          "download",
          "subscription",
          "service-terms",
          "usage-faq"
        ]
      },
      "license": {
        "name": "산돌구름 상용 이용권 · 계약별 조건",
        "type": "proprietary",
        "summary": "OFL이 아닙니다. 적합한 이용권의 유효 기간 안에 제작이 완료된 이미지 형태 작업물은 만료 후에도 그대로 유지·사용할 수 있습니다. 만료 후 폰트를 사용한 신규 제작·수정·편집은 적합한 상품 재결제가 필요합니다. 약정 중도 해지·계정 삭제 및 별도 계약의 조건은 따로 확인하세요.",
        "modification": "폰트 변형·서버 탑재 등은 공식 PDF에서 별도 문의 대상으로 안내합니다.",
        "sourceIds": [
          "product",
          "scope",
          "terms",
          "service-terms",
          "usage-faq",
          "subscription"
        ]
      },
      "usage": {
        "print": {
          "status": "conditional",
          "condition": "해당 폰트가 포함된 유효한 이용권으로 인쇄물을 제작할 수 있습니다.",
          "sourceIds": [
            "product"
          ],
          "evidenceSection": "상품 요약표 · 인쇄출판"
        },
        "web_image": {
          "status": "conditional",
          "condition": "유효한 이용권으로 웹 디자인 이미지를 제작할 수 있습니다. 웹폰트 파일 제공은 별도입니다.",
          "sourceIds": [
            "product",
            "scope"
          ],
          "evidenceSection": "상품 요약표 · 웹사이트 / PDF 2쪽"
        },
        "webfont": {
          "status": "check",
          "condition": "일반 이용권의 이미지 사용과 구분하세요. Unlock 웹폰트는 별도 문의 대상으로 명시되어 있습니다.",
          "sourceIds": [
            "scope"
          ],
          "evidenceSection": "PDF 4쪽 · 별도 문의 항목"
        },
        "packaging": {
          "status": "conditional",
          "condition": "유효한 이용권으로 제품 패키지·포장지를 디자인할 수 있습니다.",
          "sourceIds": [
            "product",
            "scope"
          ],
          "evidenceSection": "상품 요약표 · 인쇄출판 / PDF 1쪽"
        },
        "video": {
          "status": "conditional",
          "condition": "유효한 이용권으로 광고·영화 등 영상 그래픽을 제작할 수 있습니다.",
          "sourceIds": [
            "product"
          ],
          "evidenceSection": "상품 요약표 · 상업영상"
        },
        "app_embedding": {
          "status": "check",
          "condition": "앱 UI 제작 허용만으로 폰트 파일 포함을 판단하지 마세요. Unlock 앱·게임 임베딩은 별도 문의 대상입니다.",
          "sourceIds": [
            "product",
            "scope"
          ],
          "evidenceSection": "상품 요약표 · APP UI / PDF 4쪽"
        },
        "ebook_embedding": {
          "status": "check",
          "condition": "전자책 제작 허용과 파일 임베딩은 구분해야 합니다. 리더기 탑재·추출 가능한 PDF 등은 별도 문의 대상입니다.",
          "sourceIds": [
            "product",
            "scope"
          ],
          "evidenceSection": "상품 요약표 · 이러닝·이북 / PDF 4쪽"
        },
        "branding": {
          "status": "conditional",
          "condition": "유효한 이용권으로 로고·브랜드 디자인 제작 가능. 상표 등록 가능성은 별도로 확인하세요.",
          "sourceIds": [
            "product"
          ],
          "evidenceSection": "상품 요약표 · CI·BI"
        }
      },
      "attribution": {
        "status": "unknown",
        "condition": "확인한 상품 요약표와 범위 PDF만으로 일반 제작물의 출처표기 의무를 확정하지 않았습니다. 구매 계약에서 확인하세요.",
        "sourceIds": [
          "product",
          "scope"
        ],
        "evidenceSection": "상품 요약표 및 범위 PDF에서 의무 확정 불가"
      },
      "sources": [
        {
          "id": "product",
          "title": "공식 상품 · 라이선스 요약표",
          "url": "https://www.sandollcloud.com/font/8/Sandoll-GothicNeo1",
          "kind": "product",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "scope",
          "title": "공식 라이선스 범위 PDF",
          "url": "https://media.sandollcloud.com/static/SandollCloud/pdf/license_a.pdf",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "download",
          "title": "공식 사용 방식 안내",
          "url": "https://en.sandollcloud.com/download",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "terms",
          "title": "산돌구름 회원 이용약관",
          "url": "https://www.sandollcloud.com/policyTermsUser",
          "kind": "terms",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "제작사 문자 지원 안내",
          "url": "https://www.sandollcloud.com/font/8/Sandoll-GothicNeo1",
          "kind": "metadata",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "service-terms",
          "title": "산돌구름 서비스 이용약관 · 제9–12·14·16조",
          "url": "https://www.sandollcloud.com/policyTermsService",
          "kind": "terms",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "usage-faq",
          "title": "공식 사용범위 FAQ · 만료 후 작업물·임베딩",
          "url": "https://www.sandollcloud.com/support/faq?category=rangeofuse",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "subscription",
          "title": "산돌 이용권 · 사용자 수·기업 유형·임베딩 제외",
          "url": "https://www.sandollcloud.com/font-subscription/1/Sandoll",
          "kind": "product",
          "checkedAt": "2026-09-17"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "partial",
        "summary": "공식 상품·범위 PDF·회원/서비스 약관·이용권·사용범위 FAQ를 재확인했습니다. 사용자 수에 맞는 이용권 구매와 이용 기간 안에 완성된 이미지 형태 작업물의 만료 후 유지·사용, 만료 후 폰트를 이용한 신규 제작·수정·편집 시 재결제 필요를 확인했습니다. 개별 구매 계약과 파일 임베딩·출처표기까지 확정한 것은 아닙니다.",
        "openQuestions": [
          "Unlock 웹폰트·앱·게임 임베딩의 계약 범위",
          "전자책 포함 방식, 리더기 탑재 및 추출 가능한 PDF 조건",
          "일반 제작물 출처표기 의무",
          "개별 계약의 사용자 수·추가 라이선스 및 약정 중도 해지·계정 삭제 시 작업물 사용 조건"
        ]
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 상품의 지원언어(영어·한국어) 및 한글 2,350자·라틴 95자 스펙 기준입니다."
      }
    },
    {
      "id": "gowun-dodum",
      "name": "Gowun Dodum",
      "korean": "고운돋움",
      "author": "The Gowun Dodum Project Authors",
      "aliases": [
        "고운 돋움"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Gowun+Dodum",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Gowun+Dodum",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/gowundodum/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/gowundodum/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "030c76da312a2b23eb97d1a65a05a06bc13ca1a7936f26ff4b2c4fa06b39cf2d"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "gowun-batang",
      "name": "Gowun Batang",
      "korean": "고운바탕",
      "author": "The Gowun Batang Project Authors",
      "aliases": [
        "고운 바탕"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Gowun+Batang",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Gowun+Batang",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/gowunbatang/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/gowunbatang/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "5ab6c5630b85b7d20e8cec7a3be246f9cd5a8f247dea4993f6fb9cf1cc24478e"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "jua",
      "name": "Jua",
      "korean": "주아",
      "author": "The Jua Project Authors",
      "aliases": [
        "주아체"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Jua",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Jua",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/jua/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/jua/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c6b70d2a511edacbfb1f216140d2b46e7375118b60113c82af492f489bbf7d67"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "do-hyeon",
      "name": "Do Hyeon",
      "korean": "도현",
      "author": "The Do Hyeon Project Authors",
      "aliases": [
        "도현체"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Do+Hyeon",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Do+Hyeon",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/dohyeon/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/dohyeon/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "8ab86d61289efe626aab97f2b7b6241aa1609e626c2154a7ec6e21e8c0cc2421"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "gugi",
      "name": "Gugi",
      "korean": "구기",
      "author": "TAE System & Typefaces Co.",
      "aliases": [
        "구기체"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Gugi",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Gugi",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/gugi/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/gugi/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "99a5aee379f63b6f290f0f884e3c7825d7d12a6018120f2333075eccd5f51bea"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "source-sans-3",
      "name": "Source Sans 3",
      "korean": "소스 산스 3",
      "author": "Adobe · Paul D. Hunt",
      "aliases": [
        "소스산스3",
        "Source Sans3"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Source+Sans+3",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Source가 지정되어 있습니다. 수정본의 기본 폰트 이름에는 권리자의 서면 허가 없이 Source를 사용할 수 없습니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Source+Sans+3",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "Google Fonts 배포본 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/sourcesans3/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "adobe-license",
          "title": "Adobe 제작사 OFL 원문",
          "url": "https://github.com/adobe-fonts/source-sans/blob/release/LICENSE.md",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/sourcesans3/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "f855c7833e0c780c90e5a797a003f86e1201990c0af65b9c75d0a04c9be05ed7"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 배포본과 Adobe 제작사 원문의 OFL 및 예약 이름 Source 조건을 대조했습니다. Google Fonts 무료 배포본 기준이며 Adobe Fonts 서비스 계약과는 구분합니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하세요. 예약 이름 Source는 서면 허가 없이 수정본 이름에 사용할 수 없으며 저작자 명의의 홍보도 제한됩니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "black-han-sans",
      "name": "Black Han Sans",
      "korean": "검은고딕",
      "author": "The Black Han Sans Project Authors",
      "aliases": [
        "블랙 한 산스",
        "검은 고딕"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Black+Han+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Black+Han+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/blackhansans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/blackhansans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "be9f5a5233538e4cb590db06639cdc9875c4cf848ea231b20bd5d98f5eff084e"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "dongle",
      "name": "Dongle",
      "korean": "동글",
      "author": "The Dongle Project Authors",
      "aliases": [
        "동글체"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Dongle",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Dongle",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/dongle/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/dongle/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c56ab22bf46b3888112b49c3961ed08c25819a8853c54fb11166d7b7e961486b"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "hahmlet",
      "name": "Hahmlet",
      "korean": "함렛",
      "author": "The Hahmlet Project Authors",
      "aliases": [
        "햄릿"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Hahmlet",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Hahmlet",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/hahmlet/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/hahmlet/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "e78f4fc16822a998b9872f77bcda4cad93401ad46543d909c66d49672c90b7dd"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "gaegu",
      "name": "Gaegu",
      "korean": "개구",
      "author": "The Gaegu Project Authors",
      "aliases": [
        "개구체"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Gaegu",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Gaegu",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/gaegu/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/gaegu/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "4e264dd655a6f7f8e27ec89f735f197cd43cd4aa4c73b03deaf48a0f20383e91"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "gamja-flower",
      "name": "Gamja Flower",
      "korean": "감자꽃",
      "author": "YoonDesign Inc.",
      "aliases": [
        "감자 꽃"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Gamja+Flower",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Gamja+Flower",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/gamjaflower/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/gamjaflower/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "73f9a93e6e8504cca6054f5a1737349728fce70aa7434add181b750fa79c616c"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "hi-melody",
      "name": "Hi Melody",
      "korean": "하이멜로디",
      "author": "YoonDesign Inc.",
      "aliases": [
        "하이 멜로디"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Hi+Melody",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Hi+Melody",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/himelody/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/himelody/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "89b65e369c5e83c85cae5d1b7ac4077fd4088c812eb89ffac062a93811efbad7"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "sunflower",
      "name": "Sunflower",
      "korean": "해바라기",
      "author": "The Sunflower Project Authors",
      "aliases": [
        "선플라워"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Sunflower",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Sunflower",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/sunflower/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/sunflower/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "5944c749518fbd05abd581f8f4097298219bf35df6ad95bb3a214c6ed204d75a"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요. 영문 지원은 확인한 자료에 명시되지 않아 미확인으로 두었습니다."
      }
    },
    {
      "id": "stylish",
      "name": "Stylish",
      "korean": "스타일리시",
      "author": "AsiaSoft Inc.",
      "aliases": [
        "스타일리쉬"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Stylish",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Stylish",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/stylish/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/stylish/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "fb62cce7117f4807ed30311dbf6d5a52e0031a095ca27991f307e0140bec9c40"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요. 영문 지원은 확인한 자료에 명시되지 않아 미확인으로 두었습니다."
      }
    },
    {
      "id": "poor-story",
      "name": "Poor Story",
      "korean": "푸어스토리",
      "author": "YoonDesign Inc.",
      "aliases": [
        "푸어 스토리"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Poor+Story",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Poor+Story",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/poorstory/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/poorstory/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "f018abf900a708d54fc9580c351789801a31d9366cbaccfc8c9f6860054b48d7"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "song-myung",
      "name": "Song Myung",
      "korean": "송명",
      "author": "The SongMyung Project Authors",
      "aliases": [
        "송명체"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Song+Myung",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Song+Myung",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/songmyung/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/songmyung/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "99313d2efe78f09068a12aab45245197f9d99f034e38df09ed8662cbcf1fdd99"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요. 영문 지원은 확인한 자료에 명시되지 않아 미확인으로 두었습니다."
      }
    },
    {
      "id": "ibm-plex-sans-kr",
      "name": "IBM Plex Sans KR",
      "korean": "IBM 플렉스 산스 KR",
      "author": "IBM Corp.",
      "aliases": [
        "IBM 플렉스 한글"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/IBM+Plex+Sans+KR",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Plex 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/IBM+Plex+Sans+KR",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/ibmplexsanskr/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/ibmplexsanskr/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "424565c06562f8fecab4cc94a4260d34d6895efbc1d7cad00bdaf9ddea066e79"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Plex 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nanum-pen-script",
      "name": "Nanum Pen Script",
      "korean": "나눔손글씨 펜",
      "author": "NHN Corporation",
      "aliases": [
        "나눔펜",
        "나눔 펜"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nanum+Pen+Script",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Nanum, Naver Nanum, NanumGothic, Naver NanumGothic, NanumMyeongjo, Naver NanumMyeongjo, NanumBrush, Naver NanumBrush, NanumPen, Naver NanumPen 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Nanum+Pen+Script",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumpenscript/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumpenscript/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "d81985915cd7afe1baff832137e63d6334766acbabbe65cbc933d2c15077455d"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Nanum, Naver Nanum, NanumGothic, Naver NanumGothic, NanumMyeongjo, Naver NanumMyeongjo, NanumBrush, Naver NanumBrush, NanumPen, Naver NanumPen 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nanum-brush-script",
      "name": "Nanum Brush Script",
      "korean": "나눔손글씨 붓",
      "author": "NHN Corporation",
      "aliases": [
        "나눔붓",
        "나눔 붓"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nanum+Brush+Script",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Nanum, Naver Nanum, NanumGothic, Naver NanumGothic, NanumMyeongjo, Naver NanumMyeongjo, NanumBrush, Naver NanumBrush, NanumPen, Naver NanumPen 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Nanum+Brush+Script",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumbrushscript/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumbrushscript/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "9fc7c149b38d16733f08ffbb7aa4e4f037e6637c68f9e6f71b8c3a4b0db88c4d"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Nanum, Naver Nanum, NanumGothic, Naver NanumGothic, NanumMyeongjo, Naver NanumMyeongjo, NanumBrush, Naver NanumBrush, NanumPen, Naver NanumPen 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nanum-gothic-coding",
      "name": "Nanum Gothic Coding",
      "korean": "나눔고딕코딩",
      "author": "NHN Corporation",
      "aliases": [
        "나눔 고딕 코딩"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nanum+Gothic+Coding",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Nanum, Naver Nanum, NanumGothic, Naver NanumGothic, NanumMyeongjo, Naver NanumMyeongjo, NanumBrush, Naver NanumBrush, NanumPen, Naver NanumPen 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Nanum+Gothic+Coding",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumgothiccoding/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nanumgothiccoding/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b8e8b14cc0f6034e473498a752c689f8dd1396522fe80d5d7073236a4c1319ea"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Nanum, Naver Nanum, NanumGothic, Naver NanumGothic, NanumMyeongjo, Naver NanumMyeongjo, NanumBrush, Naver NanumBrush, NanumPen, Naver NanumPen 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "orbit",
      "name": "Orbit",
      "korean": "오르빗",
      "author": "The Orbit Project Authors",
      "aliases": [
        "오빗"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Orbit",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Orbit",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/orbit/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/orbit/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3701836e728e98bf0d6b1f37c1dbbb8c37b0442a30e8e45aef155ed1d2d09601"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "diphylleia",
      "name": "Diphylleia",
      "korean": "디필레이아",
      "author": "The Diphylleia Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Diphylleia",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Diphylleia",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/diphylleia/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/diphylleia/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b5cca79d2e1958f0b37f08136be415aa977cfc33f75215b942c3f190dc2735d8"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "grandiflora-one",
      "name": "Grandiflora One",
      "korean": "그랜디플로라 원",
      "author": "The Grandiflora Project Authors",
      "aliases": [
        "그랜디플로라"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Grandiflora+One",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Grandiflora+One",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/grandifloraone/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/grandifloraone/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b5f95512ce7cebd777484f4bb395494535422d7adb8fce9dbf93d8c23a07e9bd"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "orbitron",
      "name": "Orbitron",
      "korean": "오비트론",
      "author": "The Orbitron Project Authors",
      "aliases": [
        "오르비트론"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Orbitron",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Orbitron 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Orbitron",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/orbitron/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/orbitron/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "6e897c83b8fcdeccb78accb132efd7b279267b684484aa0735b78aba711d0b36"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Orbitron 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "noto-sans",
      "name": "Noto Sans",
      "korean": "노토 산스 (라틴)",
      "author": "The Noto Project Authors",
      "aliases": [
        "노토 산스 라틴"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Noto+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Noto+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/notosans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/notosans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "9fd9566184e9833ae3a33b8950e2782a8abb1f0a9d6fb2c51b3fb615f2d78cfe"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "noto-serif",
      "name": "Noto Serif",
      "korean": "노토 세리프 (라틴)",
      "author": "The Noto Project Authors",
      "aliases": [
        "노토 세리프 라틴"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Noto+Serif",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Noto+Serif",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/notoserif/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/notoserif/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "659cf6a2475eabfa3e3bbb92e3ed15c604e6fb035b3b1057d469cc88e67357bb"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "montserrat",
      "name": "Montserrat",
      "korean": "몬트세라트",
      "author": "The Montserrat.Git Project Authors",
      "aliases": [
        "몬트세랫"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Montserrat",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Montserrat",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/montserrat/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/montserrat/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c48dbcaee013b8f6a33e7e6a79191adbf098a36839367d9750598594ff664e5f"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "poppins",
      "name": "Poppins",
      "korean": "팝핀스",
      "author": "The Poppins Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Poppins",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Poppins",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/poppins/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/poppins/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "8121646e47a90cbcd2f4664e0df036944880035522b4f25ec51cb9465428b346"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "raleway",
      "name": "Raleway",
      "korean": "랄레웨이",
      "author": "The Raleway Project Authors",
      "aliases": [
        "레일웨이"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Raleway",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Raleway 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Raleway",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/raleway/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/raleway/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "206017b9829b8f0a9aa3d2af2e8118520d8bff4930b4c834a52f057fc5965c9f"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Raleway 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "oswald",
      "name": "Oswald",
      "korean": "오스왈드",
      "author": "The Oswald Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Oswald",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Oswald",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/oswald/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/oswald/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3d5119d2e99a15e7c2973937d10a77e7aa1fc6a28fe173b02e059485aa596097"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "open-sans",
      "name": "Open Sans",
      "korean": "오픈 산스",
      "author": "The Open Sans Project Authors",
      "aliases": [
        "오픈산스"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Open+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Open+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/opensans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/opensans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "50305d75a1b32bc4b5f59a037a71b0db45be509479519f7fded5b9cfa86217e8"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "lora",
      "name": "Lora",
      "korean": "로라",
      "author": "The Lora Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Lora",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Lora 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Lora",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/lora/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/lora/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "6d9e38cc8926e903359a1c4c358fd2e71864f422aae9550d0d9a2ae0c62ddb8d"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Lora 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "merriweather",
      "name": "Merriweather",
      "korean": "메리웨더",
      "author": "The Merriweather Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Merriweather",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Merriweather 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Merriweather",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/merriweather/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/merriweather/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "50aa12ab94b75275eb90b6353dd3f9b187c101ce0a89071f5456c052490a4345"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Merriweather 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nunito",
      "name": "Nunito",
      "korean": "누니토",
      "author": "The Nunito Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nunito",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Nunito",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nunito/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nunito/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3e20743c7ddab54c6ac57d79a6be522d4bae795223855ce90a1b13c4132f0754"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "nunito-sans",
      "name": "Nunito Sans",
      "korean": "누니토 산스",
      "author": "The Nunito Sans Project Authors",
      "aliases": [
        "누니토산스"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Nunito+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Nunito+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/nunitosans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/nunitosans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b60c93a2cdadb477316d22d22c8d43fa957899a4e4fe75cbb2b9e39e03c5e96e"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "work-sans",
      "name": "Work Sans",
      "korean": "워크 산스",
      "author": "The Work Sans Project Authors",
      "aliases": [
        "워크산스"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Work+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Work+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/worksans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/worksans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b55627dfda8d7bdb0b2500b0f6b2b942c1f8242bf756ca5c98e8a7cd22b28946"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "rubik",
      "name": "Rubik",
      "korean": "루빅",
      "author": "The Rubik Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Rubik",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Rubik",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/rubik/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/rubik/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "2e81cc9a038e89bcf9a14cd4e2d4513c1b5959e8b9189b835d4ecf4af11968a6"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "manrope",
      "name": "Manrope",
      "korean": "맨로프",
      "author": "The Manrope Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Manrope",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Manrope",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/manrope/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "fb204147a7c16d009d4fa53248b6075bc941d7adfa450a825bc5d4cef2f9ded9"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "dm-sans",
      "name": "DM Sans",
      "korean": "DM 산스",
      "author": "The DM Sans Project Authors",
      "aliases": [
        "디엠 산스"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/DM+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/DM+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/dmsans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/dmsans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "55b3697a416f7d08c093918a4019a75cca7186c64bc56b1bb23e197a5d559dee"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "figtree",
      "name": "Figtree",
      "korean": "피그트리",
      "author": "The Figtree Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Figtree",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Figtree",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/figtree/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/figtree/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "0f70233b05de662ffa31a5dc3d310cb4eb047dc3b776046f937219179d79d905"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "karla",
      "name": "Karla",
      "korean": "칼라",
      "author": "The Karla Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Karla",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Karla",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/karla/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/karla/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "6bf0bf977bd80e6d6655a302450bd4fc566857b577f056db4d8d054bbc7c67dd"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "inconsolata",
      "name": "Inconsolata",
      "korean": "인콘솔라타",
      "author": "The Inconsolata Project Authors",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Inconsolata",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Inconsolata",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/inconsolata/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/inconsolata/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "d8318dfb63d4012e3b5686c535f922c9a71ddeb2f2e897363b21078ea8d48e3e"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "공식 공개 배포본과 해당 폰트의 OFL 1.1 원문을 개별 확인해 등록했습니다. 다른 배포처·다른 버전의 계약 조건까지 확정한 기록은 아닙니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "lato",
      "name": "Lato",
      "korean": "라토",
      "author": "Łukasz Dziedzic",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Lato",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Lato 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Lato",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/lato/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "74ba064d03f1f1c4a952da936c3eb71866c34404916734de3cae73b34357e59e"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/lato/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b01e6d38725c22f991321800baf7a71af2dca3a381184eb80557c5308d5e34c5"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Lato 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "roboto",
      "name": "Roboto",
      "korean": "로보토",
      "author": "Christian Robertson, ParaType, Font Bureau",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Roboto",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Roboto",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/roboto/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "061402327a96aadb0bfb694a960ed289ecd38d383e396243831ab81feb109c41"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/roboto/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "6fef19da54fb62d152f0c7b21710e6849950db7ecf852ea29511c593dad462f0"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "roboto-condensed",
      "name": "Roboto Condensed",
      "korean": "로보토 콘덴스드",
      "author": "Christian Robertson",
      "aliases": [
        "로보토콘덴스드"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Roboto+Condensed",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Roboto+Condensed",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/robotocondensed/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "0e4cc6ece88573545be2ed25835363662a6182ba4a4c1b5c8feda52add30e8a6"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/robotocondensed/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "2661545ea47047600f634d2b2485b9794758c1088b2dac15024ebc6c20fc1f47"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "space-grotesk",
      "name": "Space Grotesk",
      "korean": "스페이스 그로테스크",
      "author": "Florian Karsten",
      "aliases": [
        "스페이스그로테스크"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Space+Grotesk",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Space+Grotesk",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/spacegrotesk/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "564ce565c371c5e5bbf286006565a7c9aa55a9f56e7ca58d56e05d649dd61a72"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/spacegrotesk/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3713adf5c1a21affdbede103b6bb23f551d4195771fa8bc1b91ce813bd1623ee"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "roboto-mono",
      "name": "Roboto Mono",
      "korean": "로보토 모노",
      "author": "Christian Robertson",
      "aliases": [
        "로보토모노"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Roboto+Mono",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Roboto+Mono",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/robotomono/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "50ab8dd54680d3473f649c9db86fece88434d097c7834475c1c72d2f8c429215"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/robotomono/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "8aa7709a44aa1f10bc5f4710af9440e364d2fb4e6056cc05a0e9d0d40826a9b5"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "bebas-neue",
      "name": "Bebas Neue",
      "korean": "베바스 노이에",
      "author": "Ryoichi Tsunekawa",
      "aliases": [
        "베바스노이에"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Bebas+Neue",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Bebas+Neue",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/bebasneue/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "72082f6cb4d04be2ecf7cc7d9e1e7d73787f0af8a5a278a47cade70c16b78341"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/bebasneue/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "180da4f2ee7757e589eb5cb82f32c58b64c49f015e504ccab6b21401e7f5d43a"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "anton",
      "name": "Anton",
      "korean": "안톤",
      "author": "Vernon Adams",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Anton",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Anton",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/anton/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "ee67e6ee22790b7929f1a3769ca2801d565c64b5a9096942c1adf5596de9c9e4"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/anton/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "53e7d98a610693d7163915083540a2400f2663ec775753230d15861087c116e1"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "archivo",
      "name": "Archivo",
      "korean": "아르키보",
      "author": "Omnibus-Type",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Archivo",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Archivo",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/archivo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "108b4e57c9c796d3d38d0428ca7ee39de47ad93187302718d9b2d8864b9b716b"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/archivo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "a2e8f63ffa4f9dfe43a65c349b4742e9cd85298802aed890a6315152f2ae231d"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "archivo-narrow",
      "name": "Archivo Narrow",
      "korean": "아르키보 내로우",
      "author": "Omnibus-Type",
      "aliases": [
        "아르키보내로우"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Archivo+Narrow",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Archivo+Narrow",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/archivonarrow/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "b2087ef3fb91248e346600d19021249152a9688efea72905aa1996bb16a4c8de"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/archivonarrow/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "eeca06bbbe7843f4b9567220574958fb966cb737eb50540baffe7ea8c21532e6"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "arimo",
      "name": "Arimo",
      "korean": "아리모",
      "author": "Steve Matteson",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Arimo",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Arimo",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/arimo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "11cce536cd2f3864d767003af5dcd739e2e15818cf2279b6175edeadd3960992"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/arimo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3ea06d7e7151a1241987ffa38efa1bfa1f6e8b1f5b6a0d0af393577b53a8091c"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "barlow",
      "name": "Barlow",
      "korean": "바를로",
      "author": "Jeremy Tribby",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Barlow",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Barlow",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/barlow/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/barlow/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "636e983a5a87c2d7aa3ff9f6544f65910eac0c8537a2a8b29c584d786770d878"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "barlow-condensed",
      "name": "Barlow Condensed",
      "korean": "바를로 콘덴스드",
      "author": "Jeremy Tribby",
      "aliases": [
        "바를로콘덴스드"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Barlow+Condensed",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Barlow+Condensed",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/barlowcondensed/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/barlowcondensed/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "fdb9c7b3c0c2c1069bc0193f0b72fb95efef36dc155c281e307da71b7dcfc558"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "barlow-semi-condensed",
      "name": "Barlow Semi Condensed",
      "korean": "바를로 세미 콘덴스드",
      "author": "Jeremy Tribby",
      "aliases": [
        "바를로세미콘덴스드"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Barlow+Semi+Condensed",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Barlow+Semi+Condensed",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/barlowsemicondensed/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/barlowsemicondensed/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "abbe4d1729c6e47b6f49f1d55a28b4661e8831c85f95a2efbf1318555904028f"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "bitter",
      "name": "Bitter",
      "korean": "비터",
      "author": "Sol Matas",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Bitter",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Bitter Pro 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Bitter",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/bitter/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "152a1e283e23b42c4940da4c72f2f5bebaa17969cb77c76d7af05903846006f1"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/bitter/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "15a488064d44b2405c6a35befff3ba87ceb002db947793f99c6fd509b2a19c39"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Bitter Pro 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "cabin",
      "name": "Cabin",
      "korean": "캐빈",
      "author": "Impallari Type, Rodrigo Fuenzalida",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Cabin",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Cabin",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/cabin/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "965bf33673aec648a3b399185639e502b58e52693d004fc03f6bbdf21b1a0094"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/cabin/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "4bf973bd444e07cc301a0ebc4df0f86bd459e8c469988723253bb5aa2ec6ab70"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "cairo",
      "name": "Cairo",
      "korean": "카이로",
      "author": "Mohamed Gaber, Accademia di Belle Arti di Urbino",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Cairo",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Cairo",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/cairo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "a4554e1799d42e1405924b61eb0e0722ae1623b1f1f07f995348f96c496362a9"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/cairo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "64cd7d2893f75e69186cb38f564d887f38e907217e68dac8089c4f439d3137a0"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "cormorant",
      "name": "Cormorant",
      "korean": "코르모란트",
      "author": "Christian Thalmann",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Cormorant",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Cormorant",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/cormorant/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/cormorant/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "925cf62ef27315465e6e17f54946f3da8266331286d77b3c0c4e41b1d50e07c6"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "cormorant-garamond",
      "name": "Cormorant Garamond",
      "korean": "코르모란트 가라몬드",
      "author": "Christian Thalmann",
      "aliases": [
        "코르모란트가라몬드"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Cormorant+Garamond",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Cormorant+Garamond",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/cormorantgaramond/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/cormorantgaramond/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "faa16a5e79613ca7cadd599ada1f4cf6891f3cb6731631fbed2a0b18a342e556"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "crimson-text",
      "name": "Crimson Text",
      "korean": "크림슨 텍스트",
      "author": "Sebastian Kosch",
      "aliases": [
        "크림슨텍스트"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Crimson+Text",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Crimson+Text",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/crimsontext/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "50fd67cddc097377a5c871e8452b778bc5aedfa3480a705cb27c5e3a078218df"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/crimsontext/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c5ca01516f7cf8769bbeaede301300db4a28e5a246090bcb7ed9091b37175d0d"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "crimson-pro",
      "name": "Crimson Pro",
      "korean": "크림슨 프로",
      "author": "Jacques Le Bailly",
      "aliases": [
        "크림슨프로"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Crimson+Pro",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Crimson+Pro",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/crimsonpro/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "1820869bd5baa1c2d88fa87c89eea532cf9442d841008acab720654b7f82823d"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/crimsonpro/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "42f83557902cb373ca1a966289a9ada6ca479e746ea64ac2f07f2498d3f65fde"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "dm-serif-display",
      "name": "DM Serif Display",
      "korean": "DM 세리프 디스플레이",
      "author": "Colophon Foundry",
      "aliases": [
        "DM세리프디스플레이"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/DM+Serif+Display",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Source 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/DM+Serif+Display",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/dmserifdisplay/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "a3e5cdd67d4571dd0a24fcc968de0efde7ae97ef752daf0906e4767619dd7231"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/dmserifdisplay/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3014380ddec81e774af2ab07a903542367573ce4e4d19ca8c01b928e970c1268"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Source 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "dm-serif-text",
      "name": "DM Serif Text",
      "korean": "DM 세리프 텍스트",
      "author": "Colophon Foundry",
      "aliases": [
        "DM세리프텍스트"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/DM+Serif+Text",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Source 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/DM+Serif+Text",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/dmseriftext/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "a3e5cdd67d4571dd0a24fcc968de0efde7ae97ef752daf0906e4767619dd7231"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/dmseriftext/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "044bc4d85dbae3d086ad34d7fc4a7e4df2c650e145903d7b88bd45eb68622b99"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Source 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "eb-garamond",
      "name": "EB Garamond",
      "korean": "EB 가라몬드",
      "author": "Georg Duffner, Octavio Pardo",
      "aliases": [
        "EB가라몬드"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/EB+Garamond",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/EB+Garamond",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/ebgaramond/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "0985066662eb755ed3683ae5482a81a9195b49ce3f7e165cc2388b3dbece7dd7"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/ebgaramond/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "be94098be975a66281842ed599baefa14959eff9da14c87250678e905f6043f2"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "exo",
      "name": "Exo",
      "korean": "엑소",
      "author": "Natanael Gama, Robin Mientjes",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Exo",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Exo",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/exo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "1159ea72ed1f7e7541cea35a0dece48d2abb0317d7c70f75a482f94932382a77"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/exo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "cf791d34d30c3cbf5091f23399a309b122199efc4bcee72896dec076fcddf135"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "exo-2",
      "name": "Exo 2",
      "korean": "엑소 2",
      "author": "Natanael Gama",
      "aliases": [
        "엑소2"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Exo+2",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Exo+2",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/exo2/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "7f95a8eeecc6904ffc81cd10cc8ebc7fcee72a67922924bf45f02dff03b88127"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/exo2/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "465b6e658106342dab756a190234bb03d1d7d3bdcb21e68b6d74f9807a781b43"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "fjalla-one",
      "name": "Fjalla One",
      "korean": "피얄라 원",
      "author": "Sorkin Type, Irina Smirnova",
      "aliases": [
        "피얄라원"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Fjalla+One",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Fjalla+One",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/fjallaone/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "047c204476dacfeddbf93d33ab3d43ba82fb7e66e398fdacfce8e815e9a5c270"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/fjallaone/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "d3120fabc0ea80533378152983c52d34eb81dd65e72da724093528c25278dd21"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "josefin-sans",
      "name": "Josefin Sans",
      "korean": "조세핀 산스",
      "author": "Santiago Orozco",
      "aliases": [
        "조세핀산스"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Josefin+Sans",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Josefin Sans 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Josefin+Sans",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/josefinsans/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "aee5a4081e8a52f80428b30f178b719d115f18dad3e1fa15a986163e1078a85b"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/josefinsans/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3d88256f1f0d7c86fcd08e6b4f77ec0942b827fcb0fe6bf2215313534c28984c"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Josefin Sans 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "josefin-slab",
      "name": "Josefin Slab",
      "korean": "조세핀 슬랩",
      "author": "Santiago Orozco",
      "aliases": [
        "조세핀슬랩"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Josefin+Slab",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Josefin 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Josefin+Slab",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/josefinslab/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "40be94683ce097454926ce71af843ceebf8a5eb01dc196f58063d65951cc5dae"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/josefinslab/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "ed6406d4e6136c295addbdd6196fb904f5031d6c07e3c5b8a74df7c084c291c1"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Josefin 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "libre-baskerville",
      "name": "Libre Baskerville",
      "korean": "리브레 바스커빌",
      "author": "Impallari Type",
      "aliases": [
        "리브레바스커빌"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Libre+Baskerville",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Libre Baskerville 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Libre+Baskerville",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/librebaskerville/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "3624eddd4c8f8a908130a417ae7cd089c9da69899c4e0ca1a5217d0a6fae16fd"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/librebaskerville/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "e29f1dcebfdf5918d29c4d373e1a6a0ae3bcb94538aa63362fdcc7bf095cc9c8"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Libre Baskerville 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "libre-franklin",
      "name": "Libre Franklin",
      "korean": "리브레 프랭클린",
      "author": "Impallari Type",
      "aliases": [
        "리브레프랭클린"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Libre+Franklin",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Libre+Franklin",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/librefranklin/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "2710268527181a27b8e938617551bae29e714e6525247be6679bf897a9942a60"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/librefranklin/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "d33af96b912897addc6876d6412af02e08a0b05179c45a08c4e8cbd0f327dfa5"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "libre-caslon-text",
      "name": "Libre Caslon Text",
      "korean": "리브레 캐슬론 텍스트",
      "author": "Pablo Impallari",
      "aliases": [
        "리브레캐슬론텍스트"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Libre+Caslon+Text",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Libre+Caslon+Text",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/librecaslontext/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "a294245c822c5aa9fd9a9f3189418e99415428be5fecadf797793d5d8f6a3ad3"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/librecaslontext/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "e336e3e3b8088589b73f43287e6823e139f9c0ab645092f6851d2a92a5300f0c"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "literata",
      "name": "Literata",
      "korean": "리터라타",
      "author": "TypeTogether",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Literata",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Literata",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/literata/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "8742963604cd89dc81437811a850018fc03b2bfad686d7422c8235967c87614e"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/literata/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "8dbc5c48f254be32c879f006391cb5f6781941beb1a643c13acf66fa989b6a83"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "mukta",
      "name": "Mukta",
      "korean": "묵타",
      "author": "Ek Type",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Mukta",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Mukta",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/mukta/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "2ee5e8e47cd7d08f60bb9555f72b25912c9e81b13f5bc9a0551ddf943da6ca98"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/mukta/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "a5cacfe7b4be0446b247541a9e7cc1098f1dfb951bcc75b41cf165f4d5b945f8"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "mulish",
      "name": "Mulish",
      "korean": "뮬리시",
      "author": "Vernon Adams, Cyreal, Jacques Le Bailly",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Mulish",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Mulish",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/mulish/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "097e9ac414d9251c8580c073a13f8899798c66db746de60662148789ca693f19"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/mulish/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "2e774ba57517885f1bc14be86a010ee2fd0c5c524b8d0e243c0a76a2a355e520"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "overpass",
      "name": "Overpass",
      "korean": "오버패스",
      "author": "Delve Withrington, Dave Bailey, Thomas Jockin",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Overpass",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Overpass",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/overpass/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "86e5ff25c701ec446d20b1a85b02ee6d36de8503a7288a4c948f5459809af1f0"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/overpass/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "cf13131c476da758ce788b2650f285d9b235d7aae5a89f125e21acefc15747cd"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "pacifico",
      "name": "Pacifico",
      "korean": "퍼시피코",
      "author": "Vernon Adams, Jacques Le Bailly, Botjo Nikoltchev, Ani Petrova",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Pacifico",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Pacifico",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/pacifico/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "a47e5daeda73568969395c656823102678f2eefb0d7d7ecb47aac4cc17e42204"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/pacifico/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "397f1aaefe8d0e372e23f4959a95498373a7b03b1e373f0799b2896499286ae5"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "playfair-display",
      "name": "Playfair Display",
      "korean": "플레이페어 디스플레이",
      "author": "Claus Eggers Sørensen",
      "aliases": [
        "플레이페어디스플레이"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Playfair+Display",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Playfair Display 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Playfair+Display",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/playfairdisplay/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "566be814f8e96e93dfa16101331557eb6b5467e9e03f627c0910fe93ca12300e"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/playfairdisplay/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c9e6a996754f710fb7ff2ba36f8dd807244318d561d63d247a22199ea1a5e94a"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Playfair Display 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "quicksand",
      "name": "Quicksand",
      "korean": "퀵샌드",
      "author": "Andrew Paglinawan",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Quicksand",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Quicksand 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Quicksand",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/quicksand/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "14d28541780d90f6577bb7abcc6f005bf6969614294e75c82abb8758a696ad46"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/quicksand/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "a7be039657fe31e5526ad7cbe288bf9ed45a823ed25143e8a8a3b671ffebcfc8"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Quicksand 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "rajdhani",
      "name": "Rajdhani",
      "korean": "라즈다니",
      "author": "Indian Type Foundry",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Rajdhani",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Rajdhani",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/rajdhani/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "f62ef357d3a1c3d27edd35a6e1ba350e8a8d13499797964eeadefbf0b3b15d1f"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/rajdhani/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "1b8e7333c6bd3449be6d576f7a2a4c06087c94591860cc470e95f0812ba847ed"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "righteous",
      "name": "Righteous",
      "korean": "라이처스",
      "author": "Astigmatic",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Righteous",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "예약 이름 Righteous 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Righteous",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/righteous/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "1c5bc055869d5e9151ec7774082727db720ec4293c65be67f91a4bdcaeb02998"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/righteous/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "bff2ea4eb25ab6a2b5f9f00ef0109c1d20f75827233420e97c45b95f54fe9b6a"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 예약 이름 Righteous 지정. 수정본의 기본 폰트 이름에 사용하려면 권리자의 서면 허가가 필요합니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "cute-font",
      "name": "Cute Font",
      "korean": "큐트 폰트",
      "author": "TypoDesign Lab. Inc",
      "aliases": [
        "큐트폰트"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Cute+Font",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Cute+Font",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/cutefont/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "1a2debd5ad8e656b26bb3b29213caa8f7e557a2f31454b11ebb6c3e3b59aa5d4"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/cutefont/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c5a09b0301b6791e5e1b8e80ec313c4bedd22546b97b419fd3a4935867da8e03"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "dokdo",
      "name": "Dokdo",
      "korean": "독도",
      "author": "FONTRIX",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Dokdo",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Dokdo",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/dokdo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "dcc832bd71ea62cbf97f06327a1b5442905b49ea446801421d71f7d1362db215"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/dokdo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "3c59898b3630c9061656965cc745e130406ab8d08db12ee45c25b7c940f8255e"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "east-sea-dokdo",
      "name": "East Sea Dokdo",
      "korean": "동해독도",
      "author": "YoonDesign Inc",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/East+Sea+Dokdo",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/East+Sea+Dokdo",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/eastseadokdo/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "39de3de5f1873f89bca4af37823ab22e28e88d0d8f7fe2f07e82e9e6e9bf7b70"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/eastseadokdo/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "b9f5ea061ff243636a2ce8db2490ac3e1c9dd9cc3906748c7fa0b04129b2f65a"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "single-day",
      "name": "Single Day",
      "korean": "싱글 데이",
      "author": "DXKorea Inc",
      "aliases": [
        "싱글데이"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Single+Day",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Single+Day",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/singleday/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "397e83b05703a4240be51e2c3a2be1d0d7693d7a2d8b1ff367c26a2b9afc013e"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/singleday/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "c87ef0b6cae6bb00b73f9cb700bc3bb20dfaaa84e5e630b7228ea203c66122f1"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요. 영문 지원은 확인한 자료에 명시되지 않아 미확인으로 두었습니다."
      }
    },
    {
      "id": "yeon-sung",
      "name": "Yeon Sung",
      "korean": "연성",
      "author": "Woowahan brothers",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Yeon+Sung",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Yeon+Sung",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/yeonsung/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "d7d8074c2dd46804990c184e25849947ab76c5ac7607fbf3966543455769bb73"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/yeonsung/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "53a3fac3f20da3c6ab9bee788efe344d6efbfc223627c234b5e555dc1d5c2035"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "kirang-haerang",
      "name": "Kirang Haerang",
      "korean": "기랑해랑",
      "author": "Woowahan Brothers",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Kirang+Haerang",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Kirang+Haerang",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/kiranghaerang/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "7e896665d0863d2a17a671001dbe2528a5f9302f1dff9222af8b0834e9088d0c"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/kiranghaerang/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "e0f604e3b5f646bac75c771fb1d1a2a6d6fea6e5d339604ca5190fbb03f2eb60"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "black-and-white-picture",
      "name": "Black And White Picture",
      "korean": "흑백사진",
      "author": "AsiaSoft Inc.",
      "aliases": [],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Black+And+White+Picture",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Black+And+White+Picture",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/blackandwhitepicture/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "a9b3e7e1cf5735dc49d802b88b1858a2a50307ba2a877ddf3f0b27d8b1d0abc5"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/blackandwhitepicture/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "59871adc2622a36f6a057919492f15b823c66f58841558b5ff2b105b169fab2a"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "bagel-fat-one",
      "name": "Bagel Fat One",
      "korean": "베이글 팻 원",
      "author": "Kyungwon Kim, JAMO",
      "aliases": [
        "베이글팻원"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Bagel+Fat+One",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Bagel+Fat+One",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/bagelfatone/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "4f40ab196ccf674056fed8b0e6d4f918eea183a149be8a67bff1239413ebada9"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/bagelfatone/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "2bbf68a2d5fd6b67cc68a9ffec0a883ec4f538b2b2b8a70fcd999d63fd365d29"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "moirai-one",
      "name": "Moirai One",
      "korean": "모이라이 원",
      "author": "Jiyeon Park, JAMO",
      "aliases": [
        "모이라이원"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Moirai+One",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Moirai+One",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/moiraione/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "0f2daa61cee069893d44ba24f3bdddbba18ac33b011fd8944e8682dbf347c61d"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/moiraione/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "a637443cc88dcabb46720ed685819ca512b07eed749913b158517f36c636b0ff"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "ko",
          "en"
        ],
        "koreanExcluded": false,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    },
    {
      "id": "tac-one",
      "name": "Tac One",
      "korean": "택 원",
      "author": "Afrotype, Seyi Olusanya, Eyiyemi Adegbite, David Udoh, Mirko Velimirović",
      "aliases": [
        "택원"
      ],
      "pricing": {
        "type": "free",
        "description": "공식 배포본 무료 이용",
        "sourceIds": [
          "license"
        ]
      },
      "acquisition": {
        "method": "download",
        "site": "Google Fonts",
        "url": "https://fonts.google.com/specimen/Tac+One",
        "description": "Google Fonts 상세 페이지에서 폰트를 선택한 뒤 다운로드할 수 있습니다. 무료 OFL 배포본 기준이며 폰트 파일과 함께 제공되는 라이선스 고지를 보관하세요.",
        "sourceIds": [
          "distribution"
        ]
      },
      "license": {
        "name": "SIL Open Font License 1.1",
        "type": "OFL-1.1",
        "sourceIds": [
          "license"
        ],
        "summary": "상업적 디자인 사용 가능. 폰트 파일 단독 판매 및 다른 라이선스로 재배포 불가.",
        "modification": "확인한 원문의 저작권 고지에는 예약 이름 지정이 없습니다. 수정·배포 시 OFL 유지 조건은 적용됩니다."
      },
      "usage": {
        "print": {
          "status": "allowed",
          "condition": "책·포스터·명함 등 상업적 인쇄물 제작 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "web_image": {
          "status": "allowed",
          "condition": "글자를 이미지로 만든 웹 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "webfont": {
          "status": "conditional",
          "condition": "웹폰트 제공 가능. 전달하는 폰트의 저작권 고지와 OFL을 유지하세요.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 2"
        },
        "packaging": {
          "status": "allowed",
          "condition": "판매용 패키지와 라벨 디자인에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "video": {
          "status": "allowed",
          "condition": "광고·영화·유튜브 자막과 영상 그래픽에 사용 가능.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        },
        "app_embedding": {
          "status": "conditional",
          "condition": "앱에 포함 가능. 배포하는 폰트의 저작권·OFL을 유지하며 앱 자체를 OFL로 공개할 의무는 없습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.3–1.4"
        },
        "ebook_embedding": {
          "status": "conditional",
          "condition": "문서 내 임베딩 가능. 폰트 파일을 별도 동봉·전달하면 저작권·OFL 고지가 필요합니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 조건 2·5 · FAQ 1.12·1.15–1.16"
        },
        "branding": {
          "status": "allowed",
          "condition": "로고·워드마크 제작 가능. 디자인 사용 허용은 상표 등록 보장을 뜻하지 않습니다.",
          "sourceIds": [
            "license",
            "ofl-faq"
          ],
          "evidenceSection": "OFL 허가 조항 · FAQ 1.1"
        }
      },
      "attribution": {
        "status": "not_required",
        "condition": "일반 제작물에는 출처표기 의무 없음. 폰트 파일 배포·동봉 시 저작권과 OFL 고지는 유지해야 합니다.",
        "sourceIds": [
          "license",
          "ofl-faq"
        ],
        "evidenceSection": "OFL 조건 2 · FAQ 1.1.2"
      },
      "sources": [
        {
          "id": "distribution",
          "title": "Google Fonts · 다운로드 안내",
          "url": "https://fonts.google.com/specimen/Tac+One",
          "kind": "distribution",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "license",
          "title": "공식 OFL 원문",
          "url": "https://github.com/google/fonts/blob/main/ofl/tacone/OFL.txt",
          "kind": "license",
          "checkedAt": "2026-09-17",
          "sha256": "834b4eb01504f6dde1a3c3f9dfafaec172ad51255c08050abf14b701a829bfff"
        },
        {
          "id": "ofl-faq",
          "title": "SIL 공식 OFL FAQ",
          "url": "https://openfontlicense.org/ofl-faq/",
          "kind": "interpretation",
          "checkedAt": "2026-09-17"
        },
        {
          "id": "language-metadata",
          "title": "Google Fonts 문자 지원 메타데이터",
          "url": "https://github.com/google/fonts/blob/main/ofl/tacone/METADATA.pb",
          "kind": "metadata",
          "checkedAt": "2026-09-17",
          "sha256": "d5949cf8b56c2ffe3b1c9c7f4faa370a5234cb42627b105716a56643c815edc8"
        }
      ],
      "checkedAt": "2026-09-17",
      "review": {
        "status": "verified",
        "summary": "Google Fonts 공식 공개 배포본의 개별 OFL 원문과 저작권 고지를 확인했습니다. 다른 배포본·버전의 계약에는 적용하지 않습니다.",
        "openQuestions": []
      },
      "additionalRights": {
        "modification": {
          "status": "conditional",
          "condition": "수정·배포 시 OFL과 저작권 고지를 유지하고 저작자 명의로 수정본을 홍보하지 마세요. 확인한 원문에는 예약 이름 지정이 없습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 허가 조항 및 조건 3·5",
          "checkedAt": "2026-09-17"
        },
        "redistribution": {
          "status": "conditional",
          "condition": "저작권 고지·OFL을 유지해 재배포할 수 있습니다. 폰트 파일 단독 판매 및 라이선스 변경은 허용되지 않습니다.",
          "sourceIds": [
            "license"
          ],
          "evidenceSection": "OFL 조건 1·2·5",
          "checkedAt": "2026-09-17"
        }
      },
      "languageSupport": {
        "codes": [
          "en"
        ],
        "koreanExcluded": true,
        "sourceIds": [
          "language-metadata"
        ],
        "checkedAt": "2026-09-17",
        "description": "공식 배포처가 명시한 한글·영문 지원 범위입니다. 개별 글자의 포함 여부는 실제 배포본에서 확인하세요."
      }
    }
  ]
};

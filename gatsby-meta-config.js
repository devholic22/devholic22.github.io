module.exports = {
  title: `devholic.dev()`,
  description: `devholic의 개발 공간`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `zoomkoding/zoomkoding-gatsby-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-134826755-2', // Google Analytics Tracking ID
  author: {
    name: `최현준`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '더 나은 코드를 고민하는'],
      thumbnail: 'profile.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/devholic22`,
      linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `hyunjoon.tech@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.03',
        activity: '명지대학교 컴퓨터공학과 입학',
      },
      {
        date: '2019.03 ~ 2019.12',
        activity: '멋쟁이 사자처럼 7기 명지대 자연 수료',
      },
      {
        date: '2021.09 ~ 2021.11',
        activity: '라인 클론코딩 개발',
        links: {
          github: 'https://github.com/devholic22/line_clone',
          post: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '라인 클론코딩 프로젝트',
        description:
          '군 전역 후 노마드코더의 카카오톡 클론 코딩 수업을 배운 뒤 실제로 배운 지식을 적용해보고자 카카오톡과 비슷한 네이버의 라인을 클론 코딩해보았습니다.',
        techStack: ['html', 'css', 'js'],
        thumbnailUrl: 'mandao.png',
        links: {
          github: 'https://github.com/devholic22/line_clone',
        },
      },
    ],
  },
};

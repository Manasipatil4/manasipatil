import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

const config = {
  github: {
    username: 'manasipatil4', // Your GitHub org/user name. (Required)

    sortBy: 'stars', // stars | updated
    limit: 3, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/manasi-patil-197599245',
    email: 'imanasipatilz@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1OhJzf_aD0D_1bMC0BktclAE4k4zcPmYE/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['Java', 'C', 'C++', 'MySQL', 'JavaScript', 'python'],
  experiences: [
    {
      company: "Sync  Intern's",
      position: 'Intern',
      from: 'February 2023',
      to: 'March 2023',
      companyLink: 'https://www.syncinterns.com/',
    },
  ],
  
  education: [
    {
      institution: "Modern Education Society's College Of Engineering",
      degree: 'B.E in Electronics and Telecommunication ',
      from: '2021',
      to: 'persuing',
    },
    {
      institution:
        'Bharati Vidyapeeth’s Jawaharlal Nehru Institute of Technology (Polytechnic / Diploma),Katraj, Pune',
      degree: 'Diploma in Computer Technology',
      from: '2018',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Online Examination System',
      description:
        ' I have created a module which includes  pages like online exam questions,login page,subject cources ..etc',
      imageUrl: 'https://via.placeholder.com/250x250',
    },
    {
      title: 'River Cleaning using IOT',
      description:
        ' created a model  which is used for cleaning river  using ESP8266',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    //source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href=https://www.linkedin.com/in/manasi-patil-197599245/gitprofile"
      target="_blank"
      rel="noreferrer"
    >MANASI</a> and ❤️`,
};

function App() {
  return <GitProfile config={config} />;
}

export default App;

import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  menu: {
    open: false
  },
  projects: {
    projectList: [
      {
        title: 'Dev Connector',
        description: `A website that allows developers to communicate with
        each other and make an online portfolio.`,
        live: 'https://hidden-bayou-89767.herokuapp.com/',
        code: 'https://github.com/charbelsako/devnetwork'
      },
      {
        title: 'Client Panel',
        description: `This project is intended to help users that need to keep track of what
        money they owe people, and vice versa.`,
        live: 'https://react-client-panel-afaa7.firebaseapp.com',
        code: 'https://github.com/charbelsako/client-panel'
      }
      // { title: 'title1', description: 'desc' }
    ],
    skillList: [
      'PHP',
      'JS (ReactJS, Redux)',
      'HTML/CSS (Bootstrap, Material-ui)',
      'Node.js',
      'MongoDB',
      'React Native'
    ]
  },
  certifications: {
    certificationList: [
      {
        title: 'Intro to computer science',
        from: 'HarvardX',
        link:
          'https://courses.edx.org/certificates/2279174e8e794e509ab170602879788a'
      },
      {
        title: 'MERN stack front to back',
        from: 'Udemy',
        link: 'https://www.udemy.com/certificate/UC-7N6ATLBO/',
        image: '/assets/images/mern.jpg'
      },
      {
        title: 'Python for data science and machine learning',
        from: 'Udemy',
        link: 'https://www.udemy.com/certificate/UC-SS1YF302/',
        image: '/assets/images/python-data-science.jpg'
      },
      {
        title: 'React front to back',
        from: 'Udemy',
        link: 'https://www.udemy.com/certificate/UC-1KY8XQV0/',
        image: '../assets/images/react.jpg'
      }
    ]
  },
  experience: [
    {
      title: 'Front end developer',
      company: 'Apps & Games Inc.',
      startDate: '2019-07-01',
      endDate: '2019-09-01'
    }
  ]
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

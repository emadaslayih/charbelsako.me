import { createStore } from 'redux';

const initialState = {
  projects: [
    { title: 'title1', description: 'desc' },
    { title: 'title1', description: 'desc' },
    { title: 'title1', description: 'desc' }
  ],
  skills: [
    'PHP',
    'JS (React)',
    'HTML/CSS',
    'Node.js',
    'MongoDB',
    'React Native'
  ],
  courses: [
    { title: 'react front to back', description: 'this is a description' }
  ],
  certifications: [
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
};

const store = createStore(() => initialState);

export default store;

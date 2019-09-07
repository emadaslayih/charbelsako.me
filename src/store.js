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
  ]
};

const store = createStore(() => initialState);

export default store;

import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
  menu: {
    open: false
  },
  skillList: [
    'PHP',
    'JS (ReactJS, Redux)',
    'HTML/CSS (Bootstrap, Material-ui)',
    'Node.js',
    'MongoDB',
    'React Native'
  ],
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
      description:
        'I was responsible of building a highly interactive website, with a complex design.',
      company: 'Apps & Games Inc.',
      startDate: '2019-07-01',
      endDate: '2019-09-01'
    }
  ]
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

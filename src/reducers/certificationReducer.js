const initialState = {
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
};

export default function certificationReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

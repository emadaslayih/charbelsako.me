// images
import signup from '../devnetwork/signup.png'
import addEducation from '../devnetwork/add-education.png'
import addExperience from '../devnetwork/add-experience.png'
import dashboard from '../devnetwork/dashboard.png'
import homepage from '../devnetwork/homepage.png'

import login from '../client-panel/login.png'
import clientView from '../client-panel/client-view.png'
import clientDashboard from '../client-panel/dashboard.png'
import addClient from '../client-panel/add-client.png'

const initialState = {
  projectList: [
    {
      title: 'Dev Connector',
      description: `A website that allows developers to communicate with
        each other and make an online portfolio.`,
      live: 'https://hidden-bayou-89767.herokuapp.com/',
      code: 'https://github.com/charbelsako/devnetwork',
      sliderInfo: [
        {
          label: 'Homepage',
          imgPath: homepage
        },
        {
          label: 'Dashboard',
          imgPath: dashboard
        },
        {
          label: 'Signup page',
          imgPath: signup
        },
        {
          label: 'Add Experience',
          imgPath: addExperience
        },
        {
          label: 'Add Education',
          imgPath: addEducation
        }
      ]
    },
    {
      title: 'Client Panel',
      description: `This project is intended to help users that need to keep track of what
        money they owe people, and vice versa.`,
      live: 'https://react-client-panel-afaa7.firebaseapp.com',
      code: 'https://github.com/charbelsako/client-panel',
      sliderInfo: [
        { label: 'Login', imgPath: login },
        { label: 'Dashboard', imgPath: clientDashboard },
        { label: 'Client View', imgPath: clientView },
        { label: 'Add client', imgPath: addClient }
      ]
    }
    // { title: 'title1', description: 'desc' }
  ]
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

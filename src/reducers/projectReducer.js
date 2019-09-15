const initialState = {
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
  ]
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

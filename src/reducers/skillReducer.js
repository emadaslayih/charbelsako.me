const initialState = {
  skillList: [
    'PHP',
    'JS (ReactJS, Redux)',
    'HTML/CSS (Bootstrap, Material-ui)',
    'Node.js',
    'MongoDB',
    'React Native'
  ]
};

export default function skillReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

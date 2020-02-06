const initialState = [
  {
    title: "The pragmatic programmer",
    review: "https://dev.to/charbelsako/the-pragmatic-programmer-3nlb"
  },
  {
    title: "The Clean Coder",
    review: "https://dev.to/charbelsako/"
  },
  {
    title: "Clean Code",
    review: "https://dev.to/charbelsako/"
  },
  {
    title: "Code Agile",
    review: "https://dev.to/charbelsako/"
  }
]

export default function experienceReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

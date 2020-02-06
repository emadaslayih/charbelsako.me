import React, { Component } from "react"

class BookList extends Component {
  render() {
    return <div></div>
  }
}

const mapStateToProps = state => ({
  // TODO: change this to work
  bookList: state.books
})

export default connect(mapStateToProps)(BookList)

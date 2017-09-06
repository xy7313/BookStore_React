"use strict";

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../../actions/bookActions";
import { Grid, Row, Button } from "react-bootstrap";

class BooksList extends React.Component {
  componentDidMount() {
    //dispatch an action
    this.props.getBooks();
  }
  render() {
    console.log("accessing state???????/", this.props.books);
    const booksList = this.props.books.map(function(booksArr) {
      return (
        <div key={booksArr.id}>
          <h2>{booksArr.title}</h2>
          <h2>{booksArr.description}</h2>
          <h2>{booksArr.price}</h2>
          <Button bsStyle='primary'></Button>
        </div>
      );
    });
    return (
      <Grid>
        <Row style = {{margin:'15px'}}>
        {booksList}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state.books.bookse???????/', state);
  return {
    books: state.books.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBooks: getBooks
      //otherActions:***
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

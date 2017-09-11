"use strict";

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../../actions/bookActions";
import { Grid, Col, Row, Button } from "react-bootstrap";
import BookItem from './booksItem.js';
import BooksForm from './booksForm.js';

class BooksList extends React.Component {
  componentDidMount() {
    //dispatch an action
    this.props.getBooks();
  }
  render() {
    console.log("accessing state???????/", this.props.books);
    const booksList = this.props.books.map(function(booksArr) {
      return (
          <Col xs = {12} sm = {6} md = {4} key={booksArr.id}>
            <BookItem
                id = {booksArr.id}
                title = {booksArr.title}
                description = {booksArr.description}
                price = {booksArr.price} />
        </Col>
       
      );
    });
    return (
      <Grid>
        <Row style = {{margin:'15px'}}>
            <Col xs = {12} sm = {6}>
                <BooksForm />
            </Col>
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

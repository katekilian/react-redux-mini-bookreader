import React, {Component} from 'react';
import {connect} from 'react-redux';
import BooksList from '../booksList/BooksList';
import BookDetails from '../bookDetails/BookDetails';
import {updateSelectedBook,
        clearSelectedBook,
        decrementPageNumber,
        incrementPageNumber} from '../../actions/books';
import './ViewController.css';

class ViewController extends Component {

  getListOrDetails(selectedBook) {
    if (selectedBook) {
      return (<BookDetails 
                book={selectedBook} 
                clearSelectedBook={this.props.clearSelectedBook} 
                decrementPageNumber={this.props.decrementPageNumber} 
                incrementPageNumber={this.props.incrementPageNumber}
              />);
    } else {
      return (<BooksList 
                books={this.props.books} 
                updateSelectedBook={this.props.updateSelectedBook}
              />);
    }
  }
    
  render() {
    const selectedBook = this.props.books.filter((book) => book.isbn === this.props.selected)[0];
    return (
      <div className='view-controller-container'>
        <h1>mini-bookreader</h1>
        <div className='view-controller-container-inner'>
          {this.getListOrDetails(selectedBook)}
        </div>
      </div>
    );     
  }

}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    selected: state.selected
  }    
}

const mapDispatchToProps = {
  updateSelectedBook: updateSelectedBook,
  clearSelectedBook: clearSelectedBook,
  decrementPageNumber: decrementPageNumber,
  incrementPageNumber: incrementPageNumber
}

const ViewControllerContainer = connect(mapStateToProps,mapDispatchToProps)(ViewController);

export default ViewControllerContainer;

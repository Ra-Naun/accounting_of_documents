import React, { Component } from 'react';

class SearchField extends Component {
  inputChange = event => {
    this.props.setSearchQuery(event.target.value);
  };

  search = () => {
    const { handleSearch } = this.props;
    handleSearch();
  };

  render() {
    return (
      <>
        <div className="search-field">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30.239 30.239" className="search-field__icon">
            <path d="M20.194 3.46a11.85 11.85 0 00-16.734 0c-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34a2.49 2.49 0 00.676 1.254l6.718 6.718a2.5 2.5 0 003.535 0 2.496 2.496 0 000-3.535l-6.718-6.72a2.5 2.5 0 00-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0a8.85 8.85 0 010-12.492 8.85 8.85 0 0112.492 0c3.444 3.444 3.444 9.048 0 12.492z"></path>
          </svg>
          </div>
          <input
            type="text"
            placeholder={'Введите для поиска...'}
            onChange={this.inputChange}
            className="search-field__term"
          />
          <button type="submit" className="search-field__button" onClick={this.search}>
            {'Search'}
          </button>
        </div>
      </>
    );
  }
}

export default SearchField;

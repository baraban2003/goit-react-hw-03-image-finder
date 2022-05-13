import React from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default class Searchbar extends React.Component {
  state = {
    pictures: '',
  };

  handleSearchRequest = event => {
    this.setState({ pictures: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { pictures } = this.state;

    if (pictures.trim() === '') {
      toast.error('Please enter a search request');
      return;
    }

    this.props.onPictureSubmit(pictures);
    this.setState({ pictures: '' });
  };

  render() {
    const { pictures } = this.state;
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button className={s.button} type="submit">
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={pictures}
            onChange={this.handleSearchRequest}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
  handleSearchRequest: PropTypes.func,
};

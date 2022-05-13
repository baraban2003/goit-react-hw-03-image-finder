import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ loadMore }) {
  return (
    <div className={s.buttonCenter}>
      <button className={s.button} type="button" onClick={() => loadMore()}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

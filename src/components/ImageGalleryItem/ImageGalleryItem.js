import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ item, handleModal }) {
  return (
    <li className={s.galleryItem}>
      <img
        onClick={() => handleModal(item)}
        className={s.galleryItemImg}
        src={item.webformatURL}
        alt={item.tags}
        loading="lazy"
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired,
};

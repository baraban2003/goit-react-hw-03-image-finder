import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallery, handleModal }) {
  return (
    <ul className={s.gallery}>
      {gallery.map(e => (
        <ImageGalleryItem key={e.id} item={e} handleModal={handleModal} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  handleModal: PropTypes.func.isRequired,
};

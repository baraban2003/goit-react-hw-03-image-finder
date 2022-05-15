import React from 'react';
import { SpinnerInfinity } from 'spinners-react';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.spinner}>
      <SpinnerInfinity
        size={120}
        thickness={150}
        speed={107}
        color="rgba(172, 57, 161, 0.99)"
        secondaryColor="rgba(57, 101, 172, 0.82)"
      />
    </div>
  );
}

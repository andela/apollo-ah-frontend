import React from 'react';
import Loader from './ContentLoader'

const PlaceholderLoader = () => (
    <div className="container">
    <div className="row">
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
    </div>
  </div>
);

export default PlaceholderLoader;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Technology from '../../public/images/categories/technology.jpg';
import Sport from '../../public/images/categories/sports.jpg';
import Others from '../../public/images/categories/others.jpg';
import Fashion from '../../public/images/categories/fashion.jpg';
import Business from '../../public/images/categories/business.jpg';
import Food from '../../public/images/categories/food.jpg';
import Health from '../../public/images/categories/health.jpg';
import History from '../../public/images/categories/history.jpg';
import Entertainment from '../../public/images/categories/entertainment.jpg';

const images = [Technology, Sport, Business, Fashion, Health, Food, Entertainment, History, Others];

/**
 * @description  Presentational component for a single category
 * @param {object} category An object containing the category name and id
 * @return {object} The generated JSX object
 */
export default function Category({ category, className }) {
  return (
    <div className={className}>
      <div className="category-item overlay category-item-technology" style={{ backgroundImage: `url(${images[category.id - 1]})` }}>
        <Link to={`/search?categoryId=${category.id}`} className="link-surface" />
        <div className="relative">
          <h4>{category.category}</h4>
          <span>Explore Articles</span>
        </div>
      </div>
    </div>

  );
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  className: PropTypes.string
};


Category.defaultProps = {
  className: 'col-md-4 col-sm-6',
};

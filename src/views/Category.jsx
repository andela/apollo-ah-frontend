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

/**
 * @description - returns all articles category or selected articles category
 * @param {props} begin - start of range of categories to select
 * @param {props} end - end of range of categories to select
 * @param {props} articlesCategory - all articles categories
 * @return {JSX}
 */
const Category = ({ begin, end, articlesCategory }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {articlesCategory && articlesCategory.slice(begin, end).map(({ category }, index) => {
            return (
              <div className="col-md-4 col-sm-6" key={category.id}>
                <>
                  <div
                    className="category-item overlay category-item-technology"
                    style={{
                      backgroundImage: category === 'Technology' ? `url(${Technology})` :
                        category === 'Sports' ? `url(${Sport})` :
                          category === 'Fashion' ? `url(${Fashion})` :
                            category === 'Business' ? `url(${Business})` :
                              category === 'Health' ? `url(${Health})` :
                                category === 'Food' ? `url(${Food})` :
                                  category === 'Entertainment' ? `url(${Entertainment})` :
                                    category === 'History' ? `url(${History})` : `url(${Others})`
                    }}
                  >
                    <Link to="/category" className="link-surface category-link">
                      <div className="relative">
                        <h4>{category}</h4>
                        <span>Explore Articles</span>
                      </div>
                    </Link>
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Category.propTypes = {
  begin: PropTypes.number,
  end: PropTypes.number,
  articlesCategory: PropTypes.array,
};

Category.defaultProps = {
  begin: 1,
  end: 10,
  articlesCategory: [],
};


export default Category;

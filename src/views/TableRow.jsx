import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TableRow({ item, handleDeleteArticle }) {
  return (
    <tr>
      <td className="align-middle">
        <p className="mb-n1 font-weight-bold">{item.title}</p>
        <small>{item.createdAt}</small>
        <div className="dropdown d-inline-block">
          <button className="btn dropdown-toggle btn-unfocused" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to={`/article/${item.slug}`}>View article</Link>
            <Link className="dropdown-item" to={`/user/create-article/${item.slug}`}>Edit</Link>
            <button className="dropdown-item" type="button" value={item.slug} onClick={handleDeleteArticle}>Delete</button>
          </div>
        </div>
      </td>
      <td className="text-center align-middle">{item.comments}</td>
      <td className="text-center align-middle">{item.claps}</td>
    </tr>
  );
}
TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteArticle: PropTypes.func.isRequired
};

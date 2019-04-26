import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SummaryBox from './SummaryBox';
import TableRow from './TableRow';


export default function Dashboard({ summary, articles, handleDeleteArticle }) {
  return (
    <div>
      <div className="card-columns" data-pg-collapsed>
        <SummaryBox value={summary.articles} icon="file-alt" text="Articles" />
        <SummaryBox value={summary.comments} icon="comments" text="Comments" />
        <SummaryBox value={summary.claps} icon="sign-language" text="Claps" />

      </div>

      {articles.length === 0 ? (
        <div className="dashboard-empty">
          <i className="fas fa-book-open" />
          <h2>You don't have any articles yet</h2>
          <p>
When you start publishing articles, you will be able to view statistics about the
            performance of your articles here.

          </p>
          <Link to="/user/create-article" className="btn btn-brand">Write your first article</Link>
        </div>
      ) : (
        <div className="mt-3 card" data-pg-collapsed>
          <div className="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th />
                  <th className="text-center">Comments</th>
                  <th className="text-center">Claps</th>
                </tr>
              </thead>
              <tbody>
                {articles.map(item => (
                  <TableRow
      item={item}
      handleDeleteArticle={handleDeleteArticle}
      key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>

  );
}

Dashboard.propTypes = {
  summary: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  handleDeleteArticle: PropTypes.func.isRequired
};

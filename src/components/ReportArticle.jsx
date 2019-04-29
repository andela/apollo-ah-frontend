import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { reportArticle, clearErrors } from '../actions/reportArticleAction';


class ReportArticle extends React.Component {
  /**
   * Creates an instance of ReportArticle class.
   * @param {*} {props} - various props supplied to the component
   * @memberof ReportArticle
   */
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      comment: '',
    };
  }

  componentDidMount() {
    const { success } = this.props;
    if (success) {
      return (
        <Redirect to="/" />
      );
    }
  }

  /**
   * @param e - The input event
   * @memberof ReportArticle
   */
  handleChange = e => this.setState({ [e.target.name]: e.target.value.trim() });

  handleSubmit = () => {
    const { type, comment } = this.state;
    const { reportArticle, match: { params } } = this.props;
    const articleId = params.id;
    const reportData = {
      reportType: type,
      comment,
      articleId,
    };
    reportArticle(reportData);
  }

  render() {
    const {
      loading, error, success, clearErrors
    } = this.props;
    if (error) {
      toast.error(error);
      clearErrors();
    }
    if (success) {
      toast.success('Article successfully reported');
      clearErrors();
      return (
        <Redirect to="/" />
      );
    }
    return (
      <section className="space">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <select onChange={this.handleChange} name="type" className="form-control col-md-5">
                  <option value="">Report category</option>
                  <option value="spam">Spam</option>
                  <option value="plagiarism">Plagiarism</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <p className="text-muted">Comment (optional)</p>
                <textarea onChange={this.handleChange} className="form-control" rows="10" name="comment" />
              </div>
              <button onClick={this.handleSubmit} type="button" className="btn-brand">
                {loading
                  ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : 'Report'}
              </button>
            </form>
          </div>
        </div>
        <section className="space" />
      </section>
    );
  }
}

ReportArticle.propTypes = {
  reportArticle: propTypes.func.isRequired,
  clearErrors: propTypes.func.isRequired,
  loading: propTypes.bool,
  error: propTypes.string,
  success: propTypes.bool,
  match: propTypes.object.isRequired
};
ReportArticle.defaultProps = {
  loading: false,
  error: null,
  success: false
};

const mapStateToProps = state => ({
  loading: state.reportArticleReducer.loading,
  error: state.reportArticleReducer.error,
  success: state.reportArticleReducer.success
});

export default
connect(() => mapStateToProps, { reportArticle, clearErrors })(withRouter(ReportArticle));

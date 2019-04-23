import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { reportArticle } from '../actions/reportArticleAction';

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
      comment: ''
    };
  }

  componentDidMount() {

  }

  /**
   * @param e - The input event
   * @memberof ReportArticle
   */
  handleChange = e => this.setState({ [e.target.name]: e.target.value.trim() });

  handleSubmit = () => {
    const { type, comment } = this.state;
    const { reportArticle, token, { match: { params: { slug: {} } } }  = this.props;
    const articleId = 'skjjdks';
    if (type === '') {
      console.log('bad');
    }
    const reportData = {
      type,
      comment,
      articleId,
      userToken: token,
    };
    reportArticle(reportData);
  }

  render() {
    console.log(this.props);
    return (
      <section>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Open modal</button>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Report Article</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col ">
                    <form>
                      <div className="form-group">
                        <select onChange={this.handleChange} name="type" className="form-control col-md-3">
                          <option value="">Report category</option>
                          <option value="abuse">Abuse</option>
                          <option value="copyright">Copyright</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea onChange={this.handleChange} className="form-control" rows="10" name="comment" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={this.handleSubmit} type="button" className="btn-brand">Report</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ReportArticle.propTypes = {
  reportArticle: propTypes.func.isRequired,
};
const mapStateToProps = state => ({
  token: state.user.token
});

export default connect(() => mapStateToProps, { reportArticle })(withRouter(ReportArticle));

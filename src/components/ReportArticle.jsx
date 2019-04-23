import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

class ReportArticle extends React.Component {
  /**
   * Creates an instance of Login.
   * @param {*} {props} - various props supplied to the component
   * @memberof Login
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
    const { type } = this.state;
    console.log(type);
    if (type === '') {
      console.log('bad');
    }
  }

  render() {
    console.log(this.state);
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

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps)(ReportArticle);

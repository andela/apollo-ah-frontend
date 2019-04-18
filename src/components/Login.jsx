/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { validateFields } from '../utils/inputValidator';
import userLogin from '../actions/loginActions';
import UserForm from '../views/UserForm';
import * as loginSelector from '../selectors/loginSelector';


/**
 * @class Login - The Login component
 * @extends {React.Component}
 */
export class Login extends React.Component {
  /**
   * @static {propTypes} - validating the prop types supplied to the component
   * @memberof Login
   */
  static propTypes = {
    processLogin: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    message: PropTypes.string,
    loginStatus: PropTypes.string,
    isLoading: PropTypes.bool,
  }

  /**
   * @static {defaultProps} - providing default values for the props supplied to the component
   * @function {userLogin} - a default function
   * @object {user} - a default object
   */
  static defaultProps = {
    message: '',
    loginStatus: '',
    isLoading: false,
  }

  /**
   * Creates an instance of Login.
   * @param {*} {props} - various props supplied to the component
   * @memberof Login
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      status: '',
    };
  }

  /**
   * @todo - This can be done in a better way.
   * @param {*} nextProps - The new props passed down from the redux store
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.message || nextProps.loginStatus) {
      this.setState({ message: nextProps.message });
      this.setState({ status: nextProps.loginStatus });
    }
  }

  /**
   *
   * @param {*} nextProps - The new props passed down from the redux store
   * @returns {boolean} - The value that tells component to rerender or otherwise
   */
  shouldComponentUpdate(nextProps) {
    const messageChange = this.message !== nextProps.message;
    return messageChange;
  }

  /**
   * @method {validateInput} - Does input validation for all form elements
   * @param {email} {string} - The provided email from the login form
   * @param {password} {string} - The provided password from the login form
   * @memberof Login
   * @returns {Boolean}
   */
  validateInput = (email, password) => {
    const result = validateFields({ email, password });
    if (typeof result === 'string') {
      this.setState(() => ({ message: result }));
      return false;
    }

    return true;
  }

  /**
   * @param e - The input event
   * @memberof Login
   */
  handleChange = e => this.setState({ [e.target.name]: e.target.value.trim() });

  /**
   * @method {userLogin} - a function that calls the login endpoint and dispatches an action
   * @memberof Login
   */
  handleLogin = () => {
    const { processLogin } = this.props;
    const { email, password } = this.state;
    if (this.validateInput(email, password)) return processLogin({ email, password });
  };

  /**
   * @method {resetState} - resets state to default
   * @memberof Login
   */
  resetState = () => {
    this.setState({ message: undefined });
    this.setState({ status: undefined });
  }

  /**
   * @returns {JSX} - the login/signup form
   * @memberof Login
   */
  render() {
    const { isLoading, location } = this.props;
    const {
      email, password, message, status
    } = this.state;
    return (
      <UserForm
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
        resetState={this.resetState}
        status={status}
        location={location.pathname}
        email={email}
        password={password}
        message={message}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: loginSelector.getLoginMessage,
  loginStatus: loginSelector.getLoginStatus,
  isLoading: loginSelector.getLoginIsLoading,
});
const mapDispatchToProps = dispatch => ({
  processLogin: payload => dispatch(userLogin(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from 'react';
import { Link} from 'react-router-dom';
import SignupForm from '../components/SignupForm';

/**
 *This represents the actual signup page on the web
 *@class SignupPage
 *@extends {React.Component}
 */
class SignupPage extends React.Component {
  /**
   * 
   * @returns {JSX} - Signup page
   */
  render() {
    return (
      <main className="main-body">
        <section className="wrapper min-vh-100 ">
          <div className="mt-3 mb-3 container">
            <div className="signup-row">
              <div className="row">
                <div className="position-relative col-12 col-md-6 col-sm-12">
                  <Link
                    to="/"
                    className="signup-btn-back d-inline-block transition"
                  >
                    <i className="fas fa-arrow-left" />
                  </Link>
                  <SignupForm />
                </div>
                <div className="signup-bg relative overlay col-md-6">
                  <div className="signup-intro">
                    <h2>Express your ideas</h2>
                    <p className="font-weight-lighter">
                      Create an account to start reading and writing
                      beautiful articles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default SignupPage;
import React from 'react';

/**
 * This component contains all the share buttons
 * @class SocialShare
 */
export default class  SocialShare extends React.Component {
  render() {
    const articleLink = window.location.href;
    return(
      <section className="container pg">
        <input name="jsk" placeholder="jsks" />
        <div>
          <a href={`https://www.facebook.com/sharer.php?u=`+articleLink}><span className="fab fa-facebook-square fa-5x" /></a>
        </div>
        <div>
          <a href={`https://twitter.com/intent/tweet?text=`+articleLink}><span className="fab fa-twitter fa-5x" /></a>
        </div>
        <div>
          <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Authors+Haven&body=`+articleLink}><span className="fab fa-google fa-5x" /></a>
        </div>
      </section>
    );
  }
}
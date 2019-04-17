import React from 'react';

/**
 * This component contains all the share buttons
 * @class SocialShare
 * @extends { React.Component }
 */
export default class  SocialShare extends React.Component {
  render() {
    const articleLink = window.location.href;
    return(
      <div>
        <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Authors+Haven&body=`+articleLink} className="text-danger" rel="noopener noreferrer" target="_blank"><i className="fas fa-envelope" /></a>
        <a href={`https://www.facebook.com/sharer.php?u=`+articleLink} className="text-primary" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-square" /></a>
        <a href={`https://twitter.com/intent/tweet?text=`+articleLink} className="text-white" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter-square text-info" /></a>
      </div> 
    );
  }
}
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileHeader from '../views/reuse/ProfileHeader';

/**
 * Container component for the ProfileHeader view
 * @export
 * @class ProfileHeaderContainer
 * @extends {Component}
 */
   class ProfileHeaderContainer extends Component{
    /**
     *Creates an instance of ProfileHeaderContainer.
     * @param {object} props The props object
     * @memberof ProfileHeaderContainer
     */
    constructor(props){
        super(props);
    }
    /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof ProfileHeaderContainer
     */
    render(){
      const {activePage, profile}= this.props;
        return(
          <ProfileHeader activePage={activePage} profile={profile} />
        );
    }
}
ProfileHeaderContainer.propTypes = {
  activePage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  profile: state.user,
});
export default connect(mapStateToProps, null)(ProfileHeaderContainer);

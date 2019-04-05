import React, {Component} from 'react';

import Dashboard from '../views/Dashboard';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import Wrapper from '../views/reuse/Wrapper';

/**
 * Container component for the Dashboard view
 * @export
 * @class DashboardContainer
 * @extends {Component}
 */
 export default class DashboardContainer extends Component{
     /**
     * Creates an instance of DashboardContainer.
     * @param {object} props The props object
     * @memberof DashboardContainer
     */
    constructor(props){
        super(props);
    }
     /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof DashboardContainer
     */
    render(){
        return (
          <Wrapper>
            <ProfileHeaderContainer activePage="DASHBOARD" />
            <Dashboard />
          </Wrapper>
        );
    }
}

import React, {Component} from 'react';

import Settings from '../views/Settings';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import Wrapper from '../views/reuse/Wrapper';

/**
 * Container component for the Settings view
 * @export
 * @class SettingsContainer
 * @extends {Component}
 */
 export default class SettingsContainer extends Component{
     /**
     * Creates an instance of SettingsContainer.
     * @param {object} props The props object
     * @memberof SettingsContainer
     */
    constructor(props){
        super(props);
    }
     /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof SettingsContainer
     */
    render(){
        return (
          <Wrapper>
            <ProfileHeaderContainer activePage="SETTINGS" />
            <Settings />
          </Wrapper>
        );
    }
}

import React, { Component } from 'react'
import Navigation from '../naviagationBar/navigationBar';
import MainContent from '../mainContent/mainContent';

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage-section">
                <Navigation/>
                <MainContent/>
            </div>
        )
    }
}

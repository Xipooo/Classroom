import React from 'react';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';

export default class Home extends React.Component {
    render() {
        return (
        <div className="myHome">
            <Header title="Home" />
            <HomeBody />
        </div>
        )
    }
}
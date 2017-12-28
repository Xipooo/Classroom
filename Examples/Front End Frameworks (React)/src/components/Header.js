import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/mine">Mine</a>
            </div>
        );
    }
}

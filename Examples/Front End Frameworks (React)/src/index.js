import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Description extends React.Component {
    constructor(props) { super(props) }

    render() {
        return (<p>Your last name is {this.props.lastName } and you are {this.props.age} years old.</p>);
    }
}

class Hello extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor was called");
    }

    componentDidMount() {
        console.log("componentDidMount was called");
    }

    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps was called");
    }

    render() {
        console.log("render was called")
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <Description lastName={this.props.lastName} age={this.props.age} />
            </div>
        );
    }
}

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

ReactDOM.render(
    <div>
        <Hello name='Marty' lastName="McFly" age={"Steve"} />
    </div>,
    document.getElementById('root')
);
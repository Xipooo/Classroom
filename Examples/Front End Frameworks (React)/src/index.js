import React from 'react';
import ReactDOM from 'react-dom';

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
        this.lastName = props.lastName;
        this.age = props.age;
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

ReactDOM.render(
    <div>
        <Hello name='Marty' lastName="McFly" age={"Steve"} />
    </div>,
    document.getElementById('root')
);
import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: 'Hello world!'
        }
    }


    render() {
        return (
            <div>
                <p>{this.state.hello}</p>
                <button onClick={() => {this.setState({hello: 'Hello world!'})}}>World</button>
                <button onClick={() => {this.setState({hello: 'Hello React!'})}}>React</button>
                <button onClick={() => {this.setState({hello: 'Hello friend!'})}}>Friend</button>
            </div>
        );
    }
}

export default HelloWorld;

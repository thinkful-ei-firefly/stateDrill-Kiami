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
                <p>{this.state}</p>
                <button onClick={function() {this.setState({hello: 'Hello world!'})}}>World</button>
                <button onClick={function() {this.setState({hello: 'Hello React!'})}}>React</button>
                <button onClick={function() {this.setState({hello: 'Hello friend!'})}}>Friend</button>
            </div>
        )
    }
}

export default HelloWorld;

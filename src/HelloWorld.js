import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            world: 'Hello world!',
            react: 'Hello React!',
            friend: 'Hello friend!'
        }
    }


    render() {
        return (
            <div>
                <p>{this.state.world}</p>
                <button onClick={function() {console.log('world button clicked')}}>World</button>
                <button onClick={function() {console.log('react button clicked')}}>React</button>
                <button onClick={function() {console.log('friend button clicked')}}>Friend</button>
            </div>
        )
    }
}

export default HelloWorld;

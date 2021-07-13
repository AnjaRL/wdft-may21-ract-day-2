import React, { Component } from 'react'


class LikeButton extends Component {

    // State is a special object in React Classes
    state = {
        count: 1,
        name: 'Manish'
    }

    // ES5 event listener functions in class components will always have `this` as undefined
    clickHandler = () => {
        /*
        whenever you want to update the state
        use the setState function
        setState takes 2 parameters
            1: an object with the names of the keys you want to update in the state
            2: a callback function
        */
        // Note: setState is used only in class components
        
        // This is an async func
        this.setState({ count: this.state.count + 1 }, () => {
            // use the callback function only when you want to do something synchronous with the state
            console.log(this.state.count)
        })

        
    }

    render() {
        return (
            <div>
                <button onClick={ this.clickHandler } >Like {this.state.count} </button>

                {/* Another way to create event listeners when you want to pass parameters */}
                {/* <button onClick={ (event) => { this.clickHandler(event) } } >LikeCopy</button> */}
            </div>
        )
    }
}




export default LikeButton



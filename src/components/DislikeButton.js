import React, {useState} from 'react'

function DislikeButton() {
    
    // useState will return us an Array with two values
    // 1: a variable with the default value
    // 2: a function that you can call anywhere to update the variable

    // Note: useState is used only in functional components
    const [count, updateCount]  = useState(0)

    const clickHandler = () => {
        console.log('Unlike clicked')

        // invoke the function whenever you want to update the count variable and make React re render the component
        // also an async function 
        updateCount(count - 1)
    }
   
    return (
        <div>
             <button onClick={ clickHandler } >Unlike {count} </button>
        </div>
    )


    //could have also avoided the event handler and done this
    /*
        return (
            <div>
                <button onClick={ () => { updateCount(count - 1) } } >Unlike {count} </button>
            </div>
        )
    */
}

export default DislikeButton
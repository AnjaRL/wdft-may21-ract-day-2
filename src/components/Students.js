import React, { useState } from 'react'
import studentsJson from '../students.json'


function Students() {

    // 1: We called it as `students` - you can call it anything
    // 2: updateStudents is a function, when you invoke this function and pass certain parameters to it, it will automatically update the students state
    const [students, updateStudents] = useState(studentsJson)
    //                                               ^
    //                                               |
    //                                               |
    //                                               |
    //                                               |
    //                             initial value stored in the student state

    const handleSort = () => {

        //clone the original array before sorting
        let cloneStudents = JSON.parse(JSON.stringify( students ))

        cloneStudents.sort((a, b) => {
            if (a.name > b.name ) {
                return 1
            }
            else if (a.name < b.name ) {
                return -1
            }
            else {
                return 0
            }
        })

        // updating the state so that the page re-renders
        // calling `updateStudents` will internally update the state `students`
        updateStudents(cloneStudents)

    }

    const handleAdd = () => {

        // grab a random student 
        let randomIndex = Math.floor(Math.random() * students.length)
        let randomElement = students[randomIndex]

        // Update the state so that the page re-renders
        // calling `updateStudents` will internally update the state `students`
        updateStudents([randomElement , ...students])

    }

    const handleDelete = (index) => {

        // Filter all the students that do not match the index of the student who's delete button was clicked
        let filteredStudents = students.filter((student, i ) => {
            return i !== index
        })
        
        // Update the state so that the page re-renders
        // calling `updateStudents` will internally update the state `students`
        updateStudents(filteredStudents)

    }
    return (
        <div>
            My students
            <div>
                <button onClick={ handleSort } >Sort</button>
                <button onClick={ handleAdd } >Add</button>
            </div>
            { 
                students.map((student, i) => {
                    return (
                        <div key={i}>
                            {student.name}
                            <button onClick={ () => { handleDelete(i) } }>Delete</button>
                        </div>
                    )
                }) 
            }
        </div>
    )
}


export default Students
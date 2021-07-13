import React, { Component } from 'react'
import studentsJson from '../students.json'

class Students extends Component {

    state = {
        students: studentsJson
    }

    handleSort = () => {
        // destructure the state
        const {students} = this.state

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
        this.setState({
            students: cloneStudents
        })
        
    }

    handleAdd = () => {
        const {students} = this.state
        // grab a random student 

        let randomIndex = Math.floor(Math.random() * students.length)
        let randomElement = students[randomIndex]

        // unshift, push ??? -- will mutate the original state. And not rerender the page

        // Update the state so that the page re-renders
        this.setState({
            students: [randomElement , ...students]
        })

    }

    handleDelete = (index) => {
        const {students} = this.state

        // Filter all the students that do not match the index of the student who's delete button was clicked
        let filteredStudents = students.filter((student, i ) => {
            return i !== index
        })
        
        // Update the state so that the page re-renders
        this.setState({
            students: filteredStudents
        })
    }

    render() {
        // `this` will always work here
        return (
            <div>
                My students
                <div>
                    <button onClick={ this.handleSort } >Sort</button>
                    <button onClick={ this.handleAdd } >Add</button>
                </div>
                { 
                    this.state.students.map((student, i) => {
                        return (
                            <div key={i}>
                                {student.name}
                                <button onClick={ () => { this.handleDelete(i) } }>Delete</button>
                            </div>
                        )
                    }) 
                }
                {/* 
                
                    Map does this and returns you an array of elements
                    [
                        <h4>Marta</h4>,
                        <h4>Lovro</h4>,
                        .
                        .
                        .
                        <h4>Juan</h4>
                    ]
                
                
                */}
            </div>
        )
    }
}

export default Students
import React from "react"
import "./homepage.css"

const Homepage = ({updateUser}) => {
    return (
        <>
        <div className="register">
            <h1>Profile</h1>
            
            <input type="text" name="firstName" value={`First Name is ${localStorage.user.split(',')[1].split(':')[1]}`}></input>
            <input type="text" name="lastName" value={`Last Name is ${localStorage.user.split(',')[2].split(':')[1]}`}></input>
            <input type="text" name="email" value={`Email is ${localStorage.user.split(',')[3].split(':')[1]}`}></input>
            <input type="text" name="contactNumber" value={`Mobile no is ${localStorage.user.split(',')[5].split(':')[1]}`}></input>
            <input type="text" name="address" value={`Address is ${localStorage.user.split(',')[6].split(':')[1]}`}></input>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
            </>
    )
}

export default Homepage
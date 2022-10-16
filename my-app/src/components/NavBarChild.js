import React from 'react'

function NavBarChild(props) {
    return (
        props.isLoggedin ?
            <button onClick={props.handleButton}>Log in</button>
            :
            <div>
            <form>
            <label htmlFor = "username">Username:</label>
            <input placeholder="username" id="username"/>
        
            <label htmlFor = "password">Password:</label>
            <input placeholder="password" id="password"/>
            </form>
            <button onClick={props.handleButton}>Submit</button>
            </div>
    )
}

export default NavBarChild
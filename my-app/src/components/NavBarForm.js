import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: false
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedin: prevState.isLoggedin ? false: true
        }),  () => console.log(this.state.isLoggedin))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild
                    isLoggedin={this.state.isLoggedin}
                    handleButton={this.handleClick}
                />
            </div>
        )
    }
}

export default NavBarForm
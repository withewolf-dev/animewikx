import React, { Component } from 'react'

class Display extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {title}=this.props
        return (
            <div>
                {title}
            </div>
        )
    }
}
export default Display
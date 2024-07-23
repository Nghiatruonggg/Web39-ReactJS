import React from 'react'

class Footer extends React.Component {

    constructor() {
        super()
        this.name = "Footer";
    }

    render() {
        return (
            <>
                <div style={{width: "100%", height: "90px", backgroundColor: "red"}}>
                    <h1>{this.name}</h1>
                </div>
            </>
        )
    }
}

export default Footer
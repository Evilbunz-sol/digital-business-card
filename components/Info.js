import React from "react"

function Info() {
    return (
        <header className="container">
            <img className="image" src="/Images/Vincent-Law.jpeg" />
            
            <div className="Info-Box">
                <h1> Evilbunz </h1>
                <p className="title"> Frontend Developer </p>
                <a href="www.google.com"> Evilbunz.website </a>
                
                <button className="btn-1"> Email </button>
                <button className="btn-2"> LinkedIn </button>
            </div>
        </header>
    )
}

export default Info
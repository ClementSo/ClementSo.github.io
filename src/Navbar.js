import React from 'react'

function Navbar(props) {
    return (
        <header className="bg:color:red:7">
                <a href="https://fr.wikipedia.org/wiki/Mastermind" target="_blank" className="logo">Mastermind</a>
            <nav>
                <ul>
                <li><a href="#" onClick={props.score}>Scores</a></li>
                <li><a href="https://www.regles-de-jeux.com/regle-du-mastermind/" target="_blank">Règles</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

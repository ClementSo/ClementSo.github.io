import React from 'react'

function Control(props) {
    return (
        <div className="control">
            <div className="combinaison">
                <div className="color red" onClick={() => props.colorize('red')}></div>
                <div className="color orange" onClick={() => props.colorize('orange')}></div>
                <div className="color yellow" onClick={() => props.colorize('yellow')}></div>
                <div className="color green" onClick={() => props.colorize('green')}></div>
                <div className="color blue" onClick={() => props.colorize('blue')}></div>
                <div className="color purple" onClick={() => props.colorize('purple')}></div>
            </div>

            <div className="actions">
                <button onClick={props.undo}>Undo</button>
                <button onClick={props.submit}>Submit</button>
            </div>
        </div>
    )
}

export default Control

import React from 'react'

function Line(props) {
    return (
        <div className="line">
            <div className="combinaison">
                <div className={"case-combinaison " + (props.line[0][0] ? props.line[0][0] : "" )}></div>
                <div className={"case-combinaison " + (props.line[0][1] ? props.line[0][1] : "" )}></div>
                <div className={"case-combinaison " + (props.line[0][2] ? props.line[0][2] : "" )}></div>
                <div className={"case-combinaison " + (props.line[0][3] ? props.line[0][3] : "" )}></div>
            </div>

            <div className="result">
            <div className={"case-result" + (props.line[1][0] ? props.line[1][0] : "" )}></div>
            <div className={"case-result" + (props.line[1][1] ? props.line[1][1] : "" )}></div>
            <div className={"case-result" + (props.line[1][2] ? props.line[1][2] : "" )}></div>
            <div className={"case-result" + (props.line[1][3] ? props.line[1][3] : "" )}></div>
            </div>
        </div>
    )
}

export default Line
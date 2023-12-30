import React from "react"

export default function Card(props) {
    let badgeText
    if (props.currentlyTaken === true) {
        badgeText = "Currently Taken"
    } else {
        badgeText = "Done"
    }

    return (
        <div className="card">
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img
                src={`../images/${props.img}`}
                className="card--image"
            />
            <div className="card--status">
                <span className="gray">{props.status.currentGrade}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--time">
                <span className="bold"> {props.time}</span>
            </p>
        </div>
    )
}

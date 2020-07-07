import React from "react";


function Row(props) {

    return (


        <tr>
            <td><img style={{ height: 50, width: 50 }} src={props.image}></img></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>


    )
}

export default Row;
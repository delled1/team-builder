import React from "react";

const Form = (props) => {
    console.log(props.teamMember)

    return(
        <div>
        {props.teamMember.map((note) => (
            <div>
              <h2>{note.name}</h2>
              <h3>{note.title}</h3>
              <h4>{note.about}</h4>
            </div>
          ))}
        </div>
        // <h1>{props.teamMember.id}</h1>
    )
}
        //     {props.teamMember.map((member) => {
        //         <div className="note" key={member.id}>
        //             <h2>{member.title}</h2>
        //             <h3>{member.name}</h3>
        //             <p>{member.about}</p>
        //         </div>
        //     })}
export default Form;
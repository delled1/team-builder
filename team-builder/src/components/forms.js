//ICE
import React, { useState } from "react"

const Forms = (props) => {

    const [member, setMember] = useState({  title: "", name: "", about: ""})

    const handleChanges = (event) => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", title: "", about: ""})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <br/>
            <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter Title"
            onChange={handleChanges}
            value={member.title}
            required
            />
            <br/>
            <label htmlFor="name">Name</label>
            <br/>
            <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter"
            onChange={handleChanges}
            value={member.name}
            required
            />
            <br/>
            <label htmlFor="about">About</label>
            <br/>
            <textarea
            id="about"
            name="about"
            type="text"
            placeholder="Enter"
            onChange={handleChanges}
            value={member.about}
            required
            />
            <br/>
            <button type="submit">Add Member</button>
        </form>
    )
}

export default Forms;
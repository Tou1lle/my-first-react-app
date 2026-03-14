import { useState } from "react";

export default function FormObjChange() {
  const [person, setPerson] = useState({
    firstName: "Tuan",
    lastName: "Ha",
    email: "monkey@brain.com"
  })

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
    console.log("person first name: " + person.firstName);
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input type="text" value={person.firstName} onChange={handleFirstNameChange}/>
      </label>
      <label>
        Last name:
        <input type="text" value={person.lastName} onChange={handleLastNameChange}/>
      </label>
      <label>
        Email:
        <input type="text" value={person.email} onChange={handleEmailChange}/>
      </label>
      <p>
        {person.firstName}{" "}{person.lastName}{" "}{person.email}
      </p>
    </>
  )
}
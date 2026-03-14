import { useState } from "react"

function Person() {
  const [person, setPerson] = useState({
    firstName: "Tuan",
    lastName: "Ha",
    age: 100
  });

  //BAD!
  // eslint-disable-next-line no-unused-vars
  const handleIncreaseAgeBad = () => {
    //mutating
    person.age = person.age + 1;
    setPerson(person);
  };

  const handleNameChange = (e) => {
    if (e.target.classList.contains("first-name")) {
      console.log("first name input");
      setPerson({...person, firstName: e.target.value});
    } else {
      console.log("last name input");
      setPerson({...person, lastName: e.target.value});
    }
  }

  //GOOD!
  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    //shallow copy
    setPerson({...person, age: person.age + 1});
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  console.log("during render. ", person);

  return (
    <>
      <div>
        <label>
          First Name:
          <input type="text" className="first-name" onChange={handleNameChange} value={person.firstName}/>
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" className="last-name" onChange={handleNameChange} value={person.lastName}/>
        </label>
      </div>
      <h1>{person.firstName} {person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  )
}

export default Person;
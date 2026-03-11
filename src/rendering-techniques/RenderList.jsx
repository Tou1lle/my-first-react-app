function RenderListHardCoded() {
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        <li>Lion</li>
        <li>Cow</li>
        <li>Snake</li>
        <li>Lizard</li>
      </ul>
    </div>
  );
}

function RenderList() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map(animal => {
          return <li key={animal}>{animal}</li>
        })}
      </ul>
    </div>
  );
}

function RenderList2() {
  const animals = ["Lion2", "Cow2", "Snake2", "Lizard2"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  )
}

/* ---------------------------------------------------------------------- */
function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map(animal => {
        return <ListItem key={animal} animal={animal} />
      })}
    </ul>
  );
}

function ListApp() {
  const animals = ["Monkey", "Doggo", "Kitty", "Roach"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

export {RenderList, RenderList2, ListApp}
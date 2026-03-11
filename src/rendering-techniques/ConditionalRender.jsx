function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
        //return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function ConditionalApp() {
  const animals = ["Levhart", "Labubu", "Donkey", "Gorilla"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

/* ---------------------------------------------------------------------- */
function ListBigger(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function ConditionalAppBigger() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <ListBigger animals={animals} />
    </div>
  );
}

export { ConditionalApp, ConditionalAppBigger };
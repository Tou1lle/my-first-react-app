const todos = [
  {task: "mow the yard", id: crypto.randomUUID()},
  {task: "do the dishes", id: crypto.randomUUID()},
  {task: "buy banana for monkey", id: crypto.randomUUID()},
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

function MonthList() {
  return (
    <ul>
      {months.map((month, index) => <li key={index}>{month}</li>)}
    </ul>
  );
}

export { TodoList, MonthList };
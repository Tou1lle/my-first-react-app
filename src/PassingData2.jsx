function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px"
  };

  return (
    <button style={buttonStyle}>{props.text}</button>
  );
}

function ButtonDestructuring({color = "black", text = "Monkey", fontSize = "12"}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>
}

function ButtonWithFunction({color = "yellow", text="Click Me!", fontSize="12", handleClick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize
  }

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function ButtonApp2() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  }

  const handleClickURL = (url) => {
    window.location.href = url;
  }

  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
      <ButtonDestructuring text="Destructured" color="pink" fontSize={14}/>
      <ButtonDestructuring />
      <ButtonWithFunction handleClick={handleButtonClick}/>
      <ButtonWithFunction handleClick={() => handleClickURL("https://www.theodinproject.com")}/>
    </div>
  );
}
import React from "react";
import "./App.css";

class Clock extends React.Component<{}, { date: Date }> {
  timerID: IntervalID;

  constructor(props: Object) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("Mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    console.log("Unmount");
    clearInterval(this.timerID);
  }

  render() {
    return <div>It is {this.state.date.toLocaleTimeString()}.</div>;
  }
}

function RedListItem({ value }) {
  return <li style={{ color: "red" }}>{value}</li>;
}

function TestNumberList({ numbers }) {
  const listItems = numbers.map(number => (
    // Note that the key is defined here, keys must be defined
    // in jsx that is directly nested within the ul/ol
    <RedListItem value={number} key={number.toString()} />
  ));
  return <ul>{listItems}</ul>;
}

function NumberList({ rangeStart, rangeStop }) {
  let numbers = [];
  for (var i = rangeStart; i < rangeStop; i++) {
    numbers.push(i);
  }
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

function TestForms() {
  const inputTypes = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ];
  const inputs = inputTypes.map(inputType => (
    <div>
      <input type={inputType} />
    </div>
  ));
  return <form>{inputs}</form>;
}

class App extends React.Component<{}, { showTime: boolean }> {
  timeOutID: TimeoutID;

  constructor(props: Object) {
    super(props);
    this.state = { showTime: true };
  }

  componentDidMount() {
    this.timeOutID = setTimeout(
      () => this.setState({ showTime: false }),
      10000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutID);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>{this.state.showTime && <Clock />}</h2>
        <h2>{this.state.showTime && <Clock />}</h2>
        <h2>
          <Clock />
        </h2>
        <h2>
          <Clock />
        </h2>
        <h2>
          <Clock />
        </h2>
        <h2>
          <Clock />
        </h2>
        <TestNumberList numbers={[1, 2, 3, 4, 5]} />
        <NumberList rangeStart={0} rangeStop={100} />
        <TestForms />
      </div>
    );
  }
}

export default App;

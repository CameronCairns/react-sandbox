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
    // in jsx that is directly nested within the parent container
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
    <div key={inputType}>
      <input type={inputType} />
    </div>
  ));
  return <form>{inputs}</form>;
}

class ControlledForm extends React.Component<{}, { value: string }> {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function CustomTextArea() {
  const text = `
    Let's try fancy multiline strings
    ${50} with a variable here. Apparently
    template strings respect whitespace..
    It makes sense but hurts splits of 80 chars.
    However there is a tag system that might be
    utilized to get around this.
  `;
  return <textarea value={text} />;
}

class IceCreamSelector extends React.Component<{}, { value: string }> {
  constructor(props) {
    super(props);
    this.state = { value: "strawberry" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Two scoops of ${this.state.value} coming up!`);
    event.preventDefault();
  }

  render() {
    const flavors = ["Strawberry", "Chocolate", "Vanilla", "Boysenberry"];
    const options = flavors.map(flavor => (
      <option key={flavor.toLowerCase()}>{flavor}</option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What type of icecream would you like?
          <select value={this.state.value} onChange={this.handleChange}>
            {options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class TestMultiSelector extends React.Component<{}, { value: [] }> {
  state = { value: ["Larry", "Moe"] };

  handleChange = event => {
    const selectedOptions = Array.prototype.filter.call(
      event.target.options,
      option => option.selected
    );
    const value = selectedOptions.reduce(
      (acc, option) => acc.concat([option.value]),
      []
    );
    this.setState({ value: value });
  };

  handleSubmit = event => {
    var message;
    if (this.state.value.length === 0) {
      message = "You gotta choose at least one stooge!";
    } else {
      function reducer(acc, val) {
        return `${acc}, ${val}`;
      }
      const selections = this.state.value.reduce(reducer);
      message = `The following was selected:\n ${selections}`;
    }
    alert(message);
    event.preventDefault();
  };

  render() {
    const choices = ["Larry", "Moe", "Curley"];
    const options = choices.map(choice => (
      <option key={choice.toLowerCase()}>{choice}</option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose a stooge (1 or more):
          <select
            multiple
            value={this.state.value}
            onChange={this.handleChange}
          >
            {options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FileInput extends React.Component<{}, {}> {
  fileInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload File:
          <input type="file" ref={this.fileInput} />{" "}
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
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
        <NumberList rangeStart={0} rangeStop={10} />
        <TestForms />
        <ControlledForm />
        <CustomTextArea />
        <IceCreamSelector />
        <TestMultiSelector />
        <FileInput />
      </div>
    );
  }
}

export default App;

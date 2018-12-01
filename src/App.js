import React from "react";
import logo from "./logo.svg";
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
      </div>
    );
  }
}

export default App;

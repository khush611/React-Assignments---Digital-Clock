import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  componentDidMount() {
    this.update = setInterval(() => {
      this.getTime();
    });
  }
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }
  componentWillUnmount() {
    clearInterval(this.update);
  }
  getTime() {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = this.hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12;
      hour = fullTime(hour);
      minute = fullTime(minute);
      seconds = fullTime(seconds);
      this.setState({
        time: (hour % 12) + ":" + minute + ":" + seconds + " " + ampm
      });
      function fullTime(n) {
        return n < 10 ? "0" + n : n;
      }
    }, 1000);
  }
  render() {
    return (
      <div className="Clock">
        <h3 className="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default App;

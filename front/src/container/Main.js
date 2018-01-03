import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {ponged: 'Not Ponged'}

    this.ping = this.ping.bind(this);
  }

  ping() {
    axios.get("http://localhost:8080/pong").then(res => {
      alert("Received Successful response from Spring5 Boot2 Server!");
      this.setState({ponged: 'Got Ponged from Spring5 Boot2 Server! '});
    }, err => {
      alert("Server rejected response with: " + err);
    });
  }

  render() {
    return (
      <div className="Main">
       
        <h1 className="App-title">Spring5 Boot2 ReactJS</h1>
        <br/>
        
        <h2>Welcome</h2>
      
        <p>
          <div>
            <br/>
            <button onClick={this.ping}>Ping!</button>
            <br/>
            <div><br/><br/>Ponged: {this.state.ponged}</div>
          </div>
        </p>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const mountNode = document.getElementById('app')

class App extends Component ({
  constructor(props){
    super(props)
    this.state = {
      counter: 0
      mastered: 0
    }
  }
  handleClick(event) {
      this.setState({counter: this.state.counter={+1}})
      this.setState({mastered: this.state.mastered={+1}})
    return {

    }
  }
  render() {
    const {counter, mastered} = this.state
    return (
      <div>
        <p>{"number of clicks: " + counter}</p>
        <p>{"number mastered: " + mastered}</p>
        <div id="counter"></div>
        <div className="image bulbasaur"></div>
      </div>
    )
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var root = document.createElement('div')
  document.body.appendChild(root)
  ReactDOM.render(<App />, mountNode)
})

'use strict'
import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass ({
  getInitialState: function () {
      return {
      counter: 0,
      mastered: 0
    }
  },

  handleClick: function (event) {
      this.setState({counter: this.state.counter={+1}})
      this.setState({mastered: this.state.mastered={+1}})
    return {

    }
  },

  render: function () {
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
  ReactDOM.render(<App />, root)
})

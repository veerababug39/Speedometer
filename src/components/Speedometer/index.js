// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  onDecrement = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="counter-heading">Speed is {count}mph</h1>
        <p className="counter-paragraph">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button type="button" onClick={this.onIncrement} className="btn-1">
            Accelerate
          </button>

          <button type="button" onClick={this.onDecrement} className="btn-2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

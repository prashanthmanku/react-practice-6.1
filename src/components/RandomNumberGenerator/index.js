// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  onGenerateRandomNo = () => {
    const randomNo = Math.ceil(Math.random() * 100)
    this.setState({randomNo})
  }

  render() {
    const {randomNo} = this.state
    return (
      <div className="randomno-bg-container">
        <div className="random-no-card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onGenerateRandomNo}>
            Generate
          </button>
          <p className="random-no">{randomNo}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

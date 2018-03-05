import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import {TweenLite, CSSPlugin} from 'gsap'
// import $ from 'jquery'
import Content from './components/Content'
class Layout extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (<div>
      <Content></Content>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)

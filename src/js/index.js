/* global document */
/* eslint-env browser */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TweenMax from 'gsap/src/minified/TweenMax.min'
// import $ from 'jquery/dist/jquery.min' [NOT BEING USED]
import Landing from './components/Landing'
// import '../sass/main.scss' [ONLY IN PRODUCTION]
class Layout extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    TweenMax.from("#landing", 3, {
      y: 100,
      autoAlpha: 0
    })
  }
  render() {
    return (<div>
      <Landing></Landing>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)

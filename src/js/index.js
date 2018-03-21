/* global document */
/* eslint-env browser */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import TweenMax from 'gsap/src/minified/TweenMax.min'
import Landing from './components/Landing'
import '../sass/main.scss'
// import $ from 'jquery/dist/jquery.min' [JQUERY NOT BEING USED]
class Layout extends Component {
  constructor () {
    super()
    this.state = {}
  }
  componentDidMount () {
    // TweenMax.from('#landing', 1, {
    //   y: '20vh',
    //   autoAlpha: 0
    // })
  }
  render () {
    return (<div>
      <Landing></Landing>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)

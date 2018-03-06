import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TweenLite from 'gsap/src/minified/TweenLite.min'
import $ from 'jquery/dist/jquery.min'
import Content from './components/Content'
class Layout extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
  }
  render() {
    return (<div>
      <Content></Content>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)

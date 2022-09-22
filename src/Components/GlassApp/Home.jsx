import React, { Component } from 'react'
import Body from './Body'
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}

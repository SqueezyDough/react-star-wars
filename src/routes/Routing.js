import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { Home, NotFound } from '../pages'
import Character from '../pages/Character'

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/:resource/:id'><Character /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </Router>
  )
}

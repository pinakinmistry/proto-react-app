import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>Protobot Using React + Redux</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/preview' activeClassName={classes.activeRoute}>
      Preview
    </Link>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
)

export default Header

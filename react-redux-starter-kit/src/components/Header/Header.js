import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className={classes.header}>
    <h1>
      Prototype using React + Redux
      <span className='pull-right'>
        <IndexLink to='/prototype' activeClassName={classes.activeRoute}>
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
      </span>
    </h1>

  </div>
)

export default Header

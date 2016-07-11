import React from 'react'
import classes from './Counter.scss'

export const Screen = (props) => (
  <div className={classes.imageList}>
    <div>
      <div id="drop_zone" className={classes.dropzone}>
        + Add screen images here to begin with prototyping!
      </div>
    </div>
  </div>
)

Screen.propTypes = {
  Screen: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Screen

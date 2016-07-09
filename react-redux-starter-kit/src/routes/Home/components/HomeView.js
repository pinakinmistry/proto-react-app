import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Add screen images to begin with prototyping!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />

    <div class="image-list">
	    <div id="drop_zone" className={classes.dropzone}>
		    + drop files here
		</div>
	</div>
  </div>
)

export default HomeView

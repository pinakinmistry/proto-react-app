// ------------------------------------
// Constants
// ------------------------------------
//export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const ADD_ALL_IMAGES = 'ADD_ALL_IMAGES'

// ------------------------------------
// Actions
// ------------------------------------
// export function increment (value = 1) {
//   return {
//     type: ADD_ALL_IMAGES,
//     payload: value
//   }
// }
export function addAllImages (images = []) {
  console.log(images)
  return {
    type: ADD_ALL_IMAGES,
    payload: images
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch(increment(getState().counter))
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  addAllImages
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ALL_IMAGES]: (state, action) => {
    return { images: action.payload }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { images: [] }
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

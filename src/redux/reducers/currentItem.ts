const defaultState = 0;

function reducer( state = defaultState, action: any ) { // { type, payload }

  let result = null;

  switch ( action.type ) {

    default: {
     
      result = state;

    }  

  }

  return result;

}

export default reducer;
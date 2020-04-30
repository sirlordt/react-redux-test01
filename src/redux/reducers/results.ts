import items from '../../data/items';

import { _TYPE_FIND_RESULTS } from './../constants';

const defaultState: any = [];

function reducer( state = defaultState, action: any ) { // { type, payload }

  let result = null;

  switch ( action.type ) {

    case _TYPE_FIND_RESULTS: {

      const regexp = new RegExp( `^${action.payload}`, 'i' );

      result = items.filter( n => regexp.test( n.title ) );

      break;

    }

    default: {
     
      result = state;

    }  

  }

  return result;

}

export default reducer;
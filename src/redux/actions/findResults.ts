import { _TYPE_FIND_RESULTS } from './../constants';

const findResults = ( text: string ) => {

  return {
           type: _TYPE_FIND_RESULTS,
           payload: text
         }

}

export default findResults;
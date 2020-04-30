import { _TYPE_FIND_SUGGESTIONS } from './../constants';

const findSuggestions = ( text: string ) => {

  return {
           type: _TYPE_FIND_SUGGESTIONS,
           payload: text
         }

}

export default findSuggestions;
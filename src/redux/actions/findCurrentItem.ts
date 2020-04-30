import { _TYPE_FIND_CURRENT_ITEM } from './../constants';

const findCurrentItem = ( id: number ) => {

  return {
           type: _TYPE_FIND_CURRENT_ITEM,
           payload: id 
         }

}

export default findCurrentItem;
import { Map } from ' immutable';
import { handleCtions, createActions} from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';
const initialState = Map({
  value : ''
})


export const setInput = createActions(SET_INPUT);
export default handleCtions({
  [SET_INPUT] : (state, action) => {
    return state.set('value', action.playload)
  }
}, initialState);
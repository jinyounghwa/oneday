const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
  type : INCREMENT,
  diff : diff
});

const decrement = (diff) => ({
  type : DECREMENT,
  diff : diff
  
});

const initialState = {
  number : 1,
  foo : 'bar',
  baz : 'quz'
};

function counter(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return {
       ...state,
        number:state.number + action.diff
      };    
    case DECREMENT:
      return {
       ...state,
        number:state.number - action.diff
      }; 
    default:
      return state;
  }
}
console.log(counter(undefined,increment(1)));
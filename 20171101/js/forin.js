 //for in
 const player = {name : 'tomas', rank:'midshipman', age :'25'}
 for (let prop in player) {
     if(!player.hasOwnProperty(prop)) continue;
     console.log(prop + ':' + player[prop]);
 }
 //for of
//  const hand = [randFace(), randFace(), randFace()];
//  for (let face of hand) {
//     console.log(`you rooled..${face}!`);
//  }
 let iterable = [10, 20, 30];
 
 for (let value of iterable) {
   console.log(value);
 }
import React, {Component} from 'react';
import './App.css';

const list = [
  {
    title : `React`,
    url : `https://reactjs.org/`,
    author : `john walke`,
    num_comments : 3,
    points : 4,
    objectID : 0,
  },
  {
    title : `Redux`,
    url : `https://github.com/reactjs/redux` ,
    author : `jin`,
    num_comments : 2,
    points : 5,
    objectID : 1,
  },
];

class App extends Component{
  render() {
      return (
      <div className="App">
        {list.map(item =>
            <div key={item.objectID}>
            <div>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
            </div>
        )}
      </div>
    )
  }
}

export default App;
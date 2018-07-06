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

function isSearched(searchTerm) {
  return function(item) {
    //조건에 따라 true,false
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component{
  onSearchChange(event){
    this.setState({searchTerm:event.target.value});
  }
  constructor(props){
    super(props);
    this.state = {
      list : list,
      searchTerm:``,
    };
    this.onDisminss = this.onDisminss.bind(this);
  }
  onDisminss(id) {
    const isNotId = item => item.objectID !==id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list : updatedList});
  }
  onSearchChange() {

  }
  render() {
      const { searchTerm, list} = this.state;
      return (
      <div className="App">
        <form>
          <input type="text" 
                 value={searchTerm}
                 onChange={this.onSearchChange}
          />
        </form>
        {list.filter(isSearched(this.state.searchTerm)).map(item =>
            <div key={item.objectID}>
            <div>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={()=>this.onDisminss(item.objectID)}
                  type="button"
                >dissmiss</button>
              </span>
            </div>
            </div>
        )}
      </div>
    )
  }
}

export default App;
import React, {Component} from 'react';

class EventPractice extends Component {
    state = {
        message:''
    }
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            message: ''
        });
    }
    handKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                 type="text"
                 name="username"
                 placeholder="유저명"
                 value={this.state.message}
                 onChange={
                     (e) => {
                         this.setState({
                             message:e.target.value
                         })
                     }
                 }
                 />
                 <input
                 type="text"
                 name="message"
                 placeholder="아무거나 입력해보세요"
                 value={this.state.message}
                 onChange={this.handleChange}
                 onKeyPress={this.handKeyPress} 
                 />
                 <button onClick={
                     () => {
                         alert(this.state.message);
                         this.setState({
                             message : ''
                         })
                     }
                 }>확인</button>
            </div>
        )
    }
}

export default EventPractice;
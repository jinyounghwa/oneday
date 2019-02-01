import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>홈</h2>
            <button onClick={() => {
            window.history.push('/about/javascript')
         }}>자바스크립트를 사용하여 이동</button>
    </div>
    );
};

export default Home;
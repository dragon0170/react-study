// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!'
}

// Create a react component
const App = () => {
    const buttonText = { text: 'click me' };
    const labelText = 'Enter name:';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}ㅌ
            </button>
        </div>
    )
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
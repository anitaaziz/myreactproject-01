import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Hi() {
  return
      <div className = "root">
        <strong>Hello Anita</strong>
        <p>JSX is a syntax react supports, its simple HTML but at the end a complier convert this syntax in JS in the backgroung</p>
        <ul>
          <li>React</li>
          <li>Import</li>
          <li>JS Function</li>
          <li>Components</li>
        </ul>
        {"Hi" + 12}
        {10 + 8 + " Hello"}
      </div>
}
ReactDOM.render(<Hi/>, document.querySelector('#root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

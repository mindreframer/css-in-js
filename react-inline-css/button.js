import React from 'react';
import InlineCss from 'react-inline-css';

let Button = React.createClass({
  render() {
    return (
      <InlineCss stylesheet="
        & .container {
          text-align: center;
        }
        & .button {
          background-color: #ff0000;
          width: 320px;
          padding: 20px;
          border-radius: 5px;
          border: none;
          outline: none;
        }
        & .button:hover {
          color: #fff;
        }
        & .button:active {
          position: relative;
          top: 2px;
        }
        @media (max-width: 480px) {
          & .button {
            width: 160px
          }
        }
        ">
        <div className="container">
          <button className="button">Click me!</button>
        </div>
      </InlineCss>
    );
  }
});

React.render(<Button />, document.getElementById('content'));

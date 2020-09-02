import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Item:</b> {props.name}
      <br />
      <b>Price:</b> {props.price}
    </div>
  )
}
class App extends React.Component {
  render() {
    return(
      <div>
      <Item name="Potato" price="N600" />
      <Item name="Garri" price="N850" />
      </div>
    )
  }
}
const element = <App />; 
ReactDOM.render(
  element, 
  document.getElementById('root')
);
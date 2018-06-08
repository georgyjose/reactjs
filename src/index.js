import React , { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Ab(props){
return (
  <div class='myclass'>
    <p id='n'> Name: {props.name} </p>
    <p> Age: {props.age} </p>
  </div>
);
}



class Cd extends Component{
  render(){
    return (
      <p>Hii</p>
    );
  }
};

var myvar=(<div>
<Ab name='Geo' age='21'/>
<Ab name='Bob' age='21'/>
<Cd />
</div>);

ReactDOM.render(
  myvar,
  document.getElementById('root')
);
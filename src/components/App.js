import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [list, setList] = useState([]);
  const [inputValue,setInputValue] = useState("");
  const onChangeHandle = (event) => {
      //console.log(event.target.value);
      setInputValue(event.target.value)
  }
  const buttonClickHandle = (event) => {
    //alert("Hiii");
    setList([...list, inputValue]);
    setInputValue('');
    document.getElementById("input").value='';
  }
  return (
    <div id="main">
       <input id="input" onChange={onChangeHandle}/>
          <button id="button" onClick={buttonClickHandle}>Click</button>
       <ul id="list">
        <List listx={list} />
      </ul>
    </div>
  )
}


export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useTransition } from 'react';
import axios from 'axios';

function App() {
  const[data,setData]=useState([]);
  let response;
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").
    then(response=>setData(response.data)).
    catch(error=>console.log("error",error))
  })
  return (
    <div className="App">
      <center>
        <ul>
          { data.map((item,index)=>(
          <li key={index}>
            {item.title}
          </li>))}
        </ul>
      </center>
    </div>
  );
}

export default App;

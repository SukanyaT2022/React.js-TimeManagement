import {useState} from 'react';
import './App.css'

const App = () => {
  //Coonect with input using form binding--individual
  const [text, setText] = useState('')

  //This will store all list items--all data in array
  const [data, setData] = useState([])

  const textHandler = (e)=>{
    setText(e.target.value)
    console.log(text)
  }

  const addToList = ()=>{
    setData((old)=>setData([...old,text]));
  }
// console.log(data.length)
  return (
  <div>
      <input 
        type='text'
        value={text} 
        onChange={textHandler}
      />
      <button onClick={addToList}>Add</button>

      <ul>
        {data && data.map((item)=>(
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
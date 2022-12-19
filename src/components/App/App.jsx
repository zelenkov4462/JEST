import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prev => !prev)

    useEffect(() => {
        const timer = setTimeout(() => {
            setData({})
        }, 100)
        return () => {
            clearTimeout(timer)
        }
    }, [])
  return (
    <div className="App">
        <div data-testid='value-elem'>{value}</div>
        {toggle && <div data-testid='toggle-elem'>toggle</div>}
        {data && <div style={{color: 'red'}}>data</div>}
      <h1>Hello</h1>
      <button data-testid='toggle-btn' onClick={onClick}>
        click me
      </button>
      <input onChange={(e) => setValue(e.target.value)} type="text"
             placeholder='value...'/>
    </div>
  );
}

export default App;

import {useState} from 'react'

const App = () => {
  const [state, setState] = useState(0);


  const increment = (e) => {
    setState((previousStateValue) => previousStateValue + 1)
  }

  const decrement = (e) => {
    setState((psv) => psv - 1)
  }

  return (
    <div style = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1>{ state }</h1>

      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
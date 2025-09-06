import React , {useState, useEffect} from 'react'

const App = () => {
  const[advice, setAdvice] = useState("");
  const[count, setCount] = useState(0);

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((e)=> e + 1);
  }

  // for auto output display of advice before button
  useEffect(()=>{
    getAdvice();
  }, []);

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={() => getAdvice()}>Get Advice</button>
      <Message count={count}/>
    </div>
  )
}

function Message({count}){
  return <p>You have asked for {count} pieces of advice</p>
  
}

export default App

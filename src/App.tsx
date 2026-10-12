import { useState } from "react"

function App() {
  

  return (
    <>
      <Fejlec></Fejlec>
      <ReactKapcsolo></ReactKapcsolo>
    </>
  )
}

function Fejlec(){
  return<>
    <p>Kapcsoló - Állapotkezelés a Reactben</p>
  
  </>
}

function ReactKapcsolo(){
  const [beki, setBeki] = useState<boolean>(true);
  return<>
    <p>{beki? "be" : "ki"}</p>
    <button onClick={()=>(beki? setBeki(false): setBeki(true))}>Be/ki</button>
  
  </>
}

export default App

import { useState } from "react"

function App() {
  

  return (
    <>
      <Fejlec></Fejlec>
      <ReactKapcsolo></ReactKapcsolo>

      <Lablec
      lablecnev="Kapcsolok" tema="kapcsolok"
      ></Lablec>
    </>
  )
}

function Fejlec(){
  return<>
  <header>
    <h1>Kapcsoló - Állapotkezelés a Reactben</h1>
  </header>  
  </>
}

function ReactKapcsolo() {
    const [bekapcsolva, setBekapcsolva] = useState(false);
 
    const kikapcsoltKep =
        "https://www.w3schools.com/js/pic_bulboff.gif";
 
    const bekapcsoltKep =
        "https://www.w3schools.com/js/pic_bulbon.gif";
 
    return (
        <div>
            <KepBetolto
                url={bekapcsolva ? bekapcsoltKep : kikapcsoltKep}
            />
            <p>
                A kapcsoló állapota:{" "}
                {bekapcsolva ? "be" : "ki"}
            </p>
            <button onClick={() => setBekapcsolva(!bekapcsolva)}>
                {bekapcsolva ? "Kikapcsolás" : "Bekapcsolás"}
            </button>
        </div>
    );
}
 
function KepBetolto(props) {
    return (
        <img
            src={props.url}
            alt="Izzó"
            width="100"
            height="180"
        />
    );
}

interface LablecProps{
  lablecnev: string;
  tema: string;
}

function Lablec({lablecnev, tema} : LablecProps){
  return <>
    <footer>
      <hr />

      <p>Név: {lablecnev}</p>
      <p>Téma: {tema}</p>
    </footer>
  
  </>
}

export default App

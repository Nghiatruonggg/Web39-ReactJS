import "./assets/style.css";


// function App() {

  
//   return (
//     <h1>Hello 500 ae</h1>
//   )
// }

// export default App

const App = () => {
  const name = "gg"
  const imgURL = "./image1.jpg"
  const rate = 5;
  const handleAlert = () => {
    alert("123");
  }

  return (
    <>
      <h1 className={`title-${rate}`} style={{color: "red"}}>Hello ae {name}</h1>
      <p className="description">Buoi hom truoc lop minh bao ve the nao roi?</p>
      <img src={imgURL} alt="..." />
      <br />
      {/* Event React */}
      <button onClick={handleAlert}>Alert</button>
      <button onClick={() => alert("123")}>Ey</button>
    </>
  )
}


export default App
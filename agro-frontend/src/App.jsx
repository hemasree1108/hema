import Navbar from "./components/Navbar"

function App() {
  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto"
      }}
    >
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>FARM SYNC</h1>
        <p>Connecting Farmers, Vendors</p>
      </div>
    </div>
  )
}

export default App

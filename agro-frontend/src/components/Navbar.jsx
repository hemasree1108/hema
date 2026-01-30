function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#2e7d32"
      }}
    >
      <div
        style={{
          width: "fit-content",
          padding: "12px 20px",
          textAlign: "center"
        }}
      >
        <h3 style={{ color: "white", marginBottom: "10px" }}>
          FARM SYNC
        </h3>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <span style={{ color: "white" }}>Home</span>
          <span style={{ color: "white" }}>Farmers</span>
          <span style={{ color: "white" }}>Vendors</span>
          
          <span style={{ color: "white" }}>Login</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

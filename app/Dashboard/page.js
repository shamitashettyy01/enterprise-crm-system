import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#e0f2fe",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Total Leads</h3>
            <p>150</p>
          </div>

          <div
            style={{
              background: "#dcfce7",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Customers</h3>
            <p>80</p>
          </div>

          <div
            style={{
              background: "#fef3c7",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Sales</h3>
            <p>₹2,50,000</p>
          </div>

          <div
            style={{
              background: "#fee2e2",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Activities</h3>
            <p>35</p>
          </div>
        </div>
      </div>
    </>
  );
}
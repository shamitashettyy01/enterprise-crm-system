import Navbar from "../components/Navbar";

export default function Leads() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Lead Tracking & Deal Stages
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h2>New Leads</h2>
            <p>25 Leads</p>
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h2>Contacted</h2>
            <p>18 Leads</p>
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h2>Proposal Sent</h2>
            <p>12 Leads</p>
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h2>Won Deals</h2>
            <p>8 Deals</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h2>Recent Leads</h2>

          <table
            style={{
              width: "100%",
              marginTop: "15px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>ABC Pvt Ltd</td>
                <td>New Lead</td>
              </tr>

              <tr>
                <td>Priya Patel</td>
                <td>XYZ Technologies</td>
                <td>Contacted</td>
              </tr>

              <tr>
                <td>Amit Kumar</td>
                <td>Tech Solutions</td>
                <td>Proposal Sent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
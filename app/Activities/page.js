import Navbar from "../components/Navbar";

export default function Activities() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Activity Logs
        </h1>

        <ul className="mt-5">
          <li>Email sent to ABC Pvt Ltd</li>
          <li>Meeting scheduled with XYZ Ltd</li>
          <li>Proposal shared with Tech Solutions</li>
        </ul>
      </div>
    </>
  );
}
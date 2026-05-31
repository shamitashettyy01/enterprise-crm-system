import Navbar from "../components/Navbar";

export default function Customers() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <ul className="mt-5">
          <li>ABC Pvt Ltd</li>
          <li>XYZ Ltd</li>
          <li>Tech Solutions</li>
        </ul>
      </div>
    </>
  );
}
import Navbar from "../components/Navbar";

export default function Sales() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Sales Performance
        </h1>

        <div className="shadow p-5 rounded mt-5">
          Monthly Revenue: ₹5,20,000
        </div>
      </div>
    </>
  );
}
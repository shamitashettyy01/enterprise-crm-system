import Navbar from "../components/Navbar";

export default function Admin() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Role Based Access Control
        </h1>

        <div className="mt-5">
          <p>Admin</p>
          <p>Sales Manager</p>
          <p>Sales Executive</p>
        </div>
      </div>
    </>
  );
}
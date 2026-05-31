"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link href="/Dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link href="/Leads" style={{ color: "white" }}>
        Leads
      </Link>

      <Link href="/Customers" style={{ color: "white" }}>
        Customers
      </Link>

      <Link href="/Sales" style={{ color: "white" }}>
        Sales
      </Link>

      <Link href="/Activities" style={{ color: "white" }}>
        Activities
      </Link>

      <Link href="/Admin-panel" style={{ color: "white" }}>
        Admin Panel
      </Link>

      <Link href="/login" style={{ color: "white", marginLeft: "auto" }}>
        Logout
      </Link>
    </nav>
  );
}
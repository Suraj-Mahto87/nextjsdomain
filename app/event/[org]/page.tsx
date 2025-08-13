"use client";
import { useParams } from "next/navigation";

export default function OrgPage() {
  const params = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Organisation Page</h1>
      <p>You are viewing: {params.org}</p>
    </div>
  );
}
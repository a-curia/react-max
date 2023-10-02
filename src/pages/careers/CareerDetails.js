import React from "react";
import { useLoaderData } from "react-router-dom";

// loader
export async function careerDetailsLoader({ params }) {
  //   const { id } = params
  const res = await fetch("http://localhost:4000/careers/" + params.id);

  if (!res.ok) {
    throw Error('Could not find that career!')
  }

  return res.json()
}

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>
        Career Details for {career.title}
      </h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">some details</div>
    </div>
  );
}

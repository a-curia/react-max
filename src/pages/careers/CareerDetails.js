import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export async function careerDetailsLoader({params}) {
  const { id } = params ///--

  const res = await fetch('http://localhost:4000/careers'+id)

  return res.json()
}


export default function CareerDetails() {

    const {id} = useParams()
    const career = useLoaderData()

  return (
    <div className='careeer-details'>
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className='details'>
            some details
        </div>
    </div>
  )
}

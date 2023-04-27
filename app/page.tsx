"use client"

import React, { useState, useEffect } from "react";

export function timeFormatter(seconds: number): string {
  const date = new Date(0);
  date.setUTCSeconds(seconds);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

type Weather = {
  name: string,
  main: {
    temp: number,
    feels_like: number,
    humidity: number
  },
  sys: {
    sunrise: number,
    sunset: number
  },
  weather: [
    {
      main: string
    }
  ]
}

export default async function Home() {
  // const [data, setData] = useState(null)
  const [query, setQuery] = useState("")

  const updateQuery = (e: React.ChangeEvent<any>) => {
    console.log(e.target.value);
    // setQuery(e.target.value);
    // setQuery(e.value)
  }

  const updateData = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    console.log(e.target.query.value);

    setQuery(e.target.query.value);
  }

  // const res = await fetch("http://localhost:3000/api/getcurrentweather/china")
  // const data: Weather = await res.json()

  // console.log(data)

  return (
    <main>
      <form onSubmit={updateData}>
        <input name="query" type="text" />
        <button type="submit">update</button>
      </form>
        
      <p>{query}</p>
    </main>
  )
}

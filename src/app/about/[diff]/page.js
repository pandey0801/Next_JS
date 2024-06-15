"use client";
// src/app/about/[diff]/page.js
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Check() {
  const params = useParams();
  const { diff } = params;

  console.log(diff); // This will log the dynamic part of the URL

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  
  const [url, setUrl] = useState("");

  // if(diff==="1"){
  //   console.log("it 1")
  //   setUrl("Yash senior dev")
  // }
  // if (diff==='2') {

  //   console.log("Vaibhav Backend Developer")
  //   setUrl("Vaibhav Backend Developer");

  // } else {
  //   console.log("no found");
  //   setUrl("not ");
  // }

  useEffect(() => {
    if (diff === "Yash") {
      console.log("it 1");
      setUrl("Yash Senior Developer");
    } else if (diff === "Vaibhav") {
      console.log("Vaibhav Backend Developer");
      setUrl("Vaibhav Backend Developer");
    } else {
      console.log("not found");
      setUrl("not found");
    }
  }, [diff]); // Effect runs when `diff` changes

  return (
    <div>
      <h1>Dynamic Routing Example</h1>
      <p>Dynamic segment: {diff}</p>
      <p>check what {url}</p>
    </div>
  );
}

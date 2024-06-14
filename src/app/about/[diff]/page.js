
// import { useRouter } from 'next/router'

// export default function check() {
    // const rou = useRouter()

    // console.log(rou.query.diff)

    // const router = useRouter();
    // const { diff } = router.query;
  
    // console.log(router); // This will log the dynamic part of the URL

//   return (
//     <div>let check</div>
//   )
// }


// import React from 'react'
// import { useRouter } from 'next/router'

// export default function check () {
//   return (
//     <div>check </div>
//   )
// }



// import { useRouter } from 'next/router';

// export default function Check() {
//   const router = useRouter();
//   const { diff } = router.query;

//   console.log(diff); // This will log the dynamic part of the URL

//   return (
//     <div>
//       <h1>Dynamic Routing Example</h1>
//       <p>Dynamic segment: {diff}</p>
//     </div>
//   );
// }


"use client";
// src/app/about/[diff]/page.js
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Check() {
  const params = useParams();
  const { diff } = params;

  console.log(diff); // This will log the dynamic part of the URL

  const details = [
    { id : 1, name: 'Yash', role: "Senior Developer"},
    { id : 2, name: 'Vaibhav', role: "Backend Developer"},
    { id : 3, name: 'Suresh', role: "Frontend Developer"},
    ]

    const [url,setUrl] = useState("")

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
      if (diff === "1") {
        console.log("it 1");
        setUrl("Yash Senior Developer");
      } else if (diff === "2") {
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



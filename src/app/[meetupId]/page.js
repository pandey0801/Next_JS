// import React from 'react'
// import Layout from '../../../components/layout/Layout'
// import { getStaticPaths } from 'next/dist/build/templates/pages';

// export default function dynanamic() {
//   return (
//           <Layout>
//           <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//           <h3>subject</h3>
//           <p>address</p>
//           </Layout>
//   )
// }

// export async function getStaticPaths() {
//   return{
//     fallback:false,
//     paths:[
//       { params: {
//         meetupId : 'm1',
//       },
//     },
//     {
//       params:{
//         meetId : 'm2',
//       },
//     },
//     ],
//   }
// }
// export  async function getStaticProps(context) {
//   const meetId = context.params.meetupId;
//   console.log(meetId);
// return{
//   props:{
//     image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     id: meetId,
//     title: 'first meetup',
//     address: 'some street ',
//     des:"some des"
//   }
// }
// }



// import Layout from '../../../components/layout/Layout';

// export async function generateStaticParams() {
//   return [
//     { meetupId: 'm1' },
//     { meetupId: 'm2' },
//   ];
// }

// export default function DynamicPage({ params }) {
//   const { meetupId } = params;

//   const meetupData = {
//     image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     id: meetupId,
//     title: 'first meetup',
//     address: 'some street',
//     description: 'some description'
//   };

//   return (
//     <Layout>
//       <img src={meetupData.image} alt={meetupData.title} />
//       <h3>{meetupData.title}</h3>
//       <p>{meetupData.address}</p>
//       <p>{meetupData.description}</p>
//     </Layout>
//   );
// }











import Layout from '../../../components/layout/Layout';

export async function generateStaticParams() {
  return [
    { meetupId: 'm1' },
    { meetupId: 'm2' },
  ];
}

export default function DynamicPage({ params }) {
  const { meetupId } = params;

  const meetupData = getMeetupData(meetupId);

  if (!meetupData) {
    // You can handle fallback UI here or redirect if the data doesn't exist
    return (
      <Layout>
        <h3>Meetup not found</h3>
      </Layout>
    );
  }

  return (
    <Layout>
      <img src={meetupData.image} alt={meetupData.title} />
      <h3>{meetupData.title}</h3>
      <p>{meetupData.address}</p>
      <p>{meetupData.description}</p>
    </Layout>
  );
}

function getMeetupData(meetupId) {
  const meetups = {
    m1: {
      image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 'm1',
      title: 'First Meetup',
      address: 'Some street',
      description: 'Some description',
    },
    m2: {
      image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 'm2',
      title: 'Second Meetup',
      address: 'Another street',
      description: 'Another description',
    }
  };

  return meetups[meetupId] || null;
}

// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//     if(req.method === 'POST'){
//         const data = req.body;
   

//     const {titile, image, address, description} = data;

//     MongoClient.connect('mongodb+srv://vinaypandey:92DCaL9nkv6Fl1Uh@cluster0.3n9svbb.mongodb.net/');
//     const db = client.db();
//     const meetupsCollection = dbcollection('meetups')

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({message:'meetup insert'});
// }
// }
// export default handler;


import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;
    const {check} = data;

    let client;

    try {
      client = await MongoClient.connect('mongodb+srv://vinaypandey:92DCaL9nkv6Fl1Uh@cluster0.3n9svbb.mongodb.net/');

      const db = client.db();
      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      res.status(201).json({ message: 'Meetup inserted' });
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}

export default handler;


import { connectionstr } from "@/app/Lib/db";
import { meet} from "@/app/Lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // mongoose.connect(connectionstr);
  // const data = await product.find();
  // console.log(data);
  // return NextResponse.json({result:data});

  let data = [];
  try {
    mongoose.connect(connectionstr);
    data = await meet.find();
  } catch (error) {
    data = { success: false };
  }
  // console.log(data);

  return NextResponse.json({ result: data });
}



export async function POST(request) {
    try{
        const payload = await request.json();
  await mongoose.connect(connectionstr);
  let newproduct = new meet(payload);
    // {
    // title:"test",
    // image:"test image url",
    // address:"test ambika",
    // description:"test first db",
    // name:"vin1"
//   }
// );
  const result = await newproduct.save();

  return NextResponse.json({result, success:true});
} catch(error){
    console.error('Database save error:', error);
      return NextResponse.json({ success: false, error: error.message });
}

}

// 

// export async function POST() {
//     try {
//       await connectToDB();
//       const newProduct = new Product({
//         title: "test item",
//         image: "test image url",
//         address: "test ambika",
//         description: "test first db",
//       });
//       const result = await newProduct.save();
//       return NextResponse.json({ result, success: true });
//     } catch (error) {
//       console.error('Database save error:', error);
//       return NextResponse.json({ success: false, error: error.message });
//     }
//   }

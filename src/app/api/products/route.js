

import { connectionstr } from "@/app/Lib/db";
import { product } from "@/app/Lib/model.js/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){

    // mongoose.connect(connectionstr);
    // const data = await product.find();
    // console.log(data);
    // return NextResponse.json({result:data});

   
    let data = []
    try{
        mongoose.connect(connectionstr);
        data = await product.find();
    }
    catch(error){
        data = {success:false}
    }
    console.log(data);

    return NextResponse.json({data});
}




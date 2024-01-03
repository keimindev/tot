import { ConnectToDb } from "@/lib/connectToDB";
import { Record } from "@/lib/models";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const POST = async(req, res) => {
 
 //  const { userId, username, time, section } = req
    try {
      ConnectToDb();
      const data  = await req.json()
      console.log(data, 'data')

      const newRecord = new Record(data);
      await newRecord.save();

      revalidatePath("/");
      return NextResponse.json(data);

    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }

}
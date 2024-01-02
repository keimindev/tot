// export { POST } from "@/lib/fetchHandler"
import { ConnectToDb } from "@/lib/connectToDB";
import { Record } from "@/lib/models";
import { revalidatePath } from "next/cache";


export const POST = async(req, res) => {
  const { userId, username, time, section } = req.body

    try {
      ConnectToDb();
    
      const newRecord = new Record({ userId, username, time, section });
      await newRecord.save();
      revalidatePath("/");
      return NextResponse.json();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }

}
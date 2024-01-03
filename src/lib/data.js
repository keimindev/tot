
import { ConnectToDb } from "./connectToDB"
import { Record } from "./models";
import { revalidatePath } from "next/cache";

export const getRecords = async () => {

    try {
        ConnectToDb();
        const records = await Record.find().sort({ createdAt: -1 });
        revalidatePath('/')
        return records
      
    } catch (error) {
        console.log(error)
    }

}

import { revalidatePath } from "next/cache";
import { ConnectToDb } from "./connectToDB"
import { Record } from "./models";


export const getRecords = async () => {

    try {
        ConnectToDb();
        const records = await Record.find().sort({ createdAt: -1 });
        console.log(records)
        return records
    } catch (error) {
        console.log(error)
    }

}

// export const addRecord = async({time}) => {
//  const { username, time, section } = Object.fromEntries(formData);

//     try {
//        ConnectToDb();
       
//        const newRecord = new Record({
//         username: 'min',
//         time,
//         section : 'Reading',
//        })

//        await newRecord.save();
//        console.log('saved to db');
//        revalidatePath("/")
//     } catch (error) {
//         console.log(error)
//     }

// }
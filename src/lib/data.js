import { ConnectToDb } from "./connectToDB"
import { Record } from "./models";


export const getRecords = async () => {

    try {
        ConnectToDb();
        const records = await Record.find();
        console.log(records)
        return records
    } catch (error) {
        console.log(error)
    }

}
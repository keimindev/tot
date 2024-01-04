
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

export const getTotalTime = async () => {
    try {
      const totalTimeResult = await Record.aggregate([
        {
          $group: {
            _id: null,
            totalTime: { $sum: "$time" },
          },
        },
      ]);
  
      // 결과에서 totalTime 값 가져오기
      const totalTime = totalTimeResult.length > 0 ? totalTimeResult[0].totalTime : 0;
  
      return totalTime;
    } catch (error) {
      console.log(error);
    }
  };

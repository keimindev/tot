
import { signOut , signIn } from "./auth";
import { ConnectToDb } from "./connectToDB"
import { Record, User } from "./models";
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

export const getTotalTime = async (currentYear, currentMonth) => {
    try {
      const totalTimeResult = await Record.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [{ $year: "$createdAt" }, currentYear] },
                { $eq: [{ $month: "$createdAt" }, currentMonth] },
              ],
            },
          },
        },
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

// 달 별로 데이터 수 불러오기 
export const getRecordsByMonth = async (year,month) => {
  try {
    ConnectToDb();

    const recordsByDayAndSection = await Record.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${year}-0${month}-01T00:00:00.000Z`),
            $lt: new Date(`${year}-0${month + 1}-01T00:00:00.000Z`),
          },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
            section: "$section",
          },
          time: { $sum: "$time" },
        },
      },
      {
        $group: {
          _id: {
            year: "$_id.year",
            month: "$_id.month",
            day: "$_id.day",
          },
          dayRecord: {
            $push: {
              section: "$_id.section",
              time: "$time",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id.year",
          month: "$_id.month",
          day: "$_id.day",
          dayRecord: 1,
        },
      },
      {
        $sort: {
          year: -1,
          month: -1,
          day: -1,
        },
      },
    ]);

    revalidatePath('/');
    console.log(recordsByDayAndSection[0]);
    return recordsByDayAndSection;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = async (name) => {
    try {
      ConnectToDb();
        const user = await User.findOne({email : name})
        revalidatePath('/')
        return user
      
    } catch (error) {
        console.log(error)
    }

}


export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")

}

export const handleGithubLogOut = async () => {
    "use server"
    await signOut("github")
  }


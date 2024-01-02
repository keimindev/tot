import { ConnectToDb } from "./connectToDB";
import { Record } from "./models";


// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       try {
//         ConnectToDb();

//         console.log('Received Data:', req.body);
//         const { username, time, section, userId } = req.body
//         const newRecord = new Record({ username, time, section, userId })
//         await newRecord.save();
        
//         res.status(201).json({ success: true, message: 'Data inserted successfully' });
//         // NextResponse.json(); 
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//       }
//     }
//   }
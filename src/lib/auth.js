import NextAuth from "next-auth";
import Github from "next-auth/providers/github"
import { ConnectToDb } from "./connectToDB";
import { User } from "./models";
export const { handlers : {GET,POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID, 
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks:{
        async signIn({user, account, profile}){
            console.log(user, account, profile)

            const getNextSequence = (name) => {
                var ret = User.findAndModify(
                       {
                         query: { _id: name },
                         update: { $inc: { seq: 1 } },
                         new: true
                       }
                );
             
                return ret.seq;
             }
            
            if(account.provider  ===  "github"){
                ConnectToDb()
                try {
                    const user = await User.findOne({ email: profile.email })

                    if(!user){
                        const newUser = new User({
                            username: profile.name,
                            email: profile.email
                        });

                        await newUser.save();
                        User.insert(
                            {
                              _id: getNextSequence("userid"),
                              name: profile.name
                            }
                         )
                    }
                } catch (error) {
                    console.log(error)
                    return false;
                    
                }
            } 
            return true;
        } 
    }
});
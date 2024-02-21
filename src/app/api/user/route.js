
import { ConnectToDb } from "@/lib/connectToDB";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const GET = async() => {
    try {
    ConnectToDb();

    //  사용자 인증 코드 추가
    const session = await auth();
    console.log(session, 'session');

    // 동적으로 사용자 이메일을 가져와서 데이터베이스에서 검색
    const userEmail = session.user.email;
    const user = await User.findOne({ email: userEmail });

    return NextResponse.json(user);

    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }

}
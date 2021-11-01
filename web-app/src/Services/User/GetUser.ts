import { User } from "../../store/schema/User";

export async function GetUser(userId: string): Promise<User | null> {
    const userInfo = await fetch('https://weridebackend20210702125346.azurewebsites.net/tuple/userAccount/' + userId);
    if (userInfo != null) {
        const userInfoData = await userInfo.json();
        if (userInfoData[0]) {
            var userObj: User = {
                firstName: userInfoData[0].firstname,
                lastName: userInfoData[0].lastname,
                userID: userId,
                email: userInfoData[0].email,
                image: userInfoData[0].imageurl,
                role: userInfoData[0].department
            }
            return userObj;
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}
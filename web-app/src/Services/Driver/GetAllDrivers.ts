import { User } from "../../store/schema/User";
import { GetUser } from "../User/GetUser";

export async function GetAllDrivers() {
    const drivers = await fetch('https://weridebackend20210702125346.azurewebsites.net/tuple/driver');
    var driverArray = [];
    if (drivers != null) {
        const driverData = await drivers.json();
        driverData.forEach(async (driver: any) => {
            const driverObj = await GetUser(driver.userid);
            if (driverObj != null) {
                driverArray.push(driverObj);

            }
        });
    }



}
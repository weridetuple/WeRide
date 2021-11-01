import { Carpool } from "../../store/schema/Carpool";

export async function GetAllDriverCarpoolsForDate(driverId: string, date: string): Promise<Carpool[] | null> {
    const carpools = await fetch(`https://weridebackend20210702125346.azurewebsites.net/tuple/carpool/driver/${driverId}/${date}`);

    if (carpools != null) {
        const driverCarpoolData = await carpools.json();
        return driverCarpoolData;
    }
    else {
        return null;
    }
}
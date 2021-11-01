import { Carpool } from "../../store/schema/Carpool";

export async function GetAllCarpoolsForTransportation(transportationId: string): Promise<Carpool[] | null> {
    const carpools = await fetch('https://weridebackend20210702125346.azurewebsites.net/tuple/carpool/' + transportationId);
    if (carpools != null) {
        const carpoolData = await carpools.json();
        return carpoolData;
    }
    else {
        return null;
    }

}

export async function CreateCarpool(transportationid: string) {
    const response = await fetch('https://weridebackend20210702125346.azurewebsites.net/tuple/carpool', {
        method: 'POST',
        body: JSON.stringify({ "transportationid": transportationid, "passengerrating": 1, "driverrating": 1 }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
}
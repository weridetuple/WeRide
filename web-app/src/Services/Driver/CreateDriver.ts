
export async function CreateDriver(userId: string, capacity: number) {
    const response = await fetch('https://weridebackend20210702125346.azurewebsites.net/tuple/driver', {
        method: 'POST',
        body: JSON.stringify({ "userid": userId, "capacity": capacity }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
}
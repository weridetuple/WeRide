
export async function DeleteDriver(userId: string) {
    const response = await fetch('https://weridebackend20210702125346.azurewebsites.net/tuple/driver/' + userId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
}
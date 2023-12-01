const api_ur = "http://localhost:3005"

export async function getServ(){
    const response = await fetch(api_ur,{
        method:"GET"
    })
    const date = await response.json()
    console.log(date)
    return date
}

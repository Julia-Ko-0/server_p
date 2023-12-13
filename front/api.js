const api_ur = "http://localhost:3004"

async function GetServ(){
    console.log('dfdff')
    const response = await fetch(api_ur,{
        method:"GET"

    })
    const date = await response.json()
    console.log(date)
    return date
}
 function dcdc(){
    console.log('yyyyyyy')
}
export{GetServ}
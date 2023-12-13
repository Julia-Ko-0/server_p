

const api_ur = "http://localhost:3005"

async function GetServ(url){
    const response = await fetch(url,{
        method:"GET" 
    })
return(response.json())

}
async function PostAutor(name,dr){
    console.log(dr)
    const response = await fetch('http://localhost:3005/autor',{
        method: "POST",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            autor_name:name,
            autor_birthday:dr
        })
    })
    console.log(response)
}
async function PostGanre(name_g,opis_g){
    const response = await fetch('http://localhost:3005/ganre',{
        method: "POST",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            name_ganr:name_g,
            opis_ganr:opis_g
        })
    })
    console.log(response)
}
async function PostBook(titl_n,gn_i,au_i,kolv){
    const response = await fetch('http://localhost:3005',{
        method: "POST",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            titl_name:titl_n,
            ganr_id:gn_i,
            autor_id:au_i,
            count:kolv
        })
    })
    console.log(response)
}

export{GetServ}
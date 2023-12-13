// import { dcdc } from "./api.js"

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


let div_b = document.getElementById('d_b')
let div_g = document.getElementById('d_ganr')
let div_a = document.getElementById('d_autor')
let  book = document.getElementById('book')
let  autor = document.getElementById('autor')
let  ganre = document.getElementById('ganre')
let conteiner = document.getElementById('conteiner')
let btn_post = document.getElementById('btn_post')
let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')
btn_post.addEventListener('click',()=>{
    // console.log('ot',i1.value,i2.value)
    PostGanre(i1.value,i2.value)

})
function CrContent(id_,n1,name_,n2,ganr_,n3,author_,n4,count){
    let id= document.createElement('h1')
    let name= document.createElement('h1')
    let ganr = document.createElement('h1')
    let autorss= document.createElement('h1')
    let coun = document.createElement('h1')
    let div = document.createElement('div')
    console.log(id_)
    id.textContent = id_
    name.textContent=name_
    ganr.textContent=ganr_
    autorss.textContent=author_
    coun.textContent=count
    div.append('id',id,n1,name,n2,ganr,n3,autorss,n4,coun)
    conteiner.append(div)
}

book.addEventListener('click', async ()=>{
    div_b.style.display = 'flex'
    div_a.style.display='none'
    div_g.style.display='none'
    let text = await GetServ(api_ur)
    // console.log(text)
    conteiner.innerHTML=''
    for(let i=0;i<text.length;i++){
        console.log(text[i].count_)
        CrContent(text[i].id_book,
            'Назв книги',
            text[i].title,
            'жанр',
            text[i].ganre_id            ,
            'автор',
            text[i].autor_id,
            'колво',
            text[i].count_)
    }
   
})
autor.addEventListener('click', async ()=>{
    div_b.style.display = 'none'
    div_a.style.display='flex'
    div_g.style.display='none'
    let text = await GetServ(api_ur+'/autor')
    console.log(text)
    conteiner.innerHTML=''
    for(let i=0;i<text.length;i++){
        CrContent(text[i].id_autor,
            'имя автора',
            text[i].autor_name,
            'др',
            text[i].autor_birthday,
            '',
            '',
            '',
            ''
)}
    
    
})
ganre.addEventListener('click', async ()=>{
    let text = await GetServ(api_ur+'/ganre')
    div_b.style.display = 'none'
    div_a.style.display='none'
    div_g.style.display='flex'
    console.log(text)
    conteiner.innerHTML=''
    for(let i=0;i<text.length;i++){
        CrContent(text[i].id_genre,text[i].ganre,text[i].opisanie,
            '',
            '',
            '',
            '',
            '',
            '')
    }
    
})
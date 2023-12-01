import { getServ } from "./api"
let  book = document.getElementById('book')
let conteiner = document.getElementById('conteiner')
book.addEventListener('click', async ()=>{
    let text = await getServ()
    conteiner.append(text)
})
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors({
  origin:'*'
}))
app.use(bodyParser.json())
const port = 3005
import pkg from 'pg'
const {Pool} = pkg


const bd = new Pool({
    user: 'postgres', // Пользователь базы данных
  host: 'localhost', // Хост базы данных (обычно localhost)
  database: 'Bibliothek', // Название базы данных, которую мы создали
  password: '1234', // Пароль пользователя postgres
  port: 5432, 
})
function get_book({res}){

    bd.query('SELECT * FROM BOOK', (err, result) => {
        if (err) {
          console.error('Ошибка выполнения запроса:', err);
        } else {
          console.log('Результат запроса:', result.rows);
          res.send(result.rows)
          // return result.rows
        }
      }); 
}
function get_autor({res}){
  bd.query('SELECT * FROM author', (err, result) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
    } else {
      console.log('Результат запроса:', result.rows);
      res.send(result.rows)
      // return result.rows
    }
  }); 
}
function get_ganre({res}){
  bd.query('SELECT * FROM ganre', (err, result) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
    } else {
      console.log('Результат запроса:', result.rows);
      res.send(result.rows)
      // return result.rows
    }
  }); 
}
function get_moving({res}){
  bd.query('SELECT * FROM moving', (err, result) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
    } else {
      console.log('Результат запроса:', result.rows);
      res.send(result.rows)
      // return result.rows
    }
  }); 
}
async function post_autor(req,res){
  await bd.connect()
  bd.query(`Call add_autor('${req.body.autor_names}','${req.body.autor_birthdays}')`)
  return res.json({mas:'yspex'})
}
async function post_ganr(req,res){
  await bd.connect()
  bd.query(`Call add_ganre('${req.body.name_ganr}','${req.body.opis_ganr}')`)
  return res.json({mas:'yspex'})
}
async function post_book(req,res){
  await bd.connect()
  bd.query(`Call add_book('${req.body.titl_name}','${req.body.ganr_id}','${req.body.autor_id}','${req.body.count}')`)
  return res.json({mas:'yspex'})
}
app.get('/', get_book)
app.get('/autor',get_autor)
app.get('/ganre',get_ganre)
app.get('/moving',get_moving)
app.post('/autor',post_autor)
app.post('/',post_book)
app.post('/ganre',post_ganr)
app.listen(port, ()=>{
    console.log(`server start  ${port}`)

})
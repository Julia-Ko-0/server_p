import express from 'express'
const app = express()
const port = 3005
import pkg from 'pg'
const {Pool} = pkg
// app.get('/', ()=>{
//     // res.send('Hi')
//     get_book()
// })

    //     // res.send('Hi')
    //     get_book()
    // })
    
// const pgp = require("pg-promise")(/*options*/);

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
          res.json(result.rows)
        }
      }); 
}


app.get('/b', get_book)

app.listen(port, ()=>{
    console.log(`server start  ${port}`)

})
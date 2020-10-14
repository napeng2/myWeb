let express = require('express')
let cors=require('cors')
let app = express()
console.log(cors);
app.use(cors)
app.listen('8001', _ => {
  console.log('ok');
})

app.get('/', (req,res) =>{
  let data={
    code:1,
    message:'hello'
  }
  res.send('123')
})
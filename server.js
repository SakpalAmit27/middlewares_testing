
import express from 'express'


const app = express(); 


app.get('/',(req,res) => {
    res.send({msg:"hello"})
})

app.listen(3000);
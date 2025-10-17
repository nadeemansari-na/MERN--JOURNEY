const express=require('express')
const app=express()
app.use(express.json())

app.get('/sum',function(req, res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    const final=a+b
    res.send(final.toString())
})
app.get('/simpleinterest',(req, res)=>{
    const principle=parseInt(req.query.principle)
    const interest=parseInt(req.query.interest)
    const time=parseInt(req.query.time)
    const total=principle*interest*time
    const calc=(principle*interest*time)/100
    res.send(total + " " + calc.toString())
})
app.listen(3000)
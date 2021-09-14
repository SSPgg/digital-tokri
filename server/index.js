const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'Alpha@123',
    database:'digital_tokri'
})

app.post('/create',(req,res) => {
    const projName = req.body.projName
    const projAddress = req.body.projAddress
    const projStatus = req.body.projStatus

    db.query("INSERT INTO project_table (project_name, project_address , project_status) VALUES (?,?,?)",
    [projName, projAddress, projStatus],(err,result) => {
        if(err) {
            console.log(err)
        } else {res.send("Values Inserted")}
    })
})

app.get('/getprojects',(req,res) => {
    db.query("SELECT * FROM project_table",(err,result) => {
        if(err) {
            console.log(err)      
        } else {res.send(result)}
    })
})


app.listen(3001,() => {
    console.log('Server running at 30001')
})
import express from 'express'
import { getLinks, addLink } from './utils/Redirects.js'


const app = express()

app.use(express.json())




//Note: everything in the post req(addLink) is temporary. Once the server restarts,
//all the title and urls are cleared. Except from the links.js datas.


//Main
app.get('/', (req,res) => {
    res.send("Main Page")
})

//Link redictor
app.get('/view/:userLink', getLinks)



//Post link
app.post('/api/add', addLink)






















//query params test
// http://127.0.0.1:/api/search?name=EcjTN&password=123anc
app.get('/api/search', (req,res) => {

    const {name, password} = req.query
    const trimmedName = name.replace(/\s+/g, '')
    
    console.log(trimmedName, ":", password)

    res.send("Console logged....")
})





app.listen(8000, () => console.log("[*] Streaming on port 8000"))
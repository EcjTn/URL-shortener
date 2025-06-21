import { linkList } from '../database/links.js'

//Get data and redirect user
async function getLinks(req, res) {

    let findLink = req.params.userLink
    const searchDB = linkList.find(data => data.title === findLink)

    if(!searchDB) return res.status(404).json({error:"Link not found."})
    res.redirect(searchDB.url)

}


async function addLink(req, res){

    //removes whitespaces
    const { title, url} = req.body
    req.body.title = title.replace(/\s+/g, '')
    req.body.url = url.replace(/\s+/g, '')


    //Checks if the Title already exists
    const checkTitle = linkList.find(data => data.title === req.body.title)
    if(checkTitle) return res.status(400).json({message:"Title already exists"})


    //Add data to array
    linkList.push(req.body)
    console.log(linkList)



    res.json({message: "Successful!"})

}


export { getLinks, addLink }

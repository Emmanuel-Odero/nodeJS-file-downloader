const https = require ("https")
const fs = require ("fs")
const log = console

const url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3XNlFJ2vF2KVRuymjUdyeQHaE7%26pid%3DApi&f=1" //entre the url of what you want to download
https.get(url, function(res){
    const fileStream = fs.createWriteStream("downloads/africas-lion-hunting.jpeg")//insert file na
    res.pipe(fileStream)
    fileStream.on('finish', function(){
        fileStream.close()
        console.log("Done!")
    })
})
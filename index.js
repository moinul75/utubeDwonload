const express = require('express')
const app = express()
const ytdl = require('ytdl-core')

const cors = require('cors')

const port = 4000

//use the cors
app.use(cors());

app.get('/dwonload', async(req,res)=>{
    try {
        url = req.query.url;
        videoId  = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)

        let data = {
            url : "https://youtube.com/embed/"+ videoId,
            info: metaInfo.formats
        };
        return res.send(data);

    } catch (error) {
       return res.status(500).json(error) ;
    }
})


app.listen(port,(req,res)=>{
    console.log(`server is running on port localhost:${port}`)
})



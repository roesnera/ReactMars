import express from "express";
import getTikTokMetrics from "./getTikTokMetrics.js";
import ServerlessHttp from "serverless-http";

const app = express();


// uses the express.json module to parse the body of the request
app.use(express.json());

app.get('/api/metrics', async (req, res) => {

    let tikTokMetrics = ["455", "4300", "118.9k"];

    try{
        tikTokMetrics = await getTikTokMetrics();
    } catch(err){
        console.error(err);
        console.log("Falling back on static numbers");
    }

    res.json({
        followers: tikTokMetrics[1],
        likes: tikTokMetrics[2]
    })
})

const handler = ServerlessHttp(app)

export { handler };
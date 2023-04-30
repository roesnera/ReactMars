import express from "express";
import path from "path";
import getTikTokMetrics from "./getTikTokMetrics.js";

const app = express();

const PORT = 3000;

// links to the dist directory for routing our webpage
app.use(express.static(path.join(".", 'dist')));

// uses the express.json module to parse the body of the request
app.use(express.json());

// sends our index.html from the dist directory to requests to the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(".", 'dist', 'index.html'));
});


app.get('/api/metrics', async (req, res) => {

    let tikTokMetrics = [455, "4300", "118.9k"];

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


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
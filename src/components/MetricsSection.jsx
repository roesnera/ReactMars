import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function MetricsSection() {
    const [metrics, setMetrics] = useState({
        tikTokFollowers: "5378",
        tikTokLikes: "122K",
        instagramFollowers: "1.8k"
    });

    useEffect(() => {
        fetchMetrics();
    }, []);

    async function fetchMetrics() {
        try{
        const metricObjArray = await axios.get("https://adamsapi.xyz/api/v1/metrics/peek");
        console.log(metricObjArray.data);
        const metricArrLength =  await metricObjArray.data.length;
        console.log(metricArrLength);
        const latestMetric = await metricObjArray.data[metricArrLength-1];
        console.log(latestMetric);
        setMetrics(latestMetric);
        } catch (err) {
            console.error(err);
        }
    }

    const { tikTokFollowers, tikTokLikes, instagramFollowers } = metrics;

    return (<section className="section metrics-section">
    <h2 className="section-title">metrics</h2>
    <div className="metric-box">
        <p>{tikTokFollowers} tiktok followers</p>
        <p>{tikTokLikes} likes</p>
        <p>{instagramFollowers} instagram followers</p>
    </div>
    <div className="darken">
        <p className="flex-container darken-flex">
            <span className="darken-flex-item">13.4% engagement</span> 
            <span className="darken-flex-item">96% female</span>
        </p>
    </div>
    <h4 className="metric-subtitle">target audience:</h4>
    <p>young women and queer individuals who are passionate about self expression. this includes fashion, astrology, and makeup. experiencing a sense of magic and childlike wonder in their everyday.</p>
</section>)
}

export default MetricsSection;
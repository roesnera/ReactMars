import { useEffect, useState } from "react";


function MetricsSection() {

    const [metrics, updateMetrics] = useState([]);

    const getMetrics = async () => {
        const response =  await fetch("/api/metrics");
        const { followers, likes } = await response.json();
        updateMetrics([followers, likes]);
    }

    useEffect(() => {
        getMetrics();
    }, []);

    return (<section className="section metrics-section">
    <h2 className="section-title">metrics</h2>
    <div className="metric-box">
        <p><span>{metrics[0]}</span> tiktok followers</p>
        <p><span>{metrics[1]}</span> likes</p>
        <p>1.8k instagram followers</p>
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
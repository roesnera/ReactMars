

function PackagesSection() {

    return (<section className="section">
    <h2 className="section-title">packages and rates</h2>
    <div className="grid-container packages-container">
        <div className="package-item"><h4>videos</h4></div>
        <div className="package-item"><h4>photos</h4></div>
        <div className="package-item packages-right-col">
            <div className="package-item"><h4>extra</h4>
            </div>
            <div className="package-item package-right-col-small">
                <p>usage rights +30%</p>
                <p>raw content $50</p>
            </div>
        </div>
        <div className="package-item">
            <p>1 video - $150</p>
            <p>3 videos - $300</p>
            <p>5 videos - $550</p>
            <br/>
            <p>*  1 revision included</p>
        </div>
        <div className="package-item">
            <p>1 photo - $50</p>
            <p>3 photos - $100</p>
            <p>10 photos - $200</p>
        </div>
        <div className="package-item packages-right-col">
            <div className="package-item">
                <h4>test</h4>
            </div>
            <div className="package-item">
                <p>4 videos</p>
                <p>(4 hooks: 1 body, 1 cta)</p>
                <p>*starting at $250</p>
        </div>
        </div>
    </div>
</section>)
}

export default PackagesSection;
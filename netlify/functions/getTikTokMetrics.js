import puppeteer from "puppeteer";

const getTikTokMetrics = async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: null
    });

    const page = await browser.newPage();

    await page.goto("https://www.tiktok.com/@mariahthemystic",
    {waitUntil: "domcontentloaded"});

    const metrics = await page.evaluate(() => {
        const metricData = []
        // const following = document.querySelector("#main-content-others_homepage > div > div.tiktok-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2.enm41492 > h3 > div:nth-child(1) > strong");
        const metricHTML = document.querySelectorAll("#main-content-others_homepage .tiktok-1kd69nj-DivNumber");
        // const followingNumber = following.childNodes[0].innerText;
        for(const element of metricHTML) {
            const number = element.childNodes[0].innerText;
            metricData.push(number);
        }

        return metricData;
    });
    
    console.log(metrics);

    await browser.close();

    return metrics;
}

// getTikTokMetrics();

export default getTikTokMetrics;
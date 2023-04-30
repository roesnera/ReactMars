import Phone from "./Phone";
import "./iphone.css";

function VideoSection() {

    const urls= [
        "https://www.tiktok.com/@mariahthemystic/video/7224959282142367022?_r=1&_t=8box3zOQyKI",
        "https://www.tiktok.com/@mariahthemystic/video/7220554105456971050?_d=secCgYIASAHKAESPgo8vvqFPCXt%2FTR228JgAF5rbT04pFlOzYy7oNCRbviQBlYnyhz4z12i9Rmt6Q1dE3xWgu%2F10NdXaUINO9AtGgA%3D&_r=1&checksum=40215ff17d73ec18a9383f9bd64677cbb419f267be9805c6fcf95f7946b7be8a&preview_pb=0&sec_user_id=MS4wLjABAAAAS7RL9zALxjO0bHO8YSlbffp6LqC-RPn3AlKehPKDfx3qyVHfdjSG3KI_CEsm4hm7&share_app_id=1233&share_item_id=7220554105456971050&share_link_id=FBA1D625-87E9-4327-A88C-B6B1979B1314&sharer_language=en&source=h5_m&timestamp=1682525603&tt_from=copy&u_code=dhd92598c3929k&ug_btm=b8727%2Cb2878&user_id=6937784711738377221&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
        "https://www.tiktok.com/@mariahthemystic/video/7216410379809934638?_r=1&_t=8box9GnGhLO",
        "https://www.tiktok.com/@mariahthemystic/video/7223837953926319406?_r=1&_t=8box5TawS4p",
        "https://www.tiktok.com/@mariahthemystic/video/7201582081565084970?_d=secCgYIASAHKAESPgo8bRLM%2Bnp%2FDG8jriDBNjK%2FCMzBwvNLiJV6wLpHPiJG4iyuUzifLHoe2OuJlZAvYiEO0neMgUdb1X%2FCL5CkGgA%3D&_r=1&checksum=d7393e92ff4377c1b496b8bd47fce6888c38e88a04e16d6e6db314eb659c1ad0&preview_pb=0&sec_user_id=MS4wLjABAAAAS7RL9zALxjO0bHO8YSlbffp6LqC-RPn3AlKehPKDfx3qyVHfdjSG3KI_CEsm4hm7&share_app_id=1233&share_item_id=7201582081565084970&share_link_id=86D01F3A-A53B-4E29-ADF3-1D64D121D044&sharer_language=en&source=h5_m&timestamp=1682525955&tt_from=copy&u_code=dhd92598c3929k&ug_btm=b8727%2Cb2878&user_id=6937784711738377221&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
        "https://www.tiktok.com/@mariahthemystic/video/7216781520663645486?_r=1&_t=8box87gW2ak"
    ]

    const renderedPhones = urls.map((element, id) => {
        return <Phone key={id} id={id} link={element} />;
    })

    return (
    <section className="section">
        <h2 className="section-title">video</h2>
        <div className="flex-container video-grid">
            {renderedPhones}
        </div>
    </section>)
}

export default VideoSection;
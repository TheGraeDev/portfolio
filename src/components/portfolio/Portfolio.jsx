import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Unity Project</li>
                <li>Mobile App</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://p7.hiclipart.com/preview/524/532/32/unity-video-games-minecraft-handheld-devices-video-game-development-minecraft.jpg" alt="" />
                    <h3>Unity Project</h3>
                </div>
            </div>
        </div>
    )
}

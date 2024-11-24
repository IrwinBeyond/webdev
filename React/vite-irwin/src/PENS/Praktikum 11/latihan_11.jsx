import "./latihan_11.css"

function Latihan11() {
    return (
        <div className="container">
            <div className="Pict">
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-buy-now-image-block-01-ja-jp-20nov23?$1600px--t$" alt="PS5" />
            </div>
            <div className="desc">
                <p className="Title">Playstation 5</p>
                <p className="Subtitle">Latest Release</p>
                <p className="Body">Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio1, and an all-new generation of incredible PlayStation games.</p>
                <p className="Subtitle">VARIANT</p>
                    <div className="space">
                    <div className="grid">
                        <div>Digital</div>
                        <div>Disc</div>
                        <div>Slim</div>
                        <div>Pro</div>
                    </div>
                </div>
                <div className="button">
                    <button className="buy">BUY NOW</button>
                    <button className="wishlist">ADD TO WISHLIST</button>
                </div>
            </div>
        </div>
    );
}

export default Latihan11;
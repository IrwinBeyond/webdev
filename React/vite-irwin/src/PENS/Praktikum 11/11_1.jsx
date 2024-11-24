import "./11_1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function changeRed()
{
var img = document.getElementById("image");
img.src="https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CosmicRed-Hero-4?$Background_Large$";
}

function changeBlack()
{
var img = document.getElementById("image");
img.src="https://media.direct.playstation.com/is/image/sierialto/console-cover-and-dualsense-controller-midnight-black-hero-4?$Background_Large$";
}

function changeBlue()
{
var img = document.getElementById("image");
img.src="https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-StarlightBlue-Hero-4?$Background_Large$";
}

function Tugas11() {
    return (
        <div className="container">
            <div className="pict">
                <img id="image" src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-buy-now-image-block-01-ja-jp-20nov23?$1600px--t$" alt="PS5" />
            </div>
            <div className="desc">
                <p className="subtitle">CONSOLES</p>
                <p className="title">PLAYSTATION 5</p>
                <p className="body">Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio1, and an all-new generation of incredible PlayStation games.</p>
                <p className="choice">Color</p>
                <div className="color">
                    <button className="red" onClick={changeRed}><FontAwesomeIcon icon={faCheck} /></button>
                    <button className="black" onClick={changeBlack}><FontAwesomeIcon icon={faCheck} /></button>
                    <button className="blue" onClick={changeBlue}><FontAwesomeIcon icon={faCheck} /></button>
                </div>
                <p className="choice">Variant</p>
                <div className="variant">
                    <button>Slim</button>
                    <button>Pro</button>
                </div>
                <div className="price">
                    <p className="pricetag">$449.99</p>
                    <button className="cart">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Tugas11;

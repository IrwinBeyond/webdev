import './percobaan_12.css'

function Percobaan12() {
    return (
        <div className="Parentbox">
            <FotoProduk />
            <ProdukInfo isDiscount="coming" category="SIKIL" judul="Pinky Sweet" />
        </div>
    );
}

function FotoProduk(){
    return (
        <div className="Foto">
            <img src="https://underarmour.scene7.com/is/image/Underarmour/3027594-600_DEFAULT?rp=standard-30pad|pdpZoomDesktop&scl=0.50&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=850,850"/>
        </div>
    );
}

function ProdukInfo(props){
    const { isDiscount, category, judul } = props;

    const benefits = ["Anti luntur","Alas empuk","Mudah di bersihkan"]
    const listbenefits = benefits.map((itembenefits) =>
        <li>
            {itembenefits}
        </li>
);

    return (
    <div>
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{judul}</h1>
            <p className="Price">IDR 73.309.399</p>
            <CheckDiscount isDiscount={isDiscount}/>
            <p className="Info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            {listbenefits}
            <a onClick={(e) => Tambahcart(judul, e)} href="#">Add to Cart</a>
        </div>
    </div>
    );
}

function Tambahcart(e){
    return console.log("membeli produk ..." + e)
}

function CheckDiscount(props){
    const {isDiscount} = props;
    if(isDiscount == "yes"){
        return(
            <p>Diskon 50% off</p>
        );
    }
    else if(isDiscount == "coming"){
        return(
            <p>Akan ada diskon ...</p>
        );
    }
    else{
        return(
            <p>Belum ada diskon</p>
        );
    }
}


export default Percobaan12;

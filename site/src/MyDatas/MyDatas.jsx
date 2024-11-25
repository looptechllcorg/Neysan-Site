// MArketLogos
import marketLogo1 from "../assets/Logos/arazLogo.png"
import marketLogo2 from "../assets/Logos/abseronmarketLogo.png";
import marketLogo3 from "../assets/Logos/bazarStoreLogo.png";
import marketLogo4 from "../assets/Logos/bolmartLogo.png";
import marketLogo5 from "../assets/Logos/bravoLogo.png";
import marketLogo6 from "../assets/Logos/favoritLogo.png";
import marketLogo7 from "../assets/Logos/grantMartLogo.png";
import marketLogo8 from "../assets/Logos/happymarketLogo.png";
import marketLogo9 from "../assets/Logos/portBakuBazarLogo.png";
import marketLogo10 from "../assets/Logos/rahatLogo.png";
import marketLogo11 from "../assets/Logos/zireBioMarket.png";
import marketLogo12 from "../assets/Logos/grossMarketLogo.png";

export const marketLogoList = [marketLogo1, marketLogo2, marketLogo3, marketLogo4, marketLogo5, marketLogo6, marketLogo7, marketLogo8,marketLogo9,marketLogo10,marketLogo11,marketLogo12,marketLogo4,marketLogo7,marketLogo2,marketLogo10
]
// HomeSlider JAmBottles
import jamBottle1 from "../assets/image/JamBottle1.png"
import jamBottle2 from "../assets/image/JamBottle2.png"
import jamBottle3 from "../assets/image/JamBottle3.png"


export const homeSliderData =[
    {
        id:1,
        img: jamBottle1,
        name: "Ağ gilas mürəbbəsi",
        description: "Ağ gilas mürəbbəsi limon ilə 320 qr.",
       
    },
    {
        id:2,
        img: jamBottle1,
        name: "Ağ gilas mürəbbəsi",
        description: "Saftali mürəbbəsi limon ilə 320 qr.",
       
    },
    {
        id:3,
        img: jamBottle1,
        name: "Ağ gilas mürəbbəsi",
        description: "Qara Qaragat mürəbbəsi limon ilə 320 qr.",
       
    },
    {
        id:4,
        img: jamBottle1,
        name: "Ağ gilas mürəbbəsi",
        description: "Ağ gilas mürəbbəsi limon ilə 320 qr.",
       
    },
    {
        id:5,
        img: jamBottle1,
        name: "Ağ gilas mürəbbəsi",
        description: "Ağ gilas mürəbbəsi limon ilə 320 qr.",
       
    },
]

// HomeMedia PlayVideo
import videoSliderImgOne from "../assets/image/BgMedia1.png"
import videoSliderImgTwo from "../assets/image/homeVideoSliderBgImg.png"

export const homeVideoSliderSection = [
    {
        id: 1,
        bgImg: videoSliderImgOne,
        videoUrl: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
    },
    // {
    //     id: 2,
    //     bgImg: videoSliderImgTwo,
    //     videoUrl: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
    // },
    // {
    //     id: 3,
    //     bgImg: videoSliderImgOne,
    //     videoUrl: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
    // },
];

// Products
import productTomat from "../assets/image/productImage/productImage-Tomat.png"
import productAggilas from "../assets/image/productImage/productImage-AgGilas.png"
import productGavali from "../assets/image/productImage/productImage-Gavali.png"
import productMorug from "../assets/image/productImage/productImage-Morug.png"
import productQaragat from "../assets/image/productImage/productImage-Qaragat.png"
import productSaftali from "../assets/image/productImage/productImage-Saftali.png"
import productYarpaq from "../assets/image/productImage/productImage-Yarpaq.png"
import productZeytun from "../assets/image/productImage/productImage-Zeytun.png"

export const productsData = [
    {
        id:1,
        bgColor:"#BB1B23",
        image:productTomat,
        productName:"Pomidor Qurusu Zeytun yaginda",
        productWeight:"320qr",
        category: "Vegetable",
    },
    {
        id:2,
        bgColor:"#C99500",
        image:productAggilas,
        productName:"Ag Gilas murebbesi Limon Ile",
        productWeight:"320qr",
        category: "Fruit",
    },
    {
        id:3,
        bgColor:"#312D45",
        image:productQaragat,
        productName:"Qara Qaragat murebbesi",
        productWeight:"320qr",
        category: "Fruit",
    },
    {
        id:4,
        bgColor:"#AA7BAE",
        image:productGavali,
        productName:"Gavali Cemi",
        productWeight:"320qr",
        category: "Fruit",

    },
    {
        id:5,
        bgColor:"#6A232C",
        image:productMorug,
        productName:"Morug murebbesi",
        productWeight:"320qr",
        category: "Fruit",
    },
    {
        id:6,
        bgColor:"#56722F",
        image:productZeytun,
        productName:"Zeytun murebbesi Limon ile",
        productWeight:"320qr",
        category: "Vegetable",
    },
    {
        id:7,
        bgColor:"#A5E460",
        image:productYarpaq,
        productName:"Uzum Yarpagi",
        productWeight:"320qr",
        category: "Vegetable",
    },
    {
        id:8,
        bgColor:"#C8311F",
        image:productSaftali,
        productName:"Saftali Murebbesi",
        productWeight:"320qr",
        category: "Fruit",
    },
    {
        id:9,
        bgColor:"#D9C4E4",
        image:productGavali,
        productName:"Zeferan",
        productWeight:"320qr",
        category: "Vegetable",
    },
]
export const categories = ["All", "Fruit", "Vegetable"];

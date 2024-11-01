 import Phone from '../Phone/Phone';
import './Products.css'

const Products = () => {
    const phones =  [
        {
            "lik": 'https://www.gsmarena.com/apple_iphone_14-11861.php',
            "brand": "Apple",
            "model": "iPhone 14",
            "releaseYear": 2022,
            "price": 999,
            "storageOptions": ["128GB", "256GB", "512GB"],
            "battery": "3279mAh",
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg',
            "camera": {
                "rear": "12MP + 12MP",
                "front": "12MP",
            },
            "os": "iOS 16",
            "description": "The iPhone 14 features a sleek design, A15 Bionic chip, and advanced dual-camera system for stunning photos and videos. It offers 5G connectivity and improved battery life."
        },
        {
            "lik": 'https://www.gsmarena.com/samsung_galaxy_s22_5g-11253.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg',
            "brand": "Samsung",
            "model": "Galaxy S22",
            "releaseYear": 2022,
            "price": 799,
            "storageOptions": ["128GB", "256GB"],
            "battery": "3700mAh",
            "camera": {
                "rear": "50MP + 12MP + 10MP",
                "front": "10MP"
            },
            "os": "Android 12",
            "description": "The Galaxy S22 boasts a vibrant display and a powerful camera setup. With its Snapdragon 8 Gen 1 processor, it delivers exceptional performance and gaming capabilities."
        },
        {
            "lik": 'https://www.gsmarena.com/google_pixel_6-11037.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg',
            "brand": "Google",
            "model": "Pixel 6",
            "releaseYear": 2021,
            "price": 599,
            "storageOptions": ["128GB", "256GB"],
            "battery": "4614mAh",
            "camera": {
                "rear": "50MP + 12MP",
                "front": "8MP"
            },
            "os": "Android 12",
            "description": "The Pixel 6 features Google's custom Tensor chip, providing smooth performance and incredible AI-based photography. Its unique design stands out with a striking color palette."
        },
        {
            "lik": 'https://www.gsmarena.com/oneplus_9_pro-10806.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg',
            "brand": "OnePlus",
            "model": "9 Pro",
            "releaseYear": 2021,
            "price": 969,
            "storageOptions": ["128GB", "256GB"],
            "battery": "4500mAh",
            "camera": {
                "rear": "48MP + 50MP + 8MP + 2MP",
                "front": "16MP"
            },
            "os": "Android 11",
            "description": "The OnePlus 9 Pro features a Fluid AMOLED display and Hasselblad partnership for exceptional photography. Fast charging and smooth performance make it a premium choice."
        },
        {
            "lik": 'https://www.gsmarena.com/xiaomi_mi_11-10656.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg',
            "brand": "Xiaomi",
            "model": "Mi 11",
            "releaseYear": 2021,
            "price": 749,
            "storageOptions": ["128GB", "256GB"],
            "battery": "4600mAh",
            "camera": {
                "rear": "108MP + 13MP + 5MP",
                "front": "20MP"
            },
            "os": "Android 11",
            "description": "The Mi 11 features a stunning 6.81-inch AMOLED display and a powerful Snapdragon 888 processor. It excels in photography with a 108MP camera and offers fast charging capabilities."
        },
        {
            "lik": 'https://www.gsmarena.com/sony_xperia_1_iii-10712.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg',
            "brand": "Sony",
            "model": "Xperia 1 III",
            "releaseYear": 2021,
            "price": 1299,
            "storageOptions": ["256GB", "512GB"],
            "battery": "4500mAh",
            "camera": {
                "rear": "12MP + 12MP + 12MP",
                "front": "8MP"
            },
            "os": "Android 11",
            "description": "The Xperia 1 III is designed for multimedia enthusiasts, featuring a 4K HDR OLED display and advanced camera features, including real-time eye autofocus for stunning portraits."
        },
        {
            "lik": 'https://www.gsmarena.com/huawei_p50_pro-11029.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p50-pro.jpg',
            "brand": "Huawei",
            "model": "P50 Pro",
            "releaseYear": 2021,
            "price": 999,
            "storageOptions": ["256GB", "512GB"],
            "battery": "4360mAh",
            "camera": {
                "rear": "50MP + 64MP + 13MP + 40MP",
                "front": "13MP"
            },
            "os": "HarmonyOS",
            "description": "The Huawei P50 Pro features a premium design and a versatile camera system that excels in low light. Its HarmonyOS brings a unique user experience."
        },
        {
            "lik": 'https://www.gsmarena.com/oppo_find_x3_pro-10627.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x3-pro.jpg',
            "brand": "Oppo",
            "model": "Find X3 Pro",
            "releaseYear": 2021,
            "price": 1149,
            "storageOptions": ["256GB"],
            "battery": "4500mAh",
            "camera": {
                "rear": "50MP + 50MP + 13MP + 3MP",
                "front": "32MP"
            },
            "os": "Android 11",
            "description": "The Find X3 Pro offers a stunning QHD+ display and advanced camera capabilities, including macro photography. Its unique design and performance make it a flagship device."
        },
        {
            "lik": 'https://www.gsmarena.com/nokia_g50-11077.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/nokia-g50.jpg',
            "brand": "Nokia",
            "model": "G50",
            "releaseYear": 2021,
            "price": 299,
            "storageOptions": ["64GB", "128GB"],
            "battery": "5000mAh",
            "camera": {
                "rear": "48MP + 5MP + 2MP",
                "front": "8MP"
            },
            "os": "Android 11",
            "description": "The Nokia G50 is a budget-friendly phone with 5G capability, a large battery, and a solid camera setup, making it a great choice for everyday use."
        },
        {
            "lik": 'https://www.gsmarena.com/realme_gt5-12528.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/realme-gt-5g.jpg',
            "brand": "Realme",
            "model": "GT",
            "releaseYear": 2021,
            "price": 499,
            "storageOptions": ["128GB", "256GB"],
            "battery": "4500mAh",
            "camera": {
                "rear": "64MP + 13MP + 3MP",
                "front": "16MP"
            },
            "os": "Android 11",
            "description": "The Realme GT offers flagship features at an affordable price, including a Snapdragon 888 processor, vibrant display, and strong camera performance."
        },
        {
            "lik": 'https://www.gsmarena.com/apple_iphone_14-11861.php',
            "brand": "Apple",
            "model": "iPhone 14",
            "releaseYear": 2022,
            "price": 999,
            "storageOptions": ["128GB", "256GB", "512GB"],
            "battery": "3279mAh",
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg',
            "camera": {
                "rear": "12MP + 12MP",
                "front": "12MP",
            },
            "os": "iOS 16",
            "description": "The iPhone 14 features a sleek design, A15 Bionic chip, and advanced dual-camera system for stunning photos and videos. It offers 5G connectivity and improved battery life."
        },
        {
            "lik": 'https://www.gsmarena.com/samsung_galaxy_s22_5g-11253.php',
            "img": 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg',
            "brand": "Samsung",
            "model": "Galaxy S22",
            "releaseYear": 2022,
            "price": 799,
            "storageOptions": ["128GB", "256GB"],
            "battery": "3700mAh",
            "camera": {
                "rear": "50MP + 12MP + 10MP",
                "front": "10MP"
            },
            "os": "Android 12",
            "description": "The Galaxy S22 boasts a vibrant display and a powerful camera setup. With its Snapdragon 8 Gen 1 processor, it delivers exceptional performance and gaming capabilities."
        }
        
    ]
    
    return (
        <div >
             
           <div className='girdDisP'>
           {
                phones.map(phone => <Phone key={phone.id} phone={phone}  ></Phone>)
            }
           </div>
        </div>
    );
};

export default Products;
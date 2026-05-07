import fresh from '../assets/images/categories/fresh.png';
import dried from '../assets/images/categories/dried.png';
import live from '../assets/images/categories/live.png';
import aroma from '../assets/images/categories/aroma.png';
import fresheners from '../assets/images/categories/fresheners.png';

import snowfall from '../assets/images/products/snowfall.png'
import dawn from '../assets/images/products/dwansdelight.png'
import pink from '../assets/images/products/pink.png';
import rustic from '../assets/images/products/rustic.png'
import autumn from '../assets/images/products/autumn.png'
import rosy from '../assets/images/products/rosy.png'
import serenity from '../assets/images/products/serenity.png'
import blue from '../assets/images/products/blue.png'
import mystical from '../assets/images/products/mystical.png'
import blazing from '../assets/images/products/blazing.png'

type categoryType = {
    img: string;
    title: string
}

export const categories: categoryType[] = [
    { img: fresh, title: "Fresh flowers" },
    { img: dried, title: "Dried Flowers" },
    { img: live, title: "Live Flowers" },
    { img: aroma, title: "Aroma Candles" },
    { img: fresheners, title: "Fresheners" },
]

export type productType = {
    id: string;
    img: string;
    title: string;
    price: number;
    description: string;
}

export const products: productType[] = [
    {
        id:"1",
        img: snowfall,
        title: "Snowfall",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"2",
        img: dawn,
        title: "Dawn's Delight",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"3",
        img: pink,
        title: "Pink Elegance",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"4",
        img: rustic,
        title: "Rustic Charm",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"5",
        img: autumn,
        title: "Autumn Symphony",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"6",
        img: rosy,
        title: "Rosy Delight",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"7",
        img: serenity,
        title: "Serenity",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"8",
        img: blue,
        title: "Blue Harmony",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"9",
        img: mystical,
        title: "Mystical Majesty",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
    {
        id:"10",
        img: blazing,
        title: "Blazing Blossoms",
        price: 70,
        description: "Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
    },
]


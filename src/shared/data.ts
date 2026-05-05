import fresh from '../assets/images/categories/fresh.png';
import dried from '../assets/images/categories/dried.png';
import live from '../assets/images/categories/live.png';
import aroma from '../assets/images/categories/aroma.png';
import fresheners from '../assets/images/categories/fresheners.png';

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
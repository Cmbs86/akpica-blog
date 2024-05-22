import CardHero from "./CardHero.jsx";

import bunReact from "@assets/bun-react.webp";
import tailwindImg from "@assets/tailwind.webp";
import astroImg from "@assets/astro.webp";

import akiko from "../../../../server/uploads/akiko.jpg";
import carlos from "../../../../server/uploads/carlos.jpg";
import pila from "../../../../server/uploads/Pila.jpg";

const cardData = [
    {
        bgImg: bunReact,
        tagName: "REACT",
        title: "Getting Started with Bun for React Developers",
        author: "Carlos",
        avatar: carlos,
        date: "May 23, 2024",
    },
    {
        bgImg: tailwindImg,
        tagName: "TAILWIND",
        title: "Build a Blog App Project Using Tailwind CSS",
        author: "Akiko",
        avatar: akiko,
        date: "May 13, 2024",
    },
    {
        bgImg: astroImg,
        tagName: "ASTRO",
        title: "Building a simple but scalable blog using Astro",
        author: "Pila",
        avatar: pila,
        date: "May 16, 2024",
    },
];

const CardsHero = () => {
    return (
        <div className="relative w-full -mt-20 z-20">
            <div className="max-w-[1200px] mx-auto flex justify-center items-center flex-wrap gap-6">
                {cardData.map((card, index) => (
                    <CardHero
                        key={index}
                        bgImg={card.bgImg}
                        tagName={card.tagName}
                        title={card.title}
                        author={card.author}
                        avatar={card.avatar}
                        date={card.date}
                        colorTag="bg-akpica-tomato"
                        sizeTag="text-sm"
                        width="w-96"
                    />
                ))}
            </div>
        </div>
    );
};

export default CardsHero;

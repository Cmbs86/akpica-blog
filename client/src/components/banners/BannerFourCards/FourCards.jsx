/* eslint-disable react/prop-types */
import AuthorDate from "@components/miniComponents/AuthorDate.jsx";
import CardTag from "../../miniComponents/CardTag.jsx";
//icons
import { CiCalendarDate } from "react-icons/ci";

const FourCards = ({ bgImage, category, title, author, avatar, date }) => {
    return (
        <>
            <article className="h-[500px] cursor-pointer group relative overflow-hidden w-1/4">
                <img
                    src={bgImage}
                    alt=""
                    className="group-hover:scale-110 transition-transform transform duration-300"
                />

                <div className="flex flex-col h-full w-full absolute top-[75%] group-hover:top-[65%] gap-4 text-akpica-white p-4 bg-akpica-black/70 to-akpica-white/5 group-hover:bg-akpica-black/90 transition-all">
                    <CardTag
                        tag={category}
                        color="bg-akpica-pastel text-akpica-black"
                        size="text-xs"
                    />

                    <div className="">
                        <h1 className="text-2xl font-bold mb-2 font-akpica-heading leading-6 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-akpica-carlo">
                            {title}
                        </h1>

                        <AuthorDate
                            avatar={avatar}
                            author={author}
                            date={date}
                        />

                        <button className="text-white mt-20 px-3 py-1 bg-akpica-carlo hover:bg-akpica-green group-hover:mt-4 transition-all delay-100 duration-200 ease-in-out">
                            See more
                        </button>
                    </div>
                </div>
            </article>
        </>
    );
};

export default FourCards;
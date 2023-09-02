/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefSingleCard = ({chef}) => {
    const [heart, setHeart] = useState(false);
    console.log(chef);

    const handleHeartClick = () => {
        setHeart(true);
        toast.success("Recipe added to favorites!");
    }

    return (
        <>
            <div
                className="bg-slate-200 my-4 p-10 w-1/2 mx-auto rounded-xl"
            >
                {/* child */}
                <h2 className="text-2xl font-semibold">{chef.recipe_name}</h2>
                <ul className="list-inside my-6 pl-10">
                    {chef?.ingredients.map((ingredient) => (
                        <li key={ingredient}> {ingredient}</li>
                    ))}
                </ul>
                <p>{chef.cooking_method}</p>

                <div className="flex justify-between gap-10 mt-5">
                    <p className="bg-amber-400 rounded-xl font-semibold px-3 py-2 text-lg text-white">Rating {chef.rating}</p>
                    <button onClick={handleHeartClick} disabled={heart}>
                        {heart === true ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="red"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ChefSingleCard;

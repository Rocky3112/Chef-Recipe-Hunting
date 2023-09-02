/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefSingleCard from "./ChefSingleCard";

const ChefDetails = () => {
  
  // console.log(heart);
  const chefDetails = useLoaderData();

  const { image_url, likes, name, experience, recipes } = chefDetails.recipes;
  return (
    <div>
      <div className="flex items-center my-10 gap-5">
        <img className=" w-96 rounded-lg" src={chefDetails.image_url} alt="" />
        <div className="py-10 px-20">
          <h2 className=" text-2xl font-semibold text-left">
            {chefDetails.name}
          </h2>
          <p className=" text-left py-3">{chefDetails.description}</p>
          <div className=" flex gap-4">
            <p className=" ">
              Likes :{" "}
              <span className=" bg-orange-500 rounded-lg text-white">
                {chefDetails.likes}
              </span>
            </p>
            <p>Recipes : {chefDetails.recipes_number}</p>
            <p>experience : {chefDetails.experience}</p>
          </div>
        </div>
      </div>

      <div className="grid text-left  ">
        {chefDetails.recipes.map((chef) => (
          <ChefSingleCard  key={chef.recipe_name} chef={chef} > </ChefSingleCard>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;

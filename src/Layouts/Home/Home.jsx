/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import backgroundImage from "../../../images/Oaks-Kitchen-and-Garden.jpg";
import "./Home.css";
import FoodReview from "./FoodReview";
import FoodContactSection from "./FoodContactSection";
import LazyLoad from "react-lazy-load";
import BestItem from "./BestItem";

const Home = () => {
  const chefData = useLoaderData();
  // console.log(chefData);

  const styles = {
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      width:"100%"
    },
  };
  return (

    //banner
    <div className="my-16">
      <div className="hero h-96" style={styles.background}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to Chef Recipe House, your ultimate source for
              mouth-watering recipes from around the world.Browse our extensive
              collection of recipes, featuring everything from quick and easy
              meals to gourmet dishes to impress your family and friends.
            </p>
            <button className=" bg-amber-500 px-4 py-3 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="py-5">
        <BestItem></BestItem>
      </div>

      {/* for card display */}

      <div className="mx-5">
        <div className=" grid lg:grid-cols-3 gap-5 mt-16 ">
          {chefData.map((chef) => (
            <div className="grid-container transition-transform duration-300  hover:scale-110" key={chef.id}>
              <div className="rounded-lg w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <LazyLoad height={200} debounce={false} offsetVertical={700}>
                    <img className="w-100 h-52 rounded-lg" src={chef.image_url} />
                  </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className=" text-2xl font-semibold">{chef.name}</h2>
                  <h3>Experience {chef.experience}</h3>
                  <p className=" text-xl ">
                    <span className=" mr-4">Likes:{chef.likes}</span>{" "}
                    <span>Recipes:{chef.recipes_number}</span>
                  </p>
                  <div className="card-actions">
                    <Link to={`/chefdetails/${chef.id}`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded-full">
                        View Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5">
        <FoodReview></FoodReview>
      </div>
      <div className="mx-5">
        <FoodContactSection></FoodContactSection>
      </div>
    </div>
  );
};

export default Home;

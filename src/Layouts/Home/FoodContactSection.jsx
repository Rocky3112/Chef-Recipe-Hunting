import React from 'react';
import { Form } from 'react-router-dom';

const FoodContactSection = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  }

  return (
    <div className=" lg:flex my-28">
      <div className="left-side">
        <img className='rounded-xl ' style={{width: "650px"}} src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F640ef88a-e44f-11ed-aa3a-bb509d408018.jpg?crop=3666%2C2444%2C0%2C0" alt="Chef" />
      </div>
      <div className="">
        <h2 className='pb-3 text-2xl font-semibold'>Contact Us For Booking</h2>
        <Form onSubmit={handleSubmit} className='grid gap-3 px-5'>
          <label className=' text-lg font-semibold' htmlFor="name">Name:</label>
          <input className=' border border-2 w-96 py-2 px-2 rounded' type="text" id="name" name="name" placeholder='Name' required />

          <label className=' text-lg font-semibold' htmlFor="email">Email:</label>
          <input className=' border border-2 w-96 py-2 px-2 rounded' type="email" id="email" name="email" required />

          <label className=' text-lg font-semibold' htmlFor="message">Message:</label>
          <textarea className=' border border-2 w-96 h-20 py-2 px-2 rounded' id="message" name="message" rows="5" required></textarea>

          <button className=' text-white bg-amber-500 py-2 px-4 rounded-lg mt-3' type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default FoodContactSection;

/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
   return (

      <div>
         <Pdf targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='bg-slate-400 p-4 rounded-lg mt-10'>Download Pdf</button>}
      </Pdf>

      <div className=" text-left my-10 px-36">
        <div>
          <h2 className=" text-xl">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            Controlled Component: <br />
            Unlike the uncontrolled component, the input form element in the
            controlled component is handled by the component rather than the
            DOM. It takes its current value through props. The changes are
            notified through callbacks. <br />
            Uncontrolled component: <br />
            Similar to the traditional HTML form inputs, the uncontrolled
            component can be written using a ref to get form values from the
            DOM. Thus there is no need to write an event handler for every state
            update and the HTML elements maintain their own state that will be
            updated when the input value changes.
          </p>
        </div>
        <div className=" my-5">
          <h2 className=" text-xl">
            2. How to validate React props using PropTypes.
          </h2>
          <p>
            In React, PropTypes is a built-in library for validating the types
            of props passed to a component. It helps to catch bugs and improve
            code quality by ensuring that components receive the correct props.{" "}
            <br /> <br />
            Here is a step-by-step guide on how to validate React props using{" "}
            <br /> <br />
            1. PropTypes: Install PropTypes <br />
            2. Import PropTypes <br />
            3. Define propTypes <br />
            4. Run your code <br />
          </p>
        </div>
        <div>
          <h2 className=" text-xl">
            3. Tell us the difference between nodejs and express js.
          </h2>
          <p>
            Node.js: <br />
            Node.js is a runtime environment that allows you to run JavaScript
            code outside of a web browser. It uses the V8 JavaScript engine from
            Google Chrome to execute JavaScript code on the server-side. Node.js
            provides several built-in modules that allow you to perform various
            tasks such as file I/O, networking, and cryptography. Node.js is
            often used for building server-side applications, command-line
            tools, and desktop applications. <br />
            Express.js: <br /> Express.js is a web application framework built
            on top of Node.js. It provides a set of tools and features for
            building web applications, including routing, middleware, and
            templating. Express.js makes it easy to build web servers and
            RESTful APIs. Express.js is highly flexible and customizable, and it
            can be used with various front-end frameworks and libraries like
            React, Angular, and Vue.
          </p>
        </div>
        <div>
          <h2 className=" text-xl">
            4. What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            In React, a custom hook is a reusable function that encapsulates
            common stateful logic used across multiple components. It is a way
            to share logic between components without the need for inheritance
            or higher-order components. <br /> Custom hooks start with the word use
            to denote that they are React hooks, and they can use other built-in
            hooks like useState, useEffect, and useContext to manage state and
            side effects.
          </p>
        </div>
      </div>
      </div>
      
   );
};

export default Blog;
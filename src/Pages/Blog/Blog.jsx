import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-emerald-800 py-8 text-center'>Questions and Answers</h2>
            <div className='grid grid-cols-1 gap-4'>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100'>
            <p className='font-bold text-xl text-red-800'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p className='mt-3'><span className='text-green-700 font-bold text-xl'>Answer: </span> 
            <br />
            <span className='font-bold'>Access Token:</span> An access token is a credential that is issued by an authentication server upon successful authentication of a user or an application. It is used to access protected resources, such as APIs or specific functionalities within an application. 
            <br />
            <span className='font-bold'>Refresh Token:</span> A refresh token is a long-lived credential that is also issued by the authentication server during the authentication process. It is used to obtain a new access token after the previous one expires without requiring the user to re-authenticate. 
            <br />
            Access tokens and refresh tokens work together in an authentication flow. They typically work in: 
            <br /> 1. Authentication, 2. Token Issuance, 3. Access Token Usage, 4. Token Expiration, 5. Token Refresh, 6. Refresh Token Validation, 7. Token Refreshment, 8. Access Token Renewal.
            <br />
            We can store them on memory storage, local storage, web storage etc.
            </p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100'>
            <p className='font-bold text-xl text-red-800'>2. Compare SQL and NoSQL databases?</p>
            <p className='mt-3'><span className='text-green-700 font-bold text-xl'>Answer: </span>
            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. </li>
            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </li>
            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
            </p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100'>
            <p className='font-bold text-xl pb-1 text-red-800'>3. What is express js? What is Nest js?</p>
            <p className=''><span className='text-green-700 font-bold text-xl'>Answer: </span>
            <li><span className='font-bold'>Express js: </span>Express.js is a popular web application framework for Node.js. It is a minimal and flexible framework that provides a set of features and tools for building web applications and APIs. </li>
            <li><span className='font-bold'>Nest js: </span>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.</li>
            </p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100 mb-8'>
            <p className='font-bold text-xl pb-3 text-red-800'>4. What is MongoDB aggregate and how does it work?</p>
            <p className=''><span className='text-green-700 font-bold text-xl'>Answer: </span>In MongoDB, the aggregate function is a powerful feature that allows for advanced data processing and analysis. It provides a way to perform various data transformations, aggregations, and computations on the documents in a MongoDB collection. The aggregate function works by applying a series of pipeline stages to the input documents, producing a result based on the specified operations.</p>
          </div>
        </div>
      </div>
   

       
    );
};

export default Blog;
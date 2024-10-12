import React from 'react';
import './Learning.css'; // Link the CSS file

const Learning = () => {
  return (
    <div className="learning-container">
      <h2>Knowledge Acquired</h2>

      <div className="learning-topics">
        <div className="learning-topic">
          <h3>API Integration</h3>
          <p className="learning-description">
            API integration involves connecting different software applications through their Application Programming Interfaces (APIs). This process allows systems to communicate, share data, and leverage each other’s functionalities, enabling seamless interaction between services like weather data, payment gateways, and social media platforms.
          </p>
        </div>
        <div className="learning-topic">
          <h3>Image Processing: Pillow (PIL)</h3>
          <p className="learning-description">
            <b>Pillow</b> is a powerful library used to open, resize, crop, and manipulate image files in Python. It’s essential for tasks related to image handling in user interfaces and web applications, allowing developers to enhance images dynamically.
          </p>
        </div>
        <div className="learning-topic">
          <h3>Concurrency: Threading</h3>
          <p className="learning-description">
            <b>Threading</b> is a programming technique that enables multiple threads to run concurrently within a single program. This is particularly useful for tasks like file downloads and network requests, ensuring that the main application remains responsive while performing background operations.
          </p>
        </div>
        <div className="learning-topic">
          <h3>GUI Development: Tkinter</h3>
          <p className="learning-description">
            <b>Tkinter</b> is the standard GUI toolkit for Python, providing a robust way to create interactive user interfaces. It includes various widgets like buttons, text fields, and menus, allowing developers to build visually appealing applications quickly.
          </p>
        </div>
        <div className="learning-topic">
  <h3>REST API: Requests Library</h3>
  <p className="learning-description">
    <b>Requests</b> is a popular Python library used for making HTTP requests to REST APIs. It allows you to easily interact with RESTful services by sending various types of requests such as GET, POST, PUT, and DELETE. The library also simplifies the handling of responses, including parsing JSON data, handling authentication, and managing headers.
  </p>
</div>
        <div className="learning-topic">
          <h3>HTTP Requests: requests & aiohttp</h3>
          <p className="learning-description">
            <b>requests</b> is a popular library for making HTTP requests, enabling developers to interact with APIs and web services effortlessly. It simplifies the process of sending GET, POST, and other request types. On the other hand, <b>aiohttp</b> is designed for asynchronous HTTP requests, which are particularly useful when handling multiple requests concurrently without blocking the application.
          </p>
        </div>
        <div className="learning-topic">
          <h3>Asynchronous Programming: asyncio</h3>
          <p className="learning-description">
            <b>asyncio</b> is a library that enables asynchronous programming in Python, allowing for concurrent execution of I/O-bound tasks. This means you can perform multiple operations, such as API calls or file downloads, without freezing the user interface or other processes.
          </p>
        </div>
        <div className="learning-topic">
          <h3>Rate Limiting: AsyncLimiter</h3>
          <p className="learning-description">
            <b>AsyncLimiter</b> is a tool designed to help manage the rate of API requests. It ensures that your application adheres to API rate limits, preventing excessive requests that could lead to throttling or denial of service from the API provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;

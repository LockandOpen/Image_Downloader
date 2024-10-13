import React from 'react';
import '../App.css'; // Ensure the CSS file is linked

const Learning = () => {
  return (
    <div className="learning-section">
      <h2 className="learning-heading">Knowledge Acquired</h2>

      <div className="learning-grid">
        <div className="learning-card">
          <h3 className="learning-title">API Integration</h3>
          <p className="learning-text">
            API integration involves connecting different software applications through their Application Programming Interfaces (APIs). This process allows systems to communicate, share data, and leverage each other’s functionalities, enabling seamless interaction between services like weather data, payment gateways, and social media platforms.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">Image Processing: Pillow (PIL)</h3>
          <p className="learning-text">
            <b>Pillow</b> is a powerful library used to open, resize, crop, and manipulate image files in Python. It’s essential for tasks related to image handling in user interfaces and web applications, allowing developers to enhance images dynamically.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">Concurrency: Threading</h3>
          <p className="learning-text">
            <b>Threading</b> is a programming technique that enables multiple threads to run concurrently within a single program. This is particularly useful for tasks like file downloads and network requests, ensuring that the main application remains responsive while performing background operations.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">GUI Development: Tkinter</h3>
          <p className="learning-text">
            <b>Tkinter</b> is the standard GUI toolkit for Python, providing a robust way to create interactive user interfaces. It includes various widgets like buttons, text fields, and menus, allowing developers to build visually appealing applications quickly.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">REST API: Requests Library</h3>
          <p className="learning-text">
            <b>Requests</b> is a popular Python library used for making HTTP requests to REST APIs. It allows you to easily interact with RESTful services by sending various types of requests such as GET, POST, PUT, and DELETE.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">HTTP Requests: requests & aiohttp</h3>
          <p className="learning-text">
            <b>requests</b> is a popular library for making HTTP requests, enabling developers to interact with APIs and web services effortlessly. <b>aiohttp</b> is designed for asynchronous HTTP requests, ideal for handling multiple requests concurrently without blocking the application.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">Asynchronous Programming: asyncio</h3>
          <p className="learning-text">
            <b>asyncio</b> is a library that enables asynchronous programming in Python, allowing for concurrent execution of I/O-bound tasks, like API calls or file downloads, without freezing the user interface or other processes.
          </p>
        </div>
        <div className="learning-card">
          <h3 className="learning-title">Rate Limiting: AsyncLimiter</h3>
          <p className="learning-text">
            <b>AsyncLimiter</b> is a tool designed to help manage the rate of API requests, ensuring that your application adheres to API rate limits to avoid throttling or denial of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;

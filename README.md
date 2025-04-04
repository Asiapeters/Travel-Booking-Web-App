# Travlr Getaways - Travel Booking Web App
MongoDB, Express, Angular, Node.js

## Project Overview
Travlr Getaways is a full-stack travel booking web application that enables customers to search, book trips, and manage their itineraries. The platform features both customer-facing and admin-facing functionalities, offering a seamless experience for users to explore and manage their travel plans.

This project was developed as part of the CS-465 Full Stack Development course at Southern New Hampshire University, showcasing my skills in full-stack development using the MEAN stack (MongoDB, Express, Angular, Node.js).

## Features
- Customer Portal: Users can search for travel destinations, browse available trips, and book their getaways directly through the platform.
- Admin Portal: Administrators can manage itineraries, update trip details, and oversee customer bookings.
- Secure Login & Authentication: Implemented JWT-based authentication to ensure secure access to both customer and admin portals.
- Responsive UI: Built with Angular to provide a dynamic, fast, and mobile-friendly experience for users on all devices.

## Technologies Used
- Frontend: Angular (for building dynamic and responsive SPAs)
- Backend: Node.js and Express (for building RESTful APIs)
- Database: MongoDB (NoSQL database for flexible and scalable data storage)
- Authentication: JSON Web Tokens (JWT) for secure user authentication and role-based access control

## Architecture
- The application utilizes a hybrid architecture combining server-side rendering for the admin portal with an Angular-based single-page application (SPA) for the customer-facing features.
- The backend communicates with a MongoDB database, allowing for dynamic data handling and scalability. The APIs, designed with Express, provide secure, efficient data flow between the client and server.

## Key Features Implemented
- User Authentication: Secure login and registration system with JWT tokens for both customers and administrators.
- RESTful APIs: Developed to handle data transactions like creating, updating, and deleting itineraries, as well as booking and managing trips.
- Dynamic Itinerary Management: Customers can search, book, and track trips while admins can manage trip details, booking records, and customer data.
- Responsive Design: Designed with mobile-first principles, ensuring an optimized experience across all devices.

## Testing
- Comprehensive testing of all API endpoints, including CRUD operations (GET, POST, PUT, DELETE), ensuring functionality and data integrity.
- Security measures were implemented, such as JWT authentication, and role-based access control for protected routes.

# Reflection
This project significantly enhanced my full-stack development skills, particularly with Angular, Express, MongoDB, and Node.js. Through the course of building this application, I gained hands-on experience in designing scalable web apps, optimizing user interactions, and ensuring secure, efficient communication between the front-end and back-end. These skills are invaluable in today’s job market, where full-stack developers are in high demand.
=======
# cs465-fullstack-2025 
CS-465 Full Stack Development with MEAN
## Architecture
I used various front-end development methodologies in my full-stack project, such as Express-rendered HTML, JavaScript, and an Angular-based single-page application (SPA). Express with Handlebars templating enabled server-side rendering, which means pages were dynamically produced on the backend before being transmitted to the client. In comparison, the Angular-based SPA offered a more engaging experience by rendering views directly in the browser and dynamically updating content without needing full-page reloads. The SPA method resulted in a more seamless user experience, lower server load, and enhanced performance, but with a longer initial load time. 
The backend used a NoSQL MongoDB database due to its ability to handle unstructured data, scalability, and interface simplicity with JavaScript-based technologies such as Node.js and Express. Unlike relational databases, MongoDB stores data in JSON-like documents, allowing for more dynamic schema modifications, which are especially useful for ever-changing applications. 
## Functionality
JSON differs from JavaScript because it is a lightweight data format communicating data between a client and a server. At the same time, JavaScript is a computer language used in web applications to provide logic and interactivity. JSON connects the front and back end by allowing structured data to be transmitted seamlessly, making it a critical component of API communication.
I refactored code to increase functionality and performance throughout the stack development process. For example, I streamlined API calls to avoid duplicate data gathering and used Angular's reusable UI components to simplify the user experience. Reusable components, such as modular form inputs and navigation elements, improve the application's maintainability and consistency by minimizing code duplication and simplifying modifications. 
## Testing
Testing API endpoints was critical to guarantee the consistency of request and retrieval procedures. GET queries were tested to ensure data extraction from the MongoDB database, while POST, PUT, and DELETE requests were verified to ensure successful data creation, updates, and deletions. Security complicates testing since authentication layers require effective token handling and role-based access controls to validate protected endpoints. Understanding API methods, secure authentication techniques, and endpoint validation were critical to maintaining a functional and secure full-stack application. 
## Reflection
This course has helped my professional development by providing critical full-stack development abilities. I've learned to use front-end frameworks like Angular, backend technologies like Express and MongoDB, and integrate APIs. The experience of developing, testing, and optimizing a full-stack application has improved my problem-solving skills and expanded my understanding of scalable web development. These abilities make me a stronger contender in the job market because they correspond to industry demands for developers who can adequately manage client- and server-side development. 

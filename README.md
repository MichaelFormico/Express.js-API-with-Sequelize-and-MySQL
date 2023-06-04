# Express.js API with Sequelize and MySQL


https://github.com/MichaelFormico/Homework-13/assets/120405075/1fd05564-a167-42b9-addc-e360268c19a0

This is a functional Express.js API that utilizes Sequelize as the ORM (Object-Relational Mapping) tool for connecting to a MySQL database. It provides endpoints for managing categories, products, and tags.

## Features

- Connects to a MySQL database using Sequelize
- Supports CRUD (Create, Read, Update, Delete) operations for categories, products, and tags
- Provides formatted JSON responses for GET requests
- Uses environment variables for configuration

## Prerequisites 

Before running the project, ensure you have the following installed:

- Node.js (version XX or higher)
- MySQL server (version XX or higher)

## API Endpoints
GET /categories: Retrieves all categories.

GET /categories/:id: Retrieves a specific category by ID.

POST /categories: Creates a new category.

PUT /categories/:id: Updates a specific category by ID.

DELETE /categories/:id: Deletes a specific category by ID.

GET /products: Retrieves all products.

GET /products/:id: Retrieves a specific product by ID.

POST /products: Creates a new product.

PUT /products/:id: Updates a specific product by ID.

DELETE /products/:id: Deletes a specific product by ID.

GET /tags: Retrieves all tags.

GET /tags/:id: Retrieves a specific tag by ID.

POST /tags: Creates a new tag.

PUT /tags/:id: Updates a specific tag by ID.

DELETE /tags/:id: Deletes a specific tag by ID.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.





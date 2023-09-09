# Cannabis API
A simple RESTful API to manage cannabis products. This API is built using Node.js and Express, and it uses an in-memory storage to manage the products.
## Getting Started
### Prerequisites
- Node.js (v18.15.0 or later)
- Nodemon (Optional: For development)
### Installation
1. Clone this repository:
`git clone https://github.com/yourusername/cannabis-api.git`
2. Navigate to the project directory:
`cd cannabis-api`
3. Install the required packages:
`npm install`
4. (Optional) If you haven't installed Nodemon globally:
`npm install -g nodemon`
5. Create a `.env` file in the root directory and set the PORT (if you want it different from the default 5000):
`PORT=5000`
### Running the Server
To start the server:
`npm start`

If you've installed Nodemon:
`nodemon app.js`

### API Endpoints
#### Products
GET /api/products: Retrieve a list of all products.

GET /api/products/:id: Retrieve a specific product by its ID.

POST /api/products: Add a new product. The body should contain the product details in JSON format.

PUT /api/products/:id: Update a specific product by its ID.

DELETE /api/products/:id: Delete a specific product by its ID.

### Built With
- Node.js
- Express
### Author
*José Vladimir Amador Miranda*
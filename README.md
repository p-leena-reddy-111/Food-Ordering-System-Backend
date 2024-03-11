
# Backend for Food Ordering System

This is a backend for Food ordering system that allows users to place orders and manage them. The backend uses Node.js and Express.js for routing, and MongoDB as the database, jsonwebtoken for authentication.



## API Reference


```http
```

|HTTP Method| Endpoint    | Authentication    |Description|
| :-------- | :------- | :------------------------- |:----------|
| `POST` | `/users/register` |  |  Creates a new user. |
| `POST` | `/users/login` |  |  Logs in a user.          |
| `GET` | `/users/:id` | VerifyUser | Gets the current user's profile.          |
| `PUT` | `/users/:id` |	VerifyUser  |  Edits the current user's profile.     |
| `DELETE` | `/users/:id` |VerifyUser | Deletes the current user's account.. |
| `POST` | `/foods/` | VerifyAdmin | Creates a new food item. Only accessible by an admin         |
| `PUT` | `/foods/:id` | 	VerifyAdmin | Edits a food item by ID. Only accessible by an admin.  |
| `DELETE`| `/foods/:id` | 	VerifyAdmin |  	Deletes a food item by ID. Only accessible by an admin  |
| `GET` | `/foods/:id` |  |  	Gets a food item by ID.    |
| `GET` | `/foods/:id` |  |  	Gets all food items.  |
| `POST` | `/restaurants/` | VerifyAdmin | Creates a new restaurant. Only accessible by an admin.|
| `PUT` | `/restaurants/:id` | 	VerifyAdmin	 |	Edits a restaurant by ID. Only accessible by an admin     |
| `DELETE` | `/restaurants/:id` | VerifyAdmin |Deletes a restaurant by ID. Only accessible by an admin.  |
| `GET` | `/restaurants/:id` |  | 	Gets a restaurant by ID. |
| `GET` | `/restaurants/menu/:id` | | Gets a restaurant's menu by restaurant ID. |
| `POST` | `/menus/` | VerifyAdmin |  Creates a new menu for a restaurant. Only accessible by an admin. To create a menu, you must provide the unique identifier of the restaurant in the request body. |
| `PUT` | `/menus/:id` | VerifyAdmin | Edits a menu by ID. Only accessible by an admin.|
| `POST` | `/cart/addToCart/:id` | VerifyUser | Adds a new food item to the user's cart.  |
| `PUT` |`/cart/modifyCart/:cartId` | 	VerifyUser | Edits a food item in the user's cart by cart ID.  |
| `GET` | `/cart/getCart/:cartId` | VerifyUser | 	Gets all food items in the user's cart by user ID.   |
| `POST	` | `/order/` | VerifyUser |  Places a new order for the user's cart.|
| `GET` | `/order/:orderId` | VerifyUser |  Gets an order by order ID. |
| `PUT` |`/order/:orderId` | VerifyAdmin| Edits an order by order ID. Only accessible by an admin. |
| `DELETE` | `/order/:orderId` | VerifyUser | Cancels an order by order ID. |



## Tech Stack

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Authentication:**  JSON Web Token (JWT)



# Mini-Shopping-Cart
TASK - Build a small e-commerce cart simulation in React.

## Description
This app is a small e-commerce frontend called "Doomsday Supply Shop". I have hard coded the shop items and created a basic shopping cart functionality based on adding specific amounts of the items up to a stock limit to the basket. Then within the basket being able to change the amounts of each product and also remove the item from the basket entirely. There is a sub total of each of the items costs and then a total cost. The buy now button triggers an alert to say the items have been purchased and resets the app. The basket contents are saved in local storage and upon purchase completion the local storage is wiped.

## Running the App
1. Navigate to the GitHub URL [https://github.com/IBrazyI/Mini-Shopping-Cart]
2. Click the green "Code" button and clone/download the code in your preferred way ("Download Zip" for this example.)
![alt text](/readmeImages/image.png)

3. Open the file in your desired IDE ("VS code" for this example.) and open a new terminal.
![alt text](/readmeImages/image-1.png)

4. Within the terminal type "cd Mini-Shopping-Cart-main" then "cd my-app" to navigate to the app. Then type "npm i" to install the dependencies. (If you don't have npm installed on your system, please follow the guidelines here https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
![alt text](/readmeImages/image-2.png)

5. After the dependency installation is complete type "npm run dev" into your terminal to run a local version of the code.
![alt text](/readmeImages/image-3.png)

6. CTRL+ left click the " http://localhost:5174/" url to open the app!
![alt text](/readmeImages/image-4.png)

## Testing
Within the "utils" folder the first unit test has been set up to make sure that the total of the basket is correct.
To run the tests navigate a new terminal to "my-app" and run "npm run test"

## TODO's & Wants
Due to the time constraints and evaluation criteria while the app is functional and looks decent with less restrictions there are more features that could be added.

- General styling improvements, mobile first design and responsiveness.
- Product description pages, to display more info on each product, including descriptions, image carousel and reviews.
- Implement a mock pay system such as "Stripe" for a full e-commerce experience.
- Move the products to a node.js based backend, implement stronger business logic and manipulate the stock counts.
- Basket hover functionality/page share with products
- Implement further unit tests
- Split current logic down further into the unused files "/hooks, /services"

## Use of AI
To prove what i can do within react for this task, minimal amounts of AI have been used.
Github co-pilot used to aid in bug fixing and clarifying errors.
ChatGPT to create the images used within the shop.

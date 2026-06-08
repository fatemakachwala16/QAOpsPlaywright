Feature: Ecommerce validation

Scenario Outline: placing the order
Given a login to ecommerce application with "<email>" and "<password>"
When user adds a product "<productName>" to cart
Then verify "<productName>" is added to the cart
Then verify "<country>" and "<email>" added on the checkout
When Enter the valid details and place the order
Then verify order is present in the order history page 

Examples:
| email                 | password      | productName       | country |
|testuser268@gmail.com  | Test@1234     | iphone 13 pro     | Vietnam |
|testuser267@gmail.com  | Test@1234     | ZARA COAT 3       | India   |
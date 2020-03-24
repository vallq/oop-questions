#### Freshie OOP Question
Freshie is a F&B startup, and the company wants to design an Orange Juice vending machine.The vending machine can take in coins and notes. When the accumulated sum hits 200 cents, the vending machine will dispense the orange juice in a plastic cup together with the change.The vending machine can take in the following currency in cents.

Coins: 10, 20, 50, 100
Notes: 200, 500

Change is dispensed with the largest available denomination first. ie minimise the number of coins to return.

When there are drinks and cups:
Input: ([], [200])
Output: ["OJ"]
Input: ([50, 100], [200, 200, 200])
Output: ["OJ", 500, 50]
Input: ([10, 20, 50, 100], [500])
Output: ["OJ", 200, 200, 50, 20, 10]

### Extension 1
Freshie wants to add a new product Coconut Water of price 350 to the vending machine
Modify your application to support the above conditions.

When there are drinks and cups:
Input: ("OJ", [], [200])
Output: ["OJ"]
Input: ("CW", [50, 100], [200])
Output: ["CW"]
Input: ("OJ", [50, 100], [200])
Output: ["OJ", 100, 50]
Input: ("CW", [50, 100], [200])
Output: ["CW"]
Input:("OJ", [10, 20, 50, 100], [500])
Output: ["OJ", 200, 200, 50, 20, 10]
Input: ("CW", [10, 20, 50, 100], [500])
Output: ["CW", 200, 100, 20, 10]

### Extension 2
Oranges and Cups can run out.
Create a mechanism to add oranges and cups.
There is a Maximum number of oranges and cups that can be stored.
Max number of oranges = 5
Max number of cups = 10

When there are no drinks or cups left:
Input: ("OJ", [10, 20, 50, 100], [500])
Output: ["no cups", 500, 100, 50, 20, 10] or ["no OJ", 500, 100, 50, 20, 10]

# SEI Project 4: Picky Preventer

## Project Background & Description
Most pediatricians recommend that babies start trying solid foods between 4-6 months of age, giving them plenty of time to explore new foods while breastmilk or formula is still their main source of nutrition.  While babies and young children can enjoy just about any food that adults do, research has also shown that it is important to expose them to a wide variety of flavors and textures as early as possible to help prevent future picky eating and reduce the risk of food allergies.  It is also important to serve the same foods in varying presentations, for example a hard-boiled egg vs a scrambled egg.  However, as a new parent it can be difficult to remember what your baby has tried, if they enjoyed the food, and how long it has been since they last ate it.

Picky Preventer serves as a food tracker for parents with babies and young children to keep track of what foods their child has been exposed to, when the exposures occurred and how their child reacted to the food.  In addition, to tracking parents are able to see new foods their child has not tried yet or foods they haven't eaten in a while.  Users can then add these foods to their grocery list to help them expand what they are buying when they get groceries.  By documenting the exposures with notes parents will also have memories of their child's progress learning how to eat by themselves.


## Wireframes

![Splash Page](https://i.imgur.com/fwE4tOC.jpg)

![Browse Page](https://i.imgur.com/gEl2Db3.jpg)

![Exposure Modal](https://i.imgur.com/FGNs5GF.jpg)

![Grocery List Page](https://i.imgur.com/y9jQLMh.jpg)

## ERD
![ERD](https://i.imgur.com/WgXoYhM.jpg)

## User Stories
* As a parent, I want to keep a log of what foods my child has tried so I can keep introducing new options.
* As a new parent, I want to track what my baby eats so that I can monitor for any allergic reactions to foods.
* As a parent who is a picky eater, I want to be reminded to buy foods I typically don't buy, so that I can expose my child to them in the hopes that they are less likely to be picky.
* As a parent I want to keep a record of when my child has eaten certain foods so I can make sure I don't wait too long to serve them again.
* As a parent I want to remember in what presentations I have served foods so that I can ensure to expose my child to the same food in different forms.


## MVP
[x] Clean, easy-to-navigate, functional site
[x] Successfully integrated front and back ends
[x] User can browse foods
[x] User can add foods to grocery list
[x] User can have multiple grocery lists
[x] User can expand food to see child's exposures
[x] Full CRUD on grocery lists
[x] User can create new foods
[x] User authentication
[x] Email the grocery list to the user - New tech

## Silver
[x] Password Hashing
[ ] User can upload photos and videos of child eating the food (in exposures) - Amazon S3 or Amazon CloudFront
[ ] Styling using REACT library
[ ] Modal warnings on certain foods based on child's age (e.g., "Popcorn is not recommended for children under 4 years of age.")

## Gold
[ ] User's can add multiple children and track by each child
[x] User can text grocery list - Twilio and/or Vonage (previously Nexmo)
[ ] Suggestions displaying foods that the child has never tried or the most time has passed since they tried the food

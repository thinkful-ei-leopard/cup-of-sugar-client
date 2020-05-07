# Cup of Sugar Client
### Client side repository for the Cup of Sugar Application

This project was created by a team of 3 members: Christopher Floyd, Daniel Fong, and Paul Baisley.

Server Repository: https://github.com/thinkful-ei-leopard/cup-of-sugar-api

Live App: 

![Cup of Sugar Community Bulletin Page]()

## What is Cup of Sugar?

Cup of Sugar is an application that seeks to bring local communities together through meaningful interactions. Through it we enable users within close proximity to communicate and request and offer help. 

### Features

1. Authorization system allows users to: 
    - Register with their information and an optional image upload for their avatar.
    - Login to their neighborhood, localized by zip code.

2. Requests and Offers System allows users to:
    - Post requests and offers on the Community Bulletin, a searchable and sortable board containing all posts within their zipcode. 
    - Filter the bulletin to only show request or offer posts they created.
    - View other user's posts, and comment on them. 
    - Mark their own posts as resolved when they wish to retract an offer or have their request fulfilled. 
  
3. Messaging System allows users to:
    - Communicate 1 on 1 with other users in their neighborhood.
    - Access the messaging system by looking up other users in their neighborhood or via other user's posts and comments. 

## Frontend Tech Stack

React.js, SCSS(Sass), Jest, Mobile First Responsive Design, Context Api

## Technical Details

Client utilizes extensive context to pass information and maintain state. User data is stored in a Heroku database which is accessed by 5 different endpoinds within the Api (see server repository for more details). 

## Dependencies

View package.json file for dependencies, or run npm install.

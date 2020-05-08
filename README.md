# Cup of Sugar Client
### Client side repository for the Cup of Sugar Application

This project was created by a team of 3 members: Christopher Floyd, Daniel Fong, and Paul Baisley.

Server Repository: https://github.com/thinkful-ei-leopard/cup-of-sugar-api

Live App:

Guest Login: 
Username: Guest     
Password: GuestPassword1!

## What is Cup of Sugar?

Cup of Sugar is a localized, community-oriented application that aims to bring neighbors closer together by fostering connections based on mutual aid. Users can post offers and requests to a public bulletin board, where other users can respond by post comments or messaging other users privately.

<p align="center">
<img src="./src/images/cupofsugarloop.gif" align="center" alt="Cup of Sugar demo gif" title="Cup of Sugar demo gif">  
</p>

## Features

1. Authorization system allows users to: 
    - Securely register with their information and an optional avatar image.
    - Login to their neighborhood, localized by zip code.

2. Requests and Offers System allows users to:
    - Post requests and offers on the Community Bulletin, a searchable and sortable board containing all posts within their zipcode. 
    - Filter the bulletin to only show request or offer posts they created.
    - View other user's posts, and comment on them. 
    - Mark their own posts as resolved when they wish to retract an offer or have their request fulfilled.
  
3. Messaging System allows users to:
    - Communicate 1 on 1 with other users in their neighborhood.
    - Access the messaging system by looking up other users in their neighborhood or via other user's posts and comments. 

## Tech Stack

React.js, 
Context,
SCSS, 
Node.js,
Express,
PostgreSQL,
Mocha/Chai,
Jest,
Heroku,
Zeit

## Technical Details

Client application utilizes Context to pass information and maintain state. User data is stored in a Heroku database which is accessed by 5 different endpoinds within the API (see server repository for more details). 

## Dependencies

View package.json file for dependencies, or run npm install.

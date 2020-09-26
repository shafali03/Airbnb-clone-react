
# Airbnb with React

An Airbnb cloned site which allows users to select dates and number of guests. Once you have chosen the date you can then search for the airbnb.The search airbnb and explore button displays a list of rooms available with descriptions, images, rating and price. 

<img src='https://res.cloudinary.com/shafali/image/upload/v1601123757/airbnb_dp1dcc.gif'>


## Yarn packages
```
yarn add @material-ui/core
yarn add @material-ui/icons
yarn add react-date-range
yarn add date-fns
yarn add react-router-dom
```


## Tech Used

* React Hooks
* CSS 
* Material ui icons
* React date range
* React router dom
* Firebase 


## Steps used to deploy to firebase

1.  Create account
2.  Add project
3.  npm i -g firebase-tools
4.  firebase login  (login automatically select google account)
5.  firebase init
6.  Hosting: Configure and deploy Firebase Hosting sites (Select by pressing space bar then pressed enter)
7.  Use an existing project (Selected existing project)
8.  Select the project (example: airbnb-cloned-3a579 )
9.  What do you want to use as your public directory? build
10. Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
11. yarn build
12. firebase deploy

### Live preview 
[Airbnb clone](https://airbnb-d3d38.web.app/)

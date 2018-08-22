

# Github Search
Author: [Ian Odhiambo](https://github.com/ianodad)
second IP in morinag core
## Brief description ##
The website prompts the user to serach for users and their repos from Github. This facilitated by the use of the Github API.

Composed of two main components.
* `Find Users` -search for users on git-hub based on their usernames.
* `Find Repositories` -Display the user repositories corresponding to the user name

## Dependencies Structure ##
|
|--src
|   |
|   |--app 
|   |   |
|   |   |--class
|   |   |   |--repository.ts
|   |   |   |--search.ts
|   |   |   |--user.ts
|   |   |--not-found
|   |   |   |--not-found.component.css
|   |   |   |--not-found.component.html
|   |   |   |--not-found.component.specc.ts
|   |   |   |--not-found.component.ts
|   |   |--profile
|   |   |   |--profile.component.css
|   |   |   |--profile.component.html
|   |   |   |--profile.component.specc.ts
|   |   |   |--profile.component.ts
|   |   |--repo-view
|   |   |   |--repo-view.component.css
|   |   |   |--repo-view.component.html
|   |   |   |--repo-view.component.specc.ts
|   |   |   |--repo-view.component.ts
|   |   |--repo-view-details
|   |   |   |--repo-view-details.component.css
|   |   |   |--repo-view-details.component.html
|   |   |   |--repo-view-details.component.specc.ts
|   |   |   |--repo-view-details.component.ts
|   |   |--routing
|   |   |   |--routing.component.css
|   |   |   |--routing.component.html
|   |   |   |--routing.component.specc.ts
|   |   |   |--routing.component.ts
|   |   |--service
|   |   |   |--service.component.specc.ts
|   |   |   |--service.component.ts
|   |   |--app.component.css 
|   |   |--app.component.html
|   |   |--app.component.spec.ts
|   |   |--app.component.ts
|   |   |--filter.pipe.spec.ts
|   |   |--filter.pipe.ts
|   |   |--hover.directives.spec.ts 
|   |   |--hover.directives.ts
|   | 
|   |--main.ts
|   |--index.html
|   |--styles.css
|
|--node_modules
## Angular Application  Structure ##
Components:
  1. User Search Component- git hub user search
  2. Navigation bar Component for the routing module
  4. Search Form Component

Modules:
* Routing Module-responsible for routing configuration of the web app.

Service:
* Http Service for making http api calls using promises.

PIPES and directives:
* Highlight directive


## Specifications ##
| Behavior                  | Input                     | Output                    |
| ------------------------- | ------------------------- | ------------------------- |
| Search for a github profile |Enter the username of the github profile | Displays the name, username, image, number of repositories,date of creating the repo,and lists the repos  |
| Redirect to github user profile or reposiroty | Click the profile/repositories |Opens a new tab that redirects to the profile/repository |


## Installation ##
### Cloning into Master ###
* Make sure you have all the Requirements or running angular apps installed such as node,npm, tsc and watchman
* Clone the project into your machine

##Running the Application ##
1.Install Node.js 8.9 or higher. IMPORTANT: The server uses ES2015 features AND the Angular CLI so you need this versin of Node.js!!!!

2.Run npm install to install app dependencies

3.Run ng build --watch to build and bundle the code

4.Run npm serve in a separate terminal window to build the TypeScript, watch for changes and launch the web server

Go to http://localhost:4200 in your browser

### Live demo ###
To view the page click on the link below
* https://jakhax.github.io/github-search/

## Technologies Used
    1. HTML 5
    2. Bootstrap 4.1
    3. Angular JS 6

## Known Bugs ##

There are no known bugs. If you find any be sure to create an issue and I will respond to it.

## Contributing ##
pull requests are encouraged

## License ##
This project is licensed under the MIT Open Source license, (c) [Ian Odhimabo](https://github.com/ianodad)


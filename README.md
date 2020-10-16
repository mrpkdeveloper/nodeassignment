## Routing for register and login page

`for register page`
`1.get /register` - to render register page
`1.post /register` - to register a new user with firstname,lastname,username,password,address

`for login page`
`1.get /login` - to render login page
`1.post /login` - to login with username and password

`for private page`
`1.get /private` - to render private page only if user logged in

## CRUD ON TASK

`1.post /task` - to create new task
`2.get /task` - read all task
`3.get /task/:id` - read by specific id
`4.post /task/:id/:task` - update exiisting task
`5.post /task/:id` - to delete task

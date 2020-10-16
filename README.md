## Routing for register and login page

`for register page`<br>
`1.get /register` - to render register page <br>
`1.post /register` - to register a new user with firstname,lastname,username,password,address<br><br><br>

`for login page`<br>
`1.get /login` - to render login page<br>
`1.post /login` - to login with username and password<br>
<br><br><br>

`for private page`<br>
`1.get /private` - to render private page only if user logged in<br>

<br><br><br>

## CRUD ON TASK

<br><br>

`1.post /task` - to create new task<br>
`2.get /task` - read all task<br>
`3.get /task/:id` - read by specific id<br>
`4.post /task/:id/:task` - update exiisting task<br>
`5.post /task/:id` - to delete task<br>

# Ticket CRM API

This API is part of the creation of the Tickets CRM with the MERN stack

## How to use

- run `git clone ...`   
- run `npm start`

Note: Make sure to have nodemon installed in your system, otherwise you can install it as a dev dependencies in the project

## API resources

### User API resources
All the user API router follows `/v1/user/`

| # | Routers                  | Verbs | Progress | Is Private | Description
|---| -------------------------|-------|----------|------------|------------|
| 1 | `/v1/user/login`                  | GET   | TODO   | No   | Verify user Authentication and return JWT
| 2 | `/v1/user/request-reset-password` | POST  | TODO   | No   | Verify email and email pin to reset the password
| 3 | `/v1/user/reset-password`         | PUT   | TODO   | No   | Replace with a new password
| 4 | `/v1/ticket/{id}`                 | GET   | TODO   | Yes  | Get users info
|
### Ticket API Resources

All the user API router follows `/v1/ticket/`

| # | Routers                  | Verbs | Progress | Is Private | Description
|---| -------------------------|-------|----------|------------|------------|
| 1 | `/v1/ticket`             | GET   | TODO     | Yes        | Get all tickets for the logged in user
| 2 | `/v1/ticket/{id}`        | GET   | TODO     | Yes        | Get ticket details
| 3 | `/v1/ticket/`            | POST  | TODO     | Yes        | Create a new ticket
| 4 | `/v1/ticket/{id}`        | PUT   | TODO     | Yes        | Update ticket details, reply message
| 4 | `/v1/ticket/close-ticket/{id}`        | PUT   | TODO     | Yes        | Update ticket details, reply message


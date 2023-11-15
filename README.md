# DevDynasty - UI

![Thumbnail](./doc/thumbnail.png)

## Features (for now)

1. Register a user
2. Get current user
3. Login
4. Access token
5. Refresh tokens

## Project structure

```
$PROJECT_ROOT
├── lib
├── public
└── src
    ├── App.tsx # Entry Point
    ├── assets
    ├── components
    └── pages
```

## Stack

- [TypeScript](https://www.typescriptlang.org/) - Static tye checking
- [Express@5](https://expressjs.com/en/5x/api.html) - Web server
- [argon2](https://github.com/ranisalt/node-argon2#readme) - Password hashing
- [Zod](https://github.com/colinhacks/zod) - Validation
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Signing and verifying JSON web tokens
- [Nodemailer](https://nodemailer.com/about/) - Sending emails
- [Pino](https://github.com/pinojs/pino) - Logging
- [config](https://github.com/lorenwest/node-config) - Managing configuration

## Using

- [Postman](https://www.postman.com/downloads/)
- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Swagger](https://www.swagger.io/)

## TODOs

- [x] Bootstrap application
- [ ] User API
  - [ ] Create user
  - [ ] Get current user
- [ ] Authentication API
  - [ ] Create user session
  - [ ] Get new access token with refresh tokens

## List Of Components
- [ ] Navbar
  - [ ] Back Buttons
- [ ] About Accordion 
- [ ] Slider
- [ ] Right & Left Buttons
- [ ] Title For Island
- [ ] Island
- [ ] Island desc
- [ ] Categories Button
- [ ] Card (For Showing Item)

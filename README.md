## Code Overview
### Package 의존성
- `typsscript`
- `express`
- `cors` - Can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- `errorhandler` - Development-only error handler middleware.
- `method-override` - Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
- `morgan` - HTTP request logger middleware for node.js

### Scripts
```json
{
  "start": "nodemon --watch src --delay 2 --exec 'ts-node' src/app",
  "stop": "lsof -ti :3000 | xargs kill"
}
```

## Application Structure ( base url 'src/' )
- `app.ts` - The entry point to our application.
- `routes/` - This folder contains the route definitions for our API.

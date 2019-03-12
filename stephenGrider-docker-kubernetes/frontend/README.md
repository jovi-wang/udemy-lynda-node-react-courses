Dockerfile.dev is used in dev environment

Dockerfile is used in production, it has 2 stage,
first stage build react app, second stage serve static files in nginx server

docker compose shows how to mount file system in development mode, and test environment is also a different service, or we want to do docker exec image id npm run test


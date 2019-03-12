simpleweb-docker is used to show how to use docker cli and docker command

frontend is used to dockerize a single react app, and integrate with travis to push to aws ELB

complex-elastict-beanstalk is used to show how to dockerize multiple services (including postgress database and redis) using docker-compose and ECS, docker compose used only for dev purpose, travis is used to run test and build docker image and push to docker hub, Dockerrun.aws.json is used for ECS in production, in production aws RDS and elastic cache are used
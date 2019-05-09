# react-wordpress-docker

## Prerequisites
Install [Docker](https://www.docker.com/)  
Install AWS CLI tools (`brew install awscli`) and configure accordingly

## Scripts
To run the Wordpress instance in a Docker container:  
`make start-backend`

The Wordpress backend will run on http://localhost:8000

To install and run the frontend:  
`make start-frontend`

To deploy a fresh build to S3, run:  
`make deploy-frontend`

## Environments
### Local
WP username: admin  
WP password: see .env file (ask developer/admin)

### Test
Public IP: http://3.120.190.38/ (Lightsail instance)  
WP username: user  
WP password: see .env file (ask developer/admin)

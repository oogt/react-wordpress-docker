# react-wordpress-docker

## Prerequisites
Install [Docker](https://www.docker.com/)  
Install AWS CLI tools (`brew install awscli`) and configure accordingly
Install Node v10.10.0 (use NVM) 

## Scripts
To run the Wordpress instance in a Docker container:  
`make start-backend`

The Wordpress backend will run on http://localhost:8000

To install and run the frontend:  
`make start-frontend`

This will fire up a simple Express server with Next.js for Server Side Rendering (SSR). The React application will open automatically on http://localhost:3000

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

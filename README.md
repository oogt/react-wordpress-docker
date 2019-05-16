# react-wordpress-docker

## Prerequisites
Install [Docker](https://www.docker.com/)  
Install Now CLI (`npm install -g now`) and configure credentials accordingly
Install Node v10.10.0 (use NVM)

## Scripts
To run the Wordpress instance in a Docker container:  
`make start-backend`

The Wordpress backend will run on http://localhost:8000

To install and run the frontend:  
`make start-frontend`

This will fire up a simple Express server with Next.js for Server Side Rendering (SSR). The React application will open automatically on http://localhost:3000

To deploy a fresh build to Now (staging environment), run:  
`make deploy-frontend`

To deploy a fresh build to Now and alias it to its production URL (defined in `now.json`), run:  
`make deploy-frontend-prod`

## Environments
### Local
WP username: admin  
WP password: see .env file (ask developer/admin)

### Test
WP URL: https://wp-test-api.oogt-dev.nl/wp-admin  
WP username: user  
WP password: see .env file (ask developer/admin)

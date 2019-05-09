FE_FOLDER := frontend
BUCKET_NAME := wp-test.oogt-dev.nl

.DEFAULT_GOAL := help

.PHONY: help start-backend start-frontend deploy-frontend

help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

start-backend:	## Start the Wordpress Docker image
	docker-compose up -d

start-frontend:	## Start the React frontend
	cd $(FE_FOLDER) && npm install && npm start

deploy-frontend: ## Deploys a fresh build to Amazon
	cd $(FE_FOLDER) && npm run build && aws s3 sync build/ s3://$(BUCKET_NAME)

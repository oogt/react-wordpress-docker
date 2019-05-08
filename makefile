FE_FOLDER := frontend

.DEFAULT_GOAL := help

.PHONY: help start-backend start-frontend deploy-backend deploy-frontend

help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


start-backend:	## Start the Wordpress Docker image
	docker-compose up -d

start-frontend:	## Start the React frontend
	cd $(FE_FOLDER) && npm install && npm start

deploy-backend: ## Deploys the Docker image to Amazon
	@echo "To be implemented"

deploy-frontend: ## Deploys a build to Amazon
	@echo "To be implemented"

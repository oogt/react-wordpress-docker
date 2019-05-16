FE_FOLDER := frontend

.DEFAULT_GOAL := help

.PHONY: help start-backend start-frontend deploy-frontend deploy-frontend-prod

help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

start-backend:	## Start the Wordpress Docker image
	docker-compose up -d

start-frontend:	## Start the React frontend running on an Express server (Next.js)
	cd $(FE_FOLDER) && npm install && npm run dev

deploy-frontend: ## Deploys a fresh build to Now
	cd $(FE_FOLDER) && now

deploy-frontend-prod: ## Deploys a fresh build to Now and aliases it
	cd $(FE_FOLDER) && now --target production

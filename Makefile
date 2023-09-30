COLOR_GREEN=\033[0;32m
COLOR_RED=\033[0;31m
COLOR_BLUE=\033[0;36m
COLOR_BOLD=\033[1m
COLOR_END=\033[0m

##@ Help:
.PHONY: help
help: ## Displays this information.
	@awk 'BEGIN {FS = ":.*##"; printf "\n$(COLOR_BOLD)Usage:$(COLOR_END)\n  make $(COLOR_BLUE)<target>$(COLOR_END)\n"} /^[a-zA-Z_-]+:.*?##/ \
 				{ printf "  $(COLOR_BLUE)%-15s$(COLOR_END) %s\n", $$1, $$2 } /^##@/ \
 				{ printf "\n$(COLOR_BOLD)%s$(COLOR_END)\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
	@echo ""

##@ Container management:
.PHONY: up
up: ## Starts the container and serves the app for development.
	@COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose \
				-f "docker-compose.yml" \
    		up --build -d
		@echo ""
		@echo "#####################################"
		@echo "##  Service started successfully  ##"
		@echo "#####################################"
		@echo "You can use $(COLOR_BLUE)make logs$(COLOR_END) for app status tracking"
		@echo ""

.PHONY: down
down: ## Stops and deletes the container.
	@docker-compose \
	-f "docker-compose.yml" \
	down -v

.PHONY: logs
logs: ## Displays the aggregated logs of the container.
	@docker-compose \
		-f docker-compose.yml \
		logs -f

.PHONY: restart
restart: down build logs ## Stops the container and restarts it.

.PHONY: watch
watch: up logs ## Starts the container and show logs.


.PHONY: stop
stop: ## Stops the container, but does not remove it.
	@docker-compose -f "docker-compose.yml" stop

.PHONY: clean-cache
clean-cache: ## Cleans npm cache
	@npm cache clean --force
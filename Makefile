# QoL commands

build:
	@docker-compose -f docker-compose.yml build

start:
	@docker-compose up -d --build app

.PHONY: default start start-server install tests publish build

default: install

start-client:
	yarn start:client;

start-server:
	yarn start:server;

install:
	yarn;

tests:
	rm -rf coverage;
	yarn test:standard;
	yarn test:coverage;

publish:
	yarn coverage:publish;

build:
	yarn build;

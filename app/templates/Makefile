BOWER 		?= node_modules/.bin/bower
HTTPSERVE   ?= node_modules/.bin/http-server

all:: install serve
	printf "\n\n All done!\n\n Go to http://localhost:4001/ to see a demo.\n\n\n\n"

clean::
	rm -rf node_modules src/bower_components ~/.cache/bower

install:
	npm install
	$(BOWER) install

serve::
	$(HTTPSERVE) -p 4001

.PHONY: all clean install serve

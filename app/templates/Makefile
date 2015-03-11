BOWER 		?= node_modules/.bin/bower
HTTPSERVE   ?= node_modules/.bin/http-server

all:: designerhappy

########################################################################
## Install dependencies

stamp-npm: package.json
	npm install
	touch stamp-npm

stamp-bower: stamp-npm
	$(BOWER) install
	touch stamp-bower

clean::
	rm -f stamp-npm stamp-bower
	rm -rf node_modules src/bower_components ~/.cache/bower

make serve::
	$(HTTPSERVE) -p 4001

designerhappy:: stamp-npm stamp-bower
	printf "\n\n Designer, you can be happy now.\n Go to http://localhost:4001/ to see a demo \n\n\n\n"
	$(HTTPSERVE) -p 4001

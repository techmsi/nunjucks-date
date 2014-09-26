# We use `mocha` to run tests, and `istanbul` to generate code coverage metrics
_MOCHA=./node_modules/.bin/_mocha
MOCHA_OPTS=--recursive -- -u exports -R spec
ISTANBUL=./node_modules/.bin/istanbul
test:
	$(ISTANBUL) test $(_MOCHA) test $(MOCHA_OPTS)

.PHONY: test
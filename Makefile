dev:
	poetry run bin/dev

test-full: test-e2e

test-e2e:
	poetry run bin/e2e-test

.PHONY: dev test-e2e test-full
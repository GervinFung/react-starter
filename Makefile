.PHONY: build test
MAKEFLAGS += --silent

start-development:
	pnpm vite --mode development

build-development:
	pnpm vite build --mode development

start-production:
	pnpm vite build --mode production

build-production:
	pnpm vite build --mode production


lint:
	pnpm eslint . --ignore-path .gitignore --ext .ts,.tsx --color && pnpm knip

format-write:
	pnpm prettier --write .

format-check:
	pnpm prettier --write .

typecheck:
	pnpm tsc --noEmit


test: test-unit

test-unit:
	pnpm vitest test/unit/**/**.test.ts

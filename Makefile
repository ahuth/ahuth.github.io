clean:
		rm -rf ./public/ ./resources/

build: clean
		hugo --buildDrafts

deploy: build
		npx gh-pages@3.0.0 -d public

new:
		hugo new blog/$(slug).md

start:
		hugo server --buildDrafts

clean:
		rm -rf ./public/

build: clean
		hugo --buildDrafts

deploy: build
		npx gh-pages -d public

new:
		hugo new blog/$(slug).md

start:
		hugo server --buildDrafts

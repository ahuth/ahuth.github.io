clean:
		rm -rf ./public/

build:
		hugo --buildDrafts

new:
		hugo new blog/$(slug).md

start:
		hugo server --buildDrafts

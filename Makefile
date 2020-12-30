clean:
		rm -rf ./public/

build: clean
		hugo --buildDrafts

new:
		hugo new blog/$(slug).md

start:
		hugo server --buildDrafts

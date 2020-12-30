clean:
		rm -rf ./public/

build:
		hugo --buildDrafts

start:
		hugo server --buildDrafts

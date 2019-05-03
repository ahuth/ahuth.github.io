# ahuth.github.io

Personal homepage, built with [Eleventy](https://www.11ty.io/docs/).

## Branches

Note that the branches here are a little unusual. The built files for a Github pages "user" site must be on the master branch. Because of this, development is on the `development` branch, and then the deploy script builds the site and commits the files to the master branch.

## Usage

For local development:
- Run `npm start`
- Visit `localhost:8080`
- The server will hot reload on any changes.

To deploy:
- Run `npm run deploy`

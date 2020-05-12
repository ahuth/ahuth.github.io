# ahuth.github.io

Personal homepage, built with a custom static site generator.

## Branches

Note that the branches here are a little unusual. The built files for a Github pages "user" site must be on the master branch. Because of this, development is on the `development` branch, and then the deploy script builds the site and commits the files to the master branch.

## Secrets

For the build step to work properly, there needs to be a `secrets.json` file at the root of the project. It should be a json file, with an `analyticsId` key. Currently, this expects the value to be a site ID for [Fathom Analytics](https://usefathom.com/).

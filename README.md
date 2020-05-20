# ahuth.github.io

Personal homepage, built with a custom static site generator.

## Branches

Note that the branches here are a little unusual. The built files for a Github pages "user" site must be on the master branch. Because of this, development is on the `development` branch, and then the deploy script builds the site and commits the files to the master branch.

## Secrets

Optionally, you can add a `secrets.json` file at the root of the project (which will be git-ignored), which can have the following keys:

- `analyticsId` - if present, a script for [Fathom Analytics](https://usefathom.com/) will be included on each HTML page.

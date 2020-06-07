# ahuth.github.io

Personal homepage, built with a custom static site generator.

## Usage

To generate the site, run the build command:

```
yarn build
```

This will output static HTML into the git-ignored build/ directory.

## Branches

Note that the branches here are a little unusual. The built files for a Github pages "user" site must be on the master branch. Because of this, development is on the `development` branch, and then the deploy script builds the site and commits the files to the master branch.

## Directory structure

The different directories making up this project are:

- `src/` - the HTML and templates for the site, without any content.
- `scripts/` - the build code that generates the site.
- `content/` - the actual content, such as articles and projects.

## Secrets

Optionally, you can add a `secrets.json` file at the root of the project (which will be git-ignored), which can have the following keys:

- `analyticsId` - if present, a script for [Fathom Analytics](https://usefathom.com/) will be included on each HTML page.

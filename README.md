# ahuth.github.io

Personal website.

## Dependencies

In order to develop this site, you'll need these dependencies.

- [Hugo](https://gohugo.io/), which generates the site.
- [make](https://www.gnu.org/software/make/), for running commands.
- [npx](https://github.com/npm/npx), for deploying. Normally this comes bundled with [npm](https://www.npmjs.com/get-npm).

## Cloning

This uses a git submodule for the theme. When cloning, you'll also need to run

```
git submodule update --init --recursive
```

## Commands

After cloning and installing, use these commands to run and build the site.

- `make build` - create a static build
- `make clean` - delete the static build files
- `make deploy` - deploy to GitHub pages
- `make new slug=<POST_FILE_NAME>` - create a new post
- `make start` - run the development server

## Instructions

### Set up

#### Pre-requisites

- Install Docker desktop
- Open using the VS Code plugin, `Dev Containers`
- Project should open with `yarn` and `netlify-cli` installed

#### Start Docker

#### Run local dev server

- yarn (install dependencies)
- yarn dev (run local dev server)

### Netlify setup

- `netlify login`
- Should take you to login to netlify
- `netlify init` should connect netlify to your repo

### First Deploy

- `netlify deploy`
- Go through prompts and choose what makes sense
- If it all looks good, check the preview url
- If that looks good, deploy to prod with `netlify deploy --prod`

## Netlify

Success! Netlify CI/CD Configured!

This site is now configured to automatically deploy from github branches & pull requests

Next steps:

git push Push to your git repository to trigger new site builds
netlify open Open the Netlify admin URL of your site

- `git push`
- `netlify open`

## Launch Netlify Dev Server

`netlify dev`

### Navigate to localhost server:

`http://localhost:8888/`

### Test Netlify Functions:

`http://localhost:8888/.netlify/function/myFunction`

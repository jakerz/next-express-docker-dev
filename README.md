

## Instructions

### Run local dev
- Install Docker desktop
- Open using the VS Code plugin, `Dev Containers`
- Project should open with `yarn` and `netlify-cli` installed
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
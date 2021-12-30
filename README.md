# UNSW Security Website - Gatsby Edition
> **NOTE:** This repository is a copy of the UNSW Security Society website repo. It only contains my contributions made to the society's website up until end of 2021. The most updated version of the website can be found [here](https://unswsecurity.com/).

The UNSW Security Society new website using the Gatsby framework.

## Technology Stack
Our new website is powered using the [Gatsby](https://www.gatsbyjs.com/) framework which enables us to write using the React library whilst having the option to build static HTML pages when deployed. Pages on the website are written in a combination of markdown and React components.

This website was created with the [gatsby-starter-typescript-plus](https://github.com/resir014/gatsby-starter-typescript-plus) template as a starter kit. The website is written using Typescript and we are using the Material UI framework and styled components for CSS stylings.
## Getting Started
### Prerequisites
- [Git](https://github.com/git-guides/install-git)
- [Nodejs](https://nodejs.org/en/download/package-manager/) and [npm](https://www.npmjs.com/)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
#### Installing Gatsby
Install the Gatsby CLI using `npm install -g gatsby-cli`. If needed, more details on setting up an environment for Gatsby can be found [here](https://www.gatsbyjs.com/docs/tutorial/part-zero/).

### Installation
After cloning the repository, follow the instructions below to install the project's dependencies and start up a server to run the website.

```bash
cd unswsecurity-website-2021
npm install           # run once to install the project's dependencies
gatsby develop        # start the local development server
```

Local development server should be hosted on http://localhost:8000/

### Other Notes
Some data or features of this website may have been copied over from our previous version of the website found [here](https://github.com/unswsecuritysociety/website-static). You may or may not find it useful to go have a look through the repository to see if there is anything there that you may find helpful when creating a feature.
## Project Development Workflow
When contributing to the development of the website, please follow the workflow outlined below

### Git Practices

#### Development
When developing a new feature or bugfix, branch of from **the latest version of `main`** and code from there. Convention for naming branches is as follows:
- `feature/<feature-name>` for developing a new feature or component
- `fix/<fix-name>` for minor updates and fixes
- `blog/<blog-name>` for creating a new blog post

**NOTE: Always merge the latest version of `main` into your branch before working on it to have the latest version of code.**
```
git checkout main
git pull
git checkout <branch>
git merge main
```

### Pull Requests
**NOTE: If the pull requests only involves a bug fix, creation of a new markdown file (i.e. for a blog post) or a small feature (< 20 lines of code), just assign the Projects Director as a reviewer to get the PR approved. Otherwise, follow the steps below.**

If you wish to merge a branch to master, follow these steps:
1. `git pull` the latest version of `main` and merge it into to your branch.
2. If there are no merge conflicts with `main`, create a pull request that quickly describes the changes made. Otherwise, fix up the merge conflicts.
3. When submitting a pull request for a major feature, assign the Project Director as a reviewer for the pull request to be approved.
4. Once the pull request has been approved, you are now able to merge it into `main` if you still wish to merge your branch into main.

### Project Structure
```bash
secsoc-gatsby-website/
├─ public/                 # build folder
├─ tsconfig.json           # specifies the root files and the compiler options required to compile the project
├─ gatsby-browser.js       # respond to Gatsby-specific events within the browser (i.e. global css files)
├─ gatsby-config.js        # defines site’s metadata, plugins, and other general configuration
├─ gatsby-node.js          # used to process building the site
├─ package.json            # shows the dependencies and metadata of the project
├─ ...
└─ src/
   ├─ assets/              # store all static assets (images, svgs, css. Static assets should be stored here
   ├─ components/          # store all reusable components (incl styled components) here
   │  ├─ Button/
   │  |  ├─ index.tsx      # contains only import of component to be exported
   │  |  └─ Button.tsx     # main file for component
   |  └─ ...
   ├─ data/                # contains our data for the pages (i.e. team data members stored in TS objects, markdown pages)
   ├─ types/               # contains typescript types
   ├─ pages/               # contains pages components
   ├─ views                # contains section components for pages
   ├─ styles/              # contains global styles
   └─ templates/           # layout templates for pages
```
#### Creating components
All components must be created within the components folder. Each component created must have their own folder created. General style rule is that the file `index.tsx` will be importing the implementation of the component from another file and exporting it to be used elsewhere in the project. Main implementation of the component should be created in another file entirely.

#### Styling components
We are using styled components for CSS rather than CSS modules, stylesheets, JS objects, etc. Styled components should be strictly used within the file itself to create css styling for a component. If you believe that the styled component could be used elsewhere throughout the project (i.e. a Button styled component), then you are more than welcome to abstract it into the `components` folder.

#### Static assets
Gatsby recommends importing static assets directly rather than using a static folder. Thus, any static assets used should be stored in the `src/assets/` folder.
## Resources
Some resources and documentation to get started working on the website
- [Gatsby](https://www.gatsbyjs.com/docs/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Styled Components](https://styled-components.com/)
- [Material UI](https://material-ui.com/)

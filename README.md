# Application for Tailwind CSS Front End Developer by Robert Mennell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3. It uses TailWind CSS for styling, Jest and Testing Library for sane testing, and has featured designs done in Figma

## View the Github Pages

You can view the deployed [Static Site on GitHub Pages](https://skatcat31.github.io/portfolio/).

## Development server

### Angular Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Scully Static Server

Run `npm run scully:server` to run the Scully local server and preview the Static Site locally.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

### Static Site Generator

Run `npm run build` to build the project. The build artifacts will be stored in the `docs/` directory. Its builds to Static Site in production mode using [Scully](https://github.com/scullyio/scully).

### Scan for new routes

Run `npm run build:scan` to build the project and scan for new routes with Scully.

## Running unit tests

Run `npm t` to execute the unit tests via [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## VSCode Plugins

### Style Lint
REQUIRED  
This project uses the [Style Lint](https://stylelint.io/) package for linting the SCSS files due to the [TailWind CSS](https://tailwindcss.com/) Framework

### Angular Schematics
Optional
This project uses [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics) optionally to make setting up the components using the Angular scaffolding templates. Requires the Angular Commandline Interface

### Angular Languages Service
REQUIRED
This project uses the [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

### Tailwind CSS Intellisense
Optional
It just makes things easier with this plugin. [Found here](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

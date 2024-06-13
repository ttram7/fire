# FIRE Application

## Description

This application is being developed for the FIRE Movement (Financial Independence, Retire Early). FIRE is a movement for people who want to retire earlier than the traditional age of 65, by saving money through heavily investing.

End users for this FIRE application include:
- Retired Individuals who have already achieved financial independence and are looking to move to their ideal location.
- Non Retired individuals who are planning for a financially independent future and would like to prepare their finances to accommodate their preferred living location.

## FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Dependencies

- npm install
- npm install -g @angular/cli

## File Structure

- `src/` contains the Angular application client-side files
- `server/` contains the Express App

## Installation

1. Open up your editor of choice and run an `npm install` and `npm install -g @angular/cli`.
2. Run `ng serve` in your terminal.
3. Run `json-server db.json` in your terminal.
4. Navigate to `localhost:4200`.

## Database

This code repository features a `db.json` file which has some starter code. As we migrate to MongoDB, this will change. To run the FIRE application locally, start the database with command `json-server db.json` or `npx json-server --watch db.json` if you do not have packages installed globally.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

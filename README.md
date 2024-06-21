# PROJECT NAME

FIRE Application

## Description

This application is being developed for the FIRE Movement (Financial Independence, Retire Early). FIRE is a movement for people who want to retire earlier than the traditional age of 65, by saving money through heavily investing.

End users for this FIRE application include:
- Retired Individuals who have already achieved financial independence and are looking to move to their ideal location.
- Non Retired individuals who are planning for a financially independent future and would like to prepare their finances to accommodate their preferred living location.

### Prerequisites

- [npm](https://www.npmjs.com)
- [Angular.js](https://angular.dev)
- [PostgreSQL](https://www.postgresql.org)

## Installation (Development)

1. Open up your editor of choice and run an `npm install`.
2. Run `npm install -g @angular/cli` to install the Angular CLI package.
3. Run `ng serve` in a new integrated terminal window.
4. Run `json-server db.json` in a new integrated terminal window.
  This will run the temporary DB file db.json
5. Run `node server/server.js` in a new integrated terminal window.
  This will start the connection to the DB fire_db. (Not integrated on FE, but can be tested via postman.)
4. Navigate to `localhost:4200`.

## Options if not already installed

- npm install
- npm install -g @angular/cli
- npm install express body-parser pg cors

## File Structure

- `src/` contains the Angular application client-side files
- `server/` contains the Express App

## Usage

This application uses saga and redux for state management and handles full CRUD operations.

1. Navigate to the main page
3. View summary page as a subsititue
4. Customize your schedule, view available assignments, etc.
5. Arrive on time and fill in for a teacher who needs you

## Built With

- Angular JS
- Node JS
- Express
- Bootstrap
- Javascript
- HTML
- CSS

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please reach out to us via profile links on Github or linked in.

# download-files

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd download-files`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

Requirements:

· Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.

· The select-all checkbox should be in an unselected state if no items are selected.

· The select-all checkbox should be in a selected state if all items are selected.

· The select-all checkbox should be in an indeterminate state if some but not all items are selected.

· The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.

· Clicking the select-all checkbox should select all items if none or some are selected.

· Clicking the select-all checkbox should de-select all items if all are currently selected.

· Status should be correctly formatted

· Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.

· Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.

const { defineConfig } = require('cypress');

module.exports = defineConfig({
	watchForFileChanges: true,
	chromeWebSecurity: false,
	viewportWidth: 1000,
	viewportHeight: 600,
	waitForAnimation: true,
	animationDistanceThreshold: 20,
	defaultCommandTimeout: 10000,
	execTimeout: 60000,
	pageLoadTimeout: 60000,
	requestTimeout: 15000,
	responseTimeout: 15000,
	failOnStatusDode: false,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});

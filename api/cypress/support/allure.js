// cypress/support/commands/allure.js
import './request.js'
// cypress/support/commands.js

import * as allure from 'allure-cypress';

Cypress.Commands.add('allureEpic', (epic) => {
  allure.epic(epic);
});

Cypress.Commands.add('allureFeature', (feature) => {
  allure.feature(feature);
});

Cypress.Commands.add('allureStory', (story) => {
  allure.story(story);
});

Cypress.Commands.add('allureParentSuite', (name) => {
  allure.parentSuite(name);
});

Cypress.Commands.add('allureSuite', (name) => {
  allure.suite(name);
});

Cypress.Commands.add('allureSubSuite', (name) => {
  allure.subSuite(name);
});

Cypress.Commands.add('allureLabel', (name, value) => {
  allure.label(name, value);
});

Cypress.Commands.add('allureParameter', (name, value) => {
  allure.parameter(name, value);
});

Cypress.Commands.add('allureTestParameter', (name, value) => {
  allure.testParameter(name, value);
});

Cypress.Commands.add('allureTestName', (name) => {
  allure.testName(name);
});

Cypress.Commands.add('allureLink', (url, name, type) => {
  allure.link(url, name, type);
});

Cypress.Commands.add('allureIssue', (name, url) => {
  allure.issue(name, url);
});

Cypress.Commands.add('allureTMS', (name, url) => {
  allure.tms(name, url);
});

Cypress.Commands.add('allureDescription', (markdown) => {
  allure.description(markdown);
});

Cypress.Commands.add('allureDescriptionHtml', (html) => {
  allure.descriptionHtml(html);
});

Cypress.Commands.add('allureOwner', (owner) => {
  allure.owner(owner);
});

Cypress.Commands.add('allureSeverity', (severity) => {
  allure.severity(severity);
});

Cypress.Commands.add('allureTag', (...tags) => {
  allure.tag(...tags);
});

Cypress.Commands.add('allureAttachment', (name, content, type) => {
  allure.attachment(name, content, type);
});

Cypress.Commands.add('allureTestAttachment', (name, content, type) => {
  allure.testAttachment(name, content, type);
});

Cypress.Commands.add('allureFileAttachment', (name, path, type) => {
  allure.fileAttachment(name, path, type);
});

Cypress.Commands.add('allureStartStep', (name) => {
  allure.startStep(name);
});

Cypress.Commands.add('allureEndStep', () => {
  allure.endStep();
});

Cypress.Commands.add('allureStep', (name, isParent) => {
  allure.step(name, isParent);
});

Cypress.Commands.add('allureLogStep', (name) => {
  allure.logStep(name);
});

Cypress.Commands.add('allureLogCommandSteps', (state) => {
  allure.logCommandSteps(state);
});
// https://docs.cypress.io/api/introduction/api.html
import { skills, sideSkills } from "../../src/data/skill"

context("basic e2e test", () => {
  it("home", () => {
    cy.visit("/")

    cy
      .url()
      .should('eq', 'http://localhost:3000/')

    cy
      .get("h1")
      .contains("Hi, Satya Wikananda here")

    cy
      .get("button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/about")
  })

  it("about", () => {
    cy.visit("/about")

    cy
      .get("h1")
      .contains("Hi, Satya Wikananda here")

    cy
      .get(".main-skills")
      .should("have.length", skills.length)
    
    cy
      .get(".side-skills")
      .should("have.length", sideSkills.length)

    cy
      .get("a[href='/projects']")
      .click()
      .url()
      .should("eq", "http://localhost:3000/projects")
  })

  it("projects", () => {
    cy.visit("/projects")

    cy
      .get("h1")
      .contains("My Projects")
  })
})
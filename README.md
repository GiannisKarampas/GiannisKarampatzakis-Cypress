# Cypress Test Automation for Unibet Blog Search Feature

## Project Overview

This project automates the testing of the search functionality on the Unibet Blog website using Cypress with TypeScript. The primary goal is to verify the search feature on both desktop and mobile views, covering essential scenarios, such as verifying that the search input works correctly and checking results for valid and invalid search terms.

## Prerequisites

- Node.js (v20.15.1)
- npm (v10.9.0)
- Cypress (installed via npm, setup instructions below)
- Git

### Key Design Considerations

1. **Modular Code Structure**: Organized into selectors, pages, and tests to enable modular updates.
2. **Responsive Testing**: Supports both desktop and mobile views.
3. **Custom Commands**: Reusable custom Cypress commands for cleaner code.
4. **Typed Code with TypeScript**: Enables type safety and improved IntelliSense.

## Project Structure

The project is organized as follows:

```plaintext
GiannisKarampatzakis-Cypress/
├── cypress/
│   ├── e2e/ 
│   │   └── search/
│   │       └── search.spec.ts  
│   ├── fixtures/
│   │   └── searchSelectors.ts
│   │   └── selectors.json    
│   ├── pages/
│   │   └── search.page.ts           
│   ├── support/
│   │   ├── commands.ts        
│   │   └── e2e.ts           
├── .gitignore                 
├── cypress.config.ts          
├── package.json               
├── tsconfig.json              
└── README.md      
```          

## Installation and Setup

1. Clone the Repository
```bash
git clone https://github.com/YourUsername/YourName-Cypress.git
cd GiannisKarampatzakis-Cypress
```
2. Install Dependencies
```bash
npm install
```
3. Configuration The project is pre-configured with a base URL and viewports for desktop and mobile in cypress.config.ts.

## Writing and Running Tests

The following test cases are covered in **cypress/integration/search/search.spec.ts:**

1. Valid Search Results
Ensures that a valid search term (e.g., "sports") returns relevant results containing the keyword in the search results.

2. Invalid Search Results
Checks that an invalid or non-existent search term (e.g., "xyz123") provides appropriate feedback (e.g., "No results found").

3. Display of Search Input
Confirms that the search input field is visible on both desktop and mobile views.

- **Running Tests**

- To open the Cypress Test Runner in interactive mode:
```bash
npx cypress open
```

- To run tests in headless mode with Chrome:
```bash
npx cypress run --browser chrome
```

- To run tests with Chrome:
```bash
npx cypress run --browser chrome --headed
```

## Additional Enhancements

With more time, I would focus on:

1. **Expanding Test Coverage:** Include more edge cases like handling special characters in search terms.
2. **Integrating CI/CD:** Configure automated tests on a CI/CD platform such as Jenkins.
3. **Data-Driven Testing:** Enable tests to run with various search terms from a data file.
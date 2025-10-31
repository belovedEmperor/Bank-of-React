# Grid-Maker
Project/Assignment 3 for CSci 39548

<!-- [Link to deployed page](https://belovedemperor.github.io/Grid-Maker/) -->
GitHub Pages WIP

Team Members: Cheng Yue (username: CY343), Christopher Altamirano (username: caltam600), and Jason Huang (username: belovedEmperor)

## Documentation
### Feature Requirements
1. **Account Balance Calculation**
    * 1.1. Dynamic Calculation: The application must calculate the account balance by subtracting the sum of all debits from the sum of all credits.
    * 1.2. Real-time Updates: The account balance must update automatically whenever a new credit or debit is added.
    * 1.3. Data Formatting: All monetary values, including the account balance, credits, and debits, must be rounded to two decimal places.
    * 1.4. Negative Balances: The system must support and correctly display negative account balances.

2. **Credits Management**
    * 2.1. Credits Page: A dedicated "Credits" page must be accessible from the Home page.
    * 2.2. Data Fetching: The application will retrieve an initial list of credit transactions from the specified API endpoint.
    * 2.3. Display Credits: The "Credits" page will display a list of all credit transactions, showing the description, amount, and date for each.
    * 2.4. Add New Credit: Users must be able to add a new credit by providing a description and an amount. The date for the new credit will be the current date.

3. **Debits Management**
    * 3.1. Debits Page: A dedicated "Debits" page must be accessible from the Home page.
    * 3.2. Data Fetching: The application will retrieve an initial list of debit transactions from the specified API endpoint.
    * 3.3. Display Debits: The "Debits" page will display a list of all debit transactions, showing the description, amount, and date for each.
    * 3.4. Add New Debit: Users must be able to add a new debit by providing a description and an amount. The date for the new debit will be the current date.

4. **Application State Management**
    * 4.1. Centralized State: The main App component will manage the application's core state, including account balance, credits, and debits.
    * 4.2. State Modification: Functions for adding new credits and debits will be defined in the App component to modify the state.

5. **API Integration**
    * 5.1. Initial Data Load: The application must make API calls to fetch initial credit and debit data when the component mounts.

### Application Architecture Description and Diagram
Description + Diagram WIP

### Epics, User Stories, and Acceptance Criteria
**Epic: Account Balance**
- User Story 1: As a user, I want to see my account balance so that I can quickly understand my financial position.
    - Acceptance Criteria:
        - The account balance is calculated as Total Credits - Total Debits.
        - The account balance updates immediately after a new credit or debit is added.
        - The account balance can be a negative value.
        - All amounts are displayed with two decimal places.

**Epic: Credits**
- User Story 2: As a user, I want to navigate to a "Credits" page from the Home page to view my credit history.
    - Acceptance Criteria:
        - Clicking the "Credits" link on the Home page redirects to the Credits page.
        - The Credits page has a clear title, such as "Credits".
- User Story 3: As a user on the Credits page, I want to see a list of all my past credits so that I can review my income.
    - Acceptance Criteria:
        - The page displays a list of all credit transactions fetched from the API.
        - Each credit in the list shows its description, amount, and date (in yyyy-mm-dd format).
        - All credit amounts are rounded to two decimal places.
- User Story 4: As a user on the Credits page, I want to add a new credit so that I can keep my financial records up to date.
    - Acceptance Criteria:
        - When I enter a description and amount and click "Add Credit," a new credit is added to the list.
        - The new credit is displayed with the current date.
        - The overall account balance is immediately updated to reflect the new credit.
        - The new credit amount is displayed with two decimal places.
- User Story 5: As a user on the Credits page, I want to see my account balance so that I can see how my credits impact my total balance.
    - Acceptance Criteria:
        - The current account balance is displayed on the Credits page.
        - The balance is formatted to two decimal places.

**Epic: Debits**
- User Story 6: As a user, I want to navigate to a "Debits" page from the Home page to view my spending history.
    - Acceptance Criteria:
        - Clicking the "Debits" link on the Home page redirects to the Debits page.
        - The Debits page has a clear title, such as "Debits".
- User Story 7: As a user on the Debits page, I want to see a list of all my past debits so that I can review my expenses.
    - Acceptance Criteria:
        - The page displays a list of all debit transactions fetched from the API.
        - Each debit in the list shows its description, amount, and date (in yyyy-mm-dd format).
        - All debit amounts are rounded to two decimal places.
- User Story 8: As a user on the Debits page, I want to add a new debit so that I can track my spending.
    - Acceptance Criteria:
        - When I enter a description and amount and click "Add Debit," a new debit is added to the list.
        - The new debit is displayed with the current date.
        - The overall account balance is immediately updated to reflect the new debit.
        - The new debit amount is displayed with two decimal places.
- User Story 9: As a user on the Debits page, I want to see my account balance so that I can understand how my spending affects my total balance.
    - Acceptance Criteria:
        - The current account balance is displayed on the Debits page.
        - The balance is formatted to two decimal places.

### Project Schedule
[Github Project/Gantt Chart Link](https://github.com/users/belovedEmperor/projects/4)

IMAGE WIP

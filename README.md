# Users app practice assessment

## GETTING STARTED AND SUBMITTING
1. Fork and clone this repo
1. run `npm install` to install, then `npm start` to start.
1. Implement the TODOS below.
1. Do the bonuses if you have time.
1. Functionality first, styling last.

## TODOS
1. Fetch the data from the external API. You may use `fetch`, `axios` (already installed), or something else.
1. Implement the `SearchBar` functionality. When the user types in the search bar, show only the users whose name, country, or company match the user input.
1. Implement a button that shows / hides the `about` paragraph for a user.
1. Implement an `Expand All` button
1. Implement a `Collapse All` button

### BONUS TODOS:
- Display `No results for {input}` when there are no results.
- Loading state
- Error state when the API returns an error
- Additional styling

![finished app for reference](./users-app-completed.png)

## Implementation requirements
- The API url is https://users-app-backend.onrender.com/users
- You do not need to worry about loading and error states. Do not spend time building these.
- You **must** fetch data from the API. **Do not** copy paste or hard-code data.
- **Do not** change the component tree. Do not add or remove components, or change any parent-child relationships.
- You **can** (and will have to) add props or state to the existing components.
- You **can** change or add to the styling of the components, but this is not required.


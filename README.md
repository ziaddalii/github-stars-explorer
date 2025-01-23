## Project Overview

GitHub Stars Explorer is a web application that enables users to discover GitHub repositories with the highest star counts. Leveraging the GitHub Search API, the application allows users to:

- Search for repositories and view them sorted by star count.

- View detailed information about specific repositories.

- Explore information about repository owners, such as their GitHub profile avatar, bio, location, and profile link.



The application is built using React, Material UI, and TypeScript. It incorporates modern state management with TanStack Query and ensures reliability with Jest unit testing.

- **Key Technologies:**

- React.

- Vite.

- Typescript.

- Material UI.

- Tanstack Query.

- Axios.

- Jest

---



## Features


### 1. Search Results Page

- **Functionality:**

&#x20; - Retrieve repositories sorted by the number of stars using the GitHub Search API.

&#x20; - Display each repository's name, repository's owner, star count and more.

&#x20; - Implement pagination and support URL parameters for search, enabling bookmarking and sharing.



### 2. Repository Details Page

- **Functionality:**

&#x20;   - Repository Name

&#x20;   - Repository's owner Name

&#x20;   - Repository's description

&#x20;   - Stars count

&#x20;   - A link to the repository on GitHub



### 3. Owner's Page

- **Functionality:**

&#x20;   - Owner's name

&#x20;   - GitHub profile avatar

&#x20;   - Bio

&#x20;   - Location

&#x20;   - Email

&#x20;   - Following - Followers

&#x20;   - Link to their GitHub profile


### 4. Maintenance Views

- 404 Not Found Page

- Loading Skeletons for data-fetching states.

- Data is empty message for 0 search results.

- "Something Went Wrong" for error handling.



### 5. Unit Testing

- **Testing Scope:**

&#x20; - Component rendering.

&#x20; - API interaction logic.

- **Tools:**

&#x20; - Jest and React Testing Library.



---



## Installation and Setup



### Prerequisites

- Node.js (v16+)

- npm or yarn package manager


### Installation Steps

1. Clone the repository:

```bash

git clone https://github.com/ziaddalii/github-stars-explorer.git

cd github-stars-explorer

```

2. Install dependencies:

```bash

npm install

# or

yarn install

```

4. Start the development server:

```bash

npm dev

# or

yarn dev

```

The application will be available at `http://localhost:3000`.



## Testing

Run unit tests using Jest:

```bash

npm test

# or

yarn test

```


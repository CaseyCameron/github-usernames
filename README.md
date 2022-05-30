# Planning Outline
  ## File tree
  - /views
    - Home
      - State:
        - custom hook to fetch usernames, state for status message and input
      - handleSubmit function
        - fetches a GitHub Profile if there is a profile and adds the profile to Firestore
        - sets loading to true (probable rendering dependency)
        - resets the input 
        - sets the status message
  - /components
    - Header (simple header with title)
    - UserForm (component with text box)
    - StatusMessage (component to render status message)
    - DisplayUsers (component to render gitHubProfiles)
  - ~~/hooks~~ (DELETED - complicated rendering functionality)
    ~~- useFetchUsernames~~
  - /services
    - fetchGitHubProfile
    - client.tsx - connect to FireStore
  - /utils
    - types
    - fetchProfiles (get saved profiles from FireStore)
    - addProfile (add new profile to FireStore)

  ## NoSQL document setup:
    - username : string
    - profile link : string
    - name : string
    - public_repos : number
    - public_gists : number
    - followers : number
    - following : number
    - created_at : date
# Explanation of Architecture Decisions
  - As per the instructions - there's no submit button. Treating the input as a form to best support onSubmit with key: "enter."
  - Adopted an architecture using views and (largely) dummy components. These presentational components, aside from UserForm, have no state or logic and only display data. The UserForm has one handleChange function to deal with setting the input. 
  - the useEffect's dependency is loading state so that it can be easily triggered with the handleSubmit. 

# Example of a Problem and How I Solved it
  - Originally using a custom hook for the useEffect and state dealing with data, pivoted  after recalling custom hooks can only be called from React Functional Components and not a submit handler. This clutters Home.tsx but the logic there is straightforward and understandable. 

# 3rd Party Tools
  - For utils/mungeGitHubData, I used http://json2ts.com/ to quickly convert the GitHub json object into an interface. 
  - I used tailwind for quick and efficient styling. I prefer the ease of use and setup to traditional css. 

# How to Get the App Up and Running
  - Visit the deployed site on [Netlify](link here)
  - Or clone the site from [GitHub](https://github.com/CaseyCameron/github-usernames)
    - In your terminal, choose a base folder, type `git clone https://github.com/CaseyCameron/github-usernames`
    - After successful clone, cd into the directory with `cd github-usernames`
    - If using VSCode, type `code .`
    - Open the terminal in VSCode.
    - Type `npm i`
    - After successful install type `npm start`
    - The credentials to firestore are baked in so you should be able to add and retrieve names

# Considerations
  - As an error message can be many types, I decided to cast it as type any.
  - Decided to manipulate the date timestamp as a string for ease of use.

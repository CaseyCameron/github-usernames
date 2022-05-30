# Planning Outline
  ## File tree
  - /views
    - Home
      - State:
        - formState, loading, status message, users
      - handleSubmit function
        - fetches a GitHub Profile if there is a profile and adds the profile to Firestore
        - sets loading to true ~~(probable rendering dependency)~~
        - resets the input 
        - sets the status message
  - /components
    - Header (simple header with title)
    - UserForm (component with text box)
    - StatusMessage (component to render status message)
    - DisplayUsers (component to render gitHubProfiles)
  - ~~/hooks~~ (DELETED - overcomplicated rendering functionality)
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
    - created_at : string
# Explanation of Architecture Decisions
  - As per the instructions - there's no submit button. Treating the input as a form to best support onSubmit with key: "enter."
  - Adopted an architecture using views and (largely) dummy components. These presentational components, aside from UserForm, have no state or logic and display data only. The UserForm has one handleChange function to deal with setting the input onChange. 
  - the useEffect's dependency is empty. It only needs rendering on page load. GitHub profiles added with the submitHandler will update state, triggering another reload. 

# Example of a Problem and How I Solved it
  - I originally used a custom hook for the useEffect and state dealing with firestore data. I pivoted  after recalling custom hooks can only be called from React Functional Components and not a submit handler.
  - Originally I was using loading to trigger the useEffect but realized with the setLoading logic I employed, this would cause unnecessary renders. I changed the dependency array to empty and allowed the submitHandler to trigger a rerender with a `users` state change. Also was reminded that if `<App />` is wrapped by create-react-app's default `<React.StrictMode>` it will render components twice.
  - With testing, it wasn't clear how I would access the href link on my username data. I couldn't use a .find or .href as I hadn't typed my value as an HTMLAnchorElement.
  - Listing out the values in the table, many columns in a row could contain a duplicate value. Finding an ideal solution for asserting the values in these cells meant using the data-testid query.

# 3rd Party Tools
  - For utils/mungeGitHubData, I used http://json2ts.com/ to quickly convert the GitHub json object into an interface. 
  - I used tailwind for quick and efficient styling. I prefer the ease of use and setup to traditional css. 

# How to Get the App Up and Running
  - Visit the deployed site on [Netlify](https://github-usernames.netlify.app/)
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
  - Testing
    - Basic validation test for App ensuring major elements rendered on screen
    - Basic functionality via Home.test.tsx ensuring our first user is rendered on the screen. Also behavioral testing validation listing an error for an invalid user. 
    - As deleting a user was not required as per the instructions, I did not implement that functionality. I didn't not implement validation for a user being added and then displaying with the other results, as the test would then need to delete that user. Without the delete, this test would always fail after it's initial run.
    - Implemented unit tests for DisplayUsers which encompassed functionality for GitHubUser.tsx
    - Implemented unit tests for StatusMessage regarding Success or Error message. 
    - Validated UserForm.tsx with the Home.test.tsx input box test functionality. Did not test for resetting the value of the input box as I only support form reset with a successful fetch from the GitHub api. 
    - Would have liked to support delete functionality even though it was not requested but unfortunately ran out of time. 
    - Thank you sincerely for your consideration and the opportunity to take this test. 

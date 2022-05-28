# Planning 
  - Libraries
    - tailwind
    - firebase

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
    - Search (component with text box)
    - SearchStatus (component to render status message)
    - Results (component to render gitHubProfiles)
  - /hooks
    - useFetchUsernames
  - /services
    - fetchGitHubProfile
    - client.tsx - connect to FireStore
  - /utils
    - types
    - fetchProfiles (get saved profiles from FireStore)
    - addProfile (add new profile to FireStore)

# Explanation of Architecture Decisions

# How to Get App Up and Running
  - 

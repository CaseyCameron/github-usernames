# Planning 
  ## Libraries
    - tailwind
    - firebase

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
  - /hooks
    - useFetchUsernames
  - /services
    - fetchGitHubProfile
    - client.tsx - connect to FireStore
  - /utils
    - types
    - fetchProfiles (get saved profiles from FireStore)
    - addProfile (add new profile to FireStore)

  ## Schema
    - username : string
    - profile link : string
    - name : string
    - public_repos : number
    - public_gists : number
    - followers : number
    - following : number
    - created_at : date
# Explanation of Architecture Decisions
  As per the instructions - there's no submit button. Treating the input as a form to best support onSubmit with key: "enter."

# 3rd Party Tools
  for utils/mungeGitHubData, I used http://json2ts.com/ to quickly convert the GitHub json object into an interface. 
# How to Get App Up and Running
  - 

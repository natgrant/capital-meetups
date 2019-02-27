# ReadMe:
Meetup The focus of this app is to create a place wherein people are able to communicate,  join meetups, and attend events that correspond with their specific interests. 
## Tech:
* React
* Redux
* Express
* Knex.js (SQL)
* Bulma
* JWT Auth

## User Stories
# MVP
## Homepage:
### As an Unregistered User
* I want to access a homepage that clearly demonstrates what *the application does.
* I want to see nearby events. 
* I want to see a list of categories. 
* I want to be able to register and login to an account.
* I want to access events to find basic details about the   event, the time/date/location.
* I want to access categories to show events associated with that category. 

### As a Registered User
## Info Page (Events/Meetups)
* I want to be able to join meetups.
* I want the attendees of a specific event to display on the info page. 
* I want to be redirected to login nodule if currently not logged in.

## Personal Dashboard:

* I want to see events joined. 
* I want to add and create meetups. 
* I want to search and meetups and events by category in a dropdown table. 
* I want to be able to edit, delete, update meetups, and events. (CRUD)

# Categories:
* I want to search categories and find information about specific categories(e.g. Coffee, walking, beers) 
* I want events to display that are related to the particular category.
* I want to join events from the category page. 

# Stretch

* I want to be able to chat with other members of the site.
* I want to see events that relate to the categories and prior events I have attended. 

# Todos
-	[x] Write ReadMe
-	[x] Plan Project
-	[x] Create Repo 
-	[x] Push boilerplate to Repo

# Team Composition
|Member | Role
|---------|---------|
|Alex     | B/E & Scrum Master|
|Ranjit   | F/E Lead|
|Nat      | Project Manager & B/E Lead|
|Arpo	    | F/E & Git Master|
|Harry    | F/E|


# Views(Client Side)

| name | purpose|
| --- | --- |
| login | View for user to enter their login credentials |
| register | View for user to sign up for the App |nav | Login and register, events and categories |
| home | Title page, displays events and categories |
| eventInfo | Event date/location/time and join button |
| dashboard | Displays the users upcoming events (suggested events (Stretch)) |
| categoryPage | Displays events associated with current categories |


# Reducers

|name | purpose |
| --- | --- |
| auth | Store information regarding user logins, auth status and auth errors |
| events | Store the array of pets that have been found (from db) |

# Actions
| name | purpose|
| --- | --- |
| RECEIVE_EVENTS | For retrieving upcoming event|
| ADD_EVENTS | For adding events |
| DELETE_EVENTS | For deleting events |
| UPDATE_EVENTS | For updating events |
| GET_EVENT_BY | For retrieving event by category|

# API(Client – Server)
| Method | Endpoint | 
| --- | --- | 
| POST| api/auth/login |
| POST | api/auth/register |
| GET | /events |
| GET | /categories |
| GET | /events/:event |
| GET | /categories/:category |


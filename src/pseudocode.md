## Must 

1. Dynamically Render the content with React using components.
2. Use Local Storage to store all to-do list data in the browser.
3. Display all to-do list items.
4. Three Views:
* All
* Completed
* To-Do
5. Display prompting text to add item
6. Cross out or check off one item as "completed"
7. See a count of the remaining to-do items.
8. Remove one item (soft delete/archive)
9. Check off or cross out all item,s in one click as a completed all function
10. Remove all completed items
11. Press a button and all checked off items become active again

## Components

1. Input
2. Status Button
3. To-do Item
* Status: 'active', 'done'
* Label: what the to-do actually is
* ID: Give a random ID

## Functions
1. Add a to-do.
2. Delete a to-do.
3. Check status of to-do.
4. Mark 'Completed':
* Click the check button to complete
* Find that Todo in the list of to-dos
* Change the to-do status to completed
* Save it to the app state and local storage
* Disable the check box and slash out the text
5. 'Delete' a to-do:
* Click the delete button
* Find that to-do in the list of to-dos
* Remove it from the app state and local storage
* Remove from the list 

## Handlers
* onClick to switch between status buttons
* onSubmit for input value
* onClick to mark as completed
* onClick to delete

## View
* Input
* To-dos
* Status Buttons
* Active to-dos still remaining
* Complete all 
* Clear all

## Input
* Insert an input box
* State needs to be active status
* Needs to update storage
* Clear input after submitted
* Get unique ID and save the input
* Event listeners: onSubmit/keydown e.key .... e.target.value....

## Status Button
* All, Completed, To-Do
* Add onClick to show only the ones that go with that status

## States
1. To-do State 
* Update the state of the to-do when added, etc.


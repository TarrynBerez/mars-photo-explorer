## Event Listener 
- The first breakpoint was put at the event listener. The event listener is called once the show images button is clicked. It works as expected and shows 3 photos from the selected day if the day given is valid.

## Fetch
- The second breakpoint is when the api is getting fetched. this worked as expected as it successfully fetches the api if a valid date is given.

## ImgContainer append
- The third breakpoint is where the images are appended to the img-container. If the user inputs a valid date, it successfully returns 3 photos.

## Critical State
- The critical state i chose is if the user gives an invalid input, the user will get an error message telling them what they did wrong. This is critical because if a user puts in the input wrong, they need to know why it isn't working. the state works as expected, if they put in the date wrong, they get an error for invalid format and if its blank they are asked to input a date.
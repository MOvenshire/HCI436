// Client ID and API key from the Developer Console
var CLIENT_ID = '108116285373-i23ofqgt8r0ncvgs84v1vmqr3g18eefh.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDYaqxXUwzBpungYW7eEEqAaH5DRdv-s6Q';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];


// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.events";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        signoutButton.style.display = 'block';
        listUpcomingEvents(); // Fetch and display events when logged in
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
        $('#calendar').fullCalendar('removeEventSources'); // Optionally clear the calendar
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

function createGoogleCalendarEvent(eventData) {
    var event = {
        'summary': eventData.title,
        'location': '',
        'description': eventData.description,
        'start': {
            'dateTime': eventData.start,
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': eventData.end,
            'timeZone': 'America/Los_Angeles'
        },
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function(event) {
        console.log('Event created: ' + event.htmlLink);
        alert('Event created: ' + event.htmlLink);
    });
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(function(response) {
        var events = response.result.items;
        appendPre('Upcoming events:');
        if (events.length > 0) {
            var formattedEvents = events.map(function(event) {
                return {
                    title: event.summary,
                    start: event.start.dateTime || event.start.date, // Handle all-day events
                    end: event.end.dateTime || event.end.date,
                    color: '#ff9f89' // Optional: Assign a color
                };
            });
            $('#calendar').fullCalendar('addEventSource', formattedEvents);
        } else {
            appendPre('No upcoming events found.');
        }
    });
}

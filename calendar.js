let uglyeventsArr = [
        { title: 'HIST 106', start: '2024-04-15 11:16:18', end: '2024-04-15 12:03:16', priority: '2', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'MATH 251', start: '2024-04-16 13:33:41', end: '2024-04-16 14:29:30', priority: '1', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'ECEN 214', start: '2024-04-17 10:39:18', end: '2024-04-17 11:19:11', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'CSCE 436', start: '2024-04-18 15:19:22', end: '2024-04-18 16:12:23', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'MATH 251', start: '2024-04-19 15:34:21', end: '2024-04-19 16:30:55', priority: '2', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'ECEN 214', start: '2024-04-15 10:14:32', end: '2024-04-15 11:10:04', priority: '1', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'ECEN 214', start: '2024-04-16 14:52:14', end: '2024-04-16 15:27:01', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'CSCE 436', start: '2024-04-17 09:38:43', end: '2024-04-17 10:34:09', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'Capstone', start: '2024-04-18 13:36:58', end: '2024-04-18 14:33:17', priority: '2', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'Capstone', start: '2024-04-19 14:52:47', end: '2024-04-19 15:39:07', priority: '1', allDay: false, eventtype: "study", flexible: "no"},
        { title: 'Research', start: '2024-04-15 10:55:38', end: '2024-04-15 17:36:24', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-16 12:38:10', end: '2024-04-16 16:14:55', priority: '1', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-17 10:05:23', end: '2024-04-17 13:00:31', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-18 10:16:38', end: '2024-04-18 14:13:17', priority: '3', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-19 13:18:05', end: '2024-04-19 16:07:22', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Officer Meeting', start: '2024-04-14 16:09:38', end: '2024-04-14 19:01:22', priority: '2', allDay: false, eventtype: "meeting", flexible: "no"},
        { title: 'Group Project Meeting', start: '2024-04-17 9:21:41', end: '2024-04-17 12:07:37', priority: '2', allDay: false, eventtype: "meeting", flexible: "yes"},
        { title: 'Student Organization', start: '2024-04-15 09:40:53', end: '2024-04-15 10:20:45', priority: '2', allDay: false, eventtype: "meeting", flexible: "no"},
        { title: 'Advisor Meeting', start: '2024-04-16 09:45:31', end: '2024-04-16 10:25:45', priority: '2', allDay: false, eventtype: "meeting", flexible: "no"}, 
        { title: "Library Study Session", start: "2024-04-14 13:00:00", end: "2024-04-14 15:00:00", priority: '2', allday: false, eventtype: "study", flexible: "yes"},
        { title: "Lunch with Friends", start: "2024-04-15 12:30:00", end: "2024-04-15 13:30:00", priority: '0', allday: false, eventtype: "social", flexible: "yes"},
        { title: "Volunteer Work", start: "2024-04-16 09:00:00", end: "2024-04-16 11:00:00", priority: '0', allday: false, eventtype: "service", flexible: "yes"},
        { title: "Grocery Shopping", start: "2024-04-17 16:00:00", end: "2024-04-17 17:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Gym Workout", start: "2024-04-18 07:00:00", end: "2024-04-18 08:00:00", priority: '0', allday: false, eventtype: "health", flexible: "yes"},
        { title: "Dinner with Family", start: "2024-04-19 18:30:00", end: "2024-04-19 19:30:00", priority: '0', allday: false, eventtype: "social", flexible: "yes"},
        { title: "Movie Night", start: "2024-04-20 19:00:00", end: "2024-04-20 21:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Coffee Break", start: "2024-04-21 10:00:00", end: "2024-04-21 10:30:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Yoga Class", start: "2024-04-22 18:00:00", end: "2024-04-22 19:00:00", priority: '0', allday: false, eventtype: "health", flexible: "yes"},
        { title: "Networking Event", start: "2024-04-23 17:30:00", end: "2024-04-23 19:00:00", priority: '0', allday: false, eventtype: "career", flexible: "yes"},
        { title: "Dog Walk", start: "2024-04-24 15:00:00", end: "2024-04-24 15:30:00", priority: '2', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Read Book", start: "2024-04-25 20:00:00", end: "2024-04-25 21:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Cooking Class", start: "2024-04-26 16:00:00", end: "2024-04-26 18:00:00", priority: '0', allday: false, eventtype: "hobby", flexible: "yes"},
        { title: "Board Game Night", start: "2024-04-27 19:00:00", end: "2024-04-27 22:00:00", priority: '0', allday: false, eventtype: "social", flexible: "yes"},
        { title: "Visit Art Gallery", start: "2024-04-28 11:00:00", end: "2024-04-28 13:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Home Cleaning", start: "2024-04-29 09:00:00", end: "2024-04-29 11:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
        { title: "Watch Soccer Match", start: "2024-04-30 15:00:00", end: "2024-04-30 17:00:00", priority: '0', allday: false, eventtype: "sports", flexible: "yes"},
        { title: "Painting Class", start: "2024-05-01 14:00:00", end: "2024-05-01 16:00:00", priority: '0', allday: false, eventtype: "hobby", flexible: "yes"},
        { title: "Tech Workshop", start: "2024-05-02 10:00:00", end: "2024-05-02 12:00:00", priority: '0', allday: false, eventtype: "career", flexible: "yes"},
        { title: "Bike Ride", start: "2024-05-03 07:30:00", end: "2024-05-03 09:00:00", priority: '0', allday: false, eventtype: "health", flexible: "yes"},
        { title: "Dance Class", start: "2024-05-04 18:00:00", end: "2024-05-04 19:30:00", priority: '0', allday: false, eventtype: "hobby", flexible: "yes"}
];
let cleaneventsArr = [
    { title: 'HIST 106', start: '2024-04-15 11:16:18', end: '2024-04-15 12:03:16', priority: '2', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'MATH 251', start: '2024-04-16 13:33:41', end: '2024-04-16 14:29:30', priority: '1', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'ECEN 214', start: '2024-04-17 10:39:18', end: '2024-04-17 11:19:11', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'CSCE 436', start: '2024-04-18 15:19:22', end: '2024-04-18 16:12:23', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'MATH 251', start: '2024-04-19 15:34:21', end: '2024-04-19 16:30:55', priority: '2', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'ECEN 214', start: '2024-04-15 10:14:32', end: '2024-04-15 11:10:04', priority: '1', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'ECEN 214', start: '2024-04-16 14:52:14', end: '2024-04-16 15:27:01', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'CSCE 436', start: '2024-04-17 09:38:43', end: '2024-04-17 10:34:09', priority: '3', allDay: false, eventtype: "study", flexible: "no"},
    //{ title: 'Capstone', start: '2024-04-18 13:36:58', end: '2024-04-18 14:33:17', priority: '2', allDay: false, eventtype: "study", flexible: "no"},
    { title: 'Capstone', start: '2024-04-19 14:52:47', end: '2024-04-19 15:39:07', priority: '1', allDay: false, eventtype: "study", flexible: "no"},
    //{ title: 'Research', start: '2024-04-15 10:55:38', end: '2024-04-15 17:36:24', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
    { title: 'Research', start: '2024-04-16 12:38:10', end: '2024-04-16 16:14:55', priority: '1', allDay: false, eventtype: "study", flexible: "yes"},
    //{ title: 'Research', start: '2024-04-17 10:05:23', end: '2024-04-17 13:00:31', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
    { title: 'Research', start: '2024-04-18 10:16:38', end: '2024-04-18 14:13:17', priority: '3', allDay: false, eventtype: "study", flexible: "yes"},
    { title: 'Research', start: '2024-04-19 13:18:05', end: '2024-04-19 16:07:22', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
    { title: 'Officer Meeting', start: '2024-04-14 16:09:38', end: '2024-04-14 19:01:22', priority: '2', allDay: false, eventtype: "meeting", flexible: "no"},
    //{ title: 'Group Project Meeting', start: '2024-04-17 9:21:41', end: '2024-04-17 12:07:37', priority: '2', allDay: false, eventtype: "meeting", flexible: "yes"},
    //{ title: 'Student Organization', start: '2024-04-15 09:40:53', end: '2024-04-15 10:20:45', priority: '2', allDay: false, eventtype: "meeting", flexible: "no"},
    //{ title: 'Advisor Meeting', start: '2024-04-16 09:45:31', end: '2024-04-16 10:25:45', priority: '2', allDay: false, eventtype: "meeting", flexible: "no"}, 
    { title: "Library Study Session", start: "2024-04-14 13:00:00", end: "2024-04-14 15:00:00", priority: '2', allday: false, eventtype: "study", flexible: "yes"},
    //{ title: "Lunch with Friends", start: "2024-04-15 12:30:00", end: "2024-04-15 13:30:00", priority: '0', allday: false, eventtype: "social", flexible: "yes"},
    { title: "Volunteer Work", start: "2024-04-16 09:00:00", end: "2024-04-16 11:00:00", priority: '0', allday: false, eventtype: "service", flexible: "yes"},
    { title: "Grocery Shopping", start: "2024-04-17 16:00:00", end: "2024-04-17 17:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
    //{ title: "Gym Workout", start: "2024-04-18 07:00:00", end: "2024-04-18 08:00:00", priority: '0', allday: false, eventtype: "health", flexible: "yes"},
    { title: "Dinner with Family", start: "2024-04-19 18:30:00", end: "2024-04-19 19:30:00", priority: '0', allday: false, eventtype: "social", flexible: "yes"},
    { title: "Movie Night", start: "2024-04-20 19:00:00", end: "2024-04-20 21:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
    //{ title: "Coffee Break", start: "2024-04-21 10:00:00", end: "2024-04-21 10:30:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
    { title: "Yoga Class", start: "2024-04-22 18:00:00", end: "2024-04-22 19:00:00", priority: '0', allday: false, eventtype: "health", flexible: "yes"},
    { title: "Networking Event", start: "2024-04-23 17:30:00", end: "2024-04-23 19:00:00", priority: '0', allday: false, eventtype: "career", flexible: "yes"},
    //{ title: "Dog Walk", start: "2024-04-24 15:00:00", end: "2024-04-24 15:30:00", priority: '2', allday: false, eventtype: "personal", flexible: "yes"},
    //{ title: "Read Book", start: "2024-04-25 20:00:00", end: "2024-04-25 21:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
    //{ title: "Cooking Class", start: "2024-04-26 16:00:00", end: "2024-04-26 18:00:00", priority: '0', allday: false, eventtype: "hobby", flexible: "yes"},
    { title: "Board Game Night", start: "2024-04-27 19:00:00", end: "2024-04-27 22:00:00", priority: '0', allday: false, eventtype: "social", flexible: "yes"},
    //{ title: "Visit Art Gallery", start: "2024-04-28 11:00:00", end: "2024-04-28 13:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
    { title: "Home Cleaning", start: "2024-04-29 09:00:00", end: "2024-04-29 11:00:00", priority: '0', allday: false, eventtype: "personal", flexible: "yes"},
    //{ title: "Watch Soccer Match", start: "2024-04-30 15:00:00", end: "2024-04-30 17:00:00", priority: '0', allday: false, eventtype: "sports", flexible: "yes"},
    //{ title: "Painting Class", start: "2024-05-01 14:00:00", end: "2024-05-01 16:00:00", priority: '0', allday: false, eventtype: "hobby", flexible: "yes"},
    //{ title: "Tech Workshop", start: "2024-05-02 10:00:00", end: "2024-05-02 12:00:00", priority: '0', allday: false, eventtype: "career", flexible: "yes"},
    { title: "Bike Ride", start: "2024-05-03 07:30:00", end: "2024-05-03 09:00:00", priority: '0', allday: false, eventtype: "health", flexible: "yes"}
    //{ title: "Dance Class", start: "2024-05-04 18:00:00", end: "2024-05-04 19:30:00", priority: '0', allday: false, eventtype: "hobby", flexible: "yes"}
];

var useCleanEvents = false;
$('#toggleClean').click(function() {
    // Toggle the useCleanEvents variable
    useCleanEvents = !useCleanEvents;

    // Re-render the calendar
    $('#calendar').fullCalendar('refetchEvents');
});

$(document).ready(function() {
    // Initialize the calendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: new Date(),
        editable: true,
        navLinks: true,
        eventLimit: false,
        events: function(start, end, timezone, callback) {
            var storedEvents = localStorage.getItem('events');
            var combine = [];
            if (storedEvents) {
                combine = JSON.parse(storedEvents).map(event => ({
                    ...event,
                    color: determineColor(event.priority),
                    title: `${event.title} - ${event.eventtype} (Priority: ${event.priority})`,
                    start: event.start,
                    end: event.end
                }));
            }

            //do logic for clean vs ugly
            var eventsArr = useCleanEvents ? cleaneventsArr : uglyeventsArr;
            // Concatenate events from eventsArr
            combine = combine.concat(eventsArr.map(event => ({
                ...event,
                color: determineColor(event.priority),
                title: `${event.title} - ${event.eventtype} (Priority: ${event.priority})`,
                start: event.start,
                end: event.end
            })));
            var weeklyEvents = generateWeeklyEvents(eventsArr);
            combine = combine.concat(weeklyEvents.map(event=>({
                ...event,
                color: determineColor(event.priority),
                title: `${event.title} - ${event.eventtype} (Priority: ${event.priority})`,
                start: event.start,
                end: event.end
            })));
            callback(combine);
        }
    });
});
function determineColor(priority) {
    switch (priority) {
        case '1': return '#9AC893'; 
        case '2': return '#E7F094'; 
        case '3': return '#D89A9E';
        default: return '#9DD2EE';
    }

}

function clearFormFields() {
    $('#EventName').val('');
    $('#StartDate').val('');
    $('#EndDate').val('');
    $('input[name=eventtype]').prop('checked', false);
    $('input[name=priority]').prop('checked', false);
    $('input[name="Flexible"]').prop('checked', false);
}

function generateWeeklyEvents(events) {
    var recurringEvents = [];
    var weeksToRepeat = 4; // Adjust this as needed

    events.forEach(event => {
        var startDate = moment(event.start);
        var endDate = moment(event.end);
        for (var i = 1; i <= weeksToRepeat; i++) {
            var newEvent = {
                ...event,
                start: startDate.clone().add(i, 'weeks').format(),
                end: endDate.clone().add(i, 'weeks').format()
            };
            recurringEvents.push(newEvent);
        }
    });
    return recurringEvents;
}
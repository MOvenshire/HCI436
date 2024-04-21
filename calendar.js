let eventsArr = [
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
        { title: 'Research', start: '2024-04-15 10:55:38', end: '2024-04-15 17:36:24', priority: '0', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-16 12:38:10', end: '2024-04-16 16:14:55', priority: '1', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-17 10:05:23', end: '2024-04-17 13:00:31', priority: '2', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-18 10:16:38', end: '2024-04-18 14:13:17', priority: '3', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Research', start: '2024-04-19 13:18:05', end: '2024-04-19 16:07:22', priority: '0', allDay: false, eventtype: "study", flexible: "yes"},
        { title: 'Officer Meeting', start: '2024-04-14 16:09:38', end: '2024-04-14 19:01:22', priority: 2, allDay: false, eventtype: "meeting", flexible: "no"},
        { title: 'Group Project Meeting', start: '2024-04-17 9:21:41', end: '2024-04-17 12:07:37', priority: 2, allDay: false, eventtype: "meeting", flexible: "yes"},
        { title: 'Student Organization', start: '2024-04-15 09:40:53', end: '2024-04-15 10:20:45', priority: 2, allDay: false, eventtype: "meeting", flexible: "no"},
        { title: 'Advisor Meeting', start: '2024-04-16 09:45:31', end: '2024-04-16 10:25:45', priority: 2, allDay: false, eventtype: "meeting", flexible: "no"}
];


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
        case '3': return '#D8775A';
        default: return '#83B4D8';
    }

}

function clearFormFields() {
    $('#EventName').val('');
    $('#StartDate').val('');
    $('#EndDate').val('');
    $('input[name="EventType"]').prop('checked', false);
    $('input[name="Priority"]').prop('checked', false);
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
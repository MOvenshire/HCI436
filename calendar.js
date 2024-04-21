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
        eventLimit: true,
        events: function(start, end, timezone, callback) {
            var storedEvents = localStorage.getItem('events');  // Changed from 'newEvents' to 'events'
            if (storedEvents) {
                storedEvents = JSON.parse(storedEvents).map(event => ({
                    ...event,
                    color: determineColor(event.priority),  // Apply color based on priority
                    title: `${event.title} - ${event.eventtype} (Priority: ${event.priority})`,
                    start: event.start,  // Ensure date format is correct
                    end: event.end
                }));
                callback(storedEvents);
            } else {
                callback([]);
            }
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


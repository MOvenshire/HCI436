$(document).ready(function() {
    // Initialize the FullCalendar
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
            var storedEvents = localStorage.getItem('events');
            if (storedEvents) {
                storedEvents = JSON.parse(storedEvents).map(event => ({
                    ...event,
                    color: determineColor(event.priority),  // Apply color based on priority
                    title: `${event.title} - ${event.eventtype} (Priority: ${event.priority})`
                }));
                callback(storedEvents);
            }
        }
    });

    // Event listener for form submissions
    $('#eventForm').submit(function(e) {
        e.preventDefault();

        var newEvent = {
            title: $('#EventName').val(),
            start: $('#StartDate').val(),
            end: $('#EndDate').val(),
            eventtype: $('input[name="EventType"]:checked').val(),
            priority: $('input[name="Priority"]:checked').val(),
            flexible: $('input[name="Flexible"]:checked').val() === 'Yes' ? 'Yes' : 'No'
        };

        // Fetch existing events from local storage or initialize an empty array if none exist
        var events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(events));

        // Optionally refresh the calendar view
        $('#calendar').fullCalendar('renderEvent', newEvent, true);

        clearFormFields();
        alert('Event saved! Navigate to the calendar page to see it.');
    });

    function determineColor(priority) {
        switch (priority) {
            case '1': return '#ffadad'; // Light red
            case '2': return '#ffd6a5'; // Light orange
            case '3': return '#fdffb6'; // Light yellow
            default: return '#caffbf'; // Light green
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
});

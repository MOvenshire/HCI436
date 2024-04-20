$(document).ready(function() {
    // Initialize the calendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: new Date(),
        navLinks: true,
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: function(start, end, timezone, callback) {
            // Load events from an ics file
            $.ajax({
                url: 'https://calendar.google.com/calendar/ical/c_800cb48af5701640c07ed8afd353fe6c21f346c99cbc25e7215be7e60725c180%40group.calendar.google.com/public/basic.ics', // URL to your .ics file
                dataType: 'text',
                success: function(data) {
                    var events = [];
                    var jcalData = ICAL.parse(data);
                    var comp = new ICAL.Component(jcalData);
                    var vevents = comp.getAllProperties('vevent');
                    vevents.forEach(function(vevent) {
                        var event = new ICAL.Event(vevent);
                        events.push({
                            title: event.summary,
                            start: event.startDate.toJSDate(),
                            end: event.endDate.toJSDate()
                        });
                    });
                    callback(events);
                }
            });
        }
    });

    // Handle form submission
    $('#eventForm').submit(function(e) {
        e.preventDefault();  // Prevent the default form submission

        var eventName = $('#EventName').val();
        var startDate = $('#StartDate').val();
        var endDate = $('#EndDate').val();

        // Add event to the calendar
        $('#calendar').fullCalendar('renderEvent', {
            title: eventName,
            start: startDate,
            end: endDate,
            allDay: true  // or determine based on your start/end times
        });

        // Optionally, clear the form fields
        $('#EventName').val('');
        $('#StartDate').val('');
        $('#EndDate').val('');
    });
});
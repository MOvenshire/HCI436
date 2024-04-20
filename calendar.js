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
        eventLimit: true
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
$(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            // {
            //     title: 'All Day Event',
            //     start: '2024-12-01'
            // },
            // {
            //     title: 'Long Event',
            //     start: '2016-12-07',
            //     end: '2024-12-10'
            // },
            // {
            //     id: 999,
            //     title: 'Repeating Event',
            //     start: '2024-12-09T16:00:00'
            // },
            // {
            //     id: 999,
            //     title: 'Repeating Event',
            //     start: '2024-12-16T16:00:00'
            // },
            // {
            //     title: 'Conference',
            //     start: '2016-12-11',
            //     end: '2024-12-13'
            // },
            // {
            //     title: 'Meeting',
            //     start: '2016-12-12T10:30:00',
            //     end: '2024-12-12T12:30:00'
            // },
            // {
            //     title: 'Lunch',
            //     start: '2016-12-12T12:00:00'
            // },
            // {
            //     title: 'Meeting',
            //     start: '2016-12-12T14:30:00'
            // },
            //     title: 'Click for Google',
            //     url: 'https://google.com/',
            //     start: '2016-12-28'
            // }
        ]
    });

});
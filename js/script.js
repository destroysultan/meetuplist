
function loadData() {

    var $body = $('body');
    var $meetupHeaderElem = $('#meetups-header');
    var $meetupElem = $('#meetup-meetups');

    // clear out old data before new request
    $meetupHeaderElem.text("");
    $meetupElem.text("");

//     var apiKey = '5451f193663394e21275a7216e674c';
//     var meetupURL = 'https://api.meetup.com/2/?member_id=94577562&offset=0&format=json&limited_events=False&photo-host=public&page=20&fields=self&order=time&desc=false&status=upcoming&sig_id=94577562&sig=c660e6d4dcb900504966d0e709963cbf42cbec82';

//     $.getJSON(meetupURL, function(data) {
//         console.log(data);
//         $meetupHeaderElem.text('Upcoming meetups for Troy'); //fix this to update actual user name

//         var meetupEvents = data.response.results;
//         for (var i = 0; i < meetupEvents.length; i++) {
//             var meetup = meetupEvents[i];
//             $meetupElem.append('<li class="meetup">' + '<a href="'+meetupEvents.event_url+'">'+meetupEvents.name + '</a>' + '<p>' + meetupEvents.description + '</p>' + '</li>');
//         };
//     }).error(function(e) {
//         $meetupHeaderElem.text('Oh no! We couldn\'t load any events.');
//     });


//     return false;
// };  



    var meetupURL = 'https://api.meetup.com/2/events?member_id=94577562&offset=0&format=json&limited_events=False&photo-host=public&page=20&fields=self&order=time&desc=false&status=upcoming&sig_id=94577562&sig=c660e6d4dcb900504966d0e709963cbf42cbec82';

    var meetupRequestTimeout = setTimeout(function() {
        $meetupElem.text("Oh no! We couldn\'t load any events.");
    }, 5000);

    $.ajax({
        url: meetupURL,
        dataType: "jsonp",
        //jsonp: "callback",
        success: function(response) {
            var meetupList = response.results;
            for (var i = 0; i < meetupList.length; i++) {
                var meetup = meetupList[i];
                $meetupElem.append('<li class="meetup">' + '<a href="'+meetup.event_url+'">'+meetup.name + '</a>' + '</li>');
                
            };

            clearTimeout(meetupRequestTimeout);
        }
    });

    return false;
};  

$(document).ready(function() {
    loadData();
});
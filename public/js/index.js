// function subscribeEmail() {
//     var email = document.getElementById("emailInput").value;

//     $.post("http://us12.api.mailchimp.com/3.0/lists/bf87b78c48/members", {
//             "email_address": email,
//             "status": "subscribed",
//         },
//         function (data, status) {
//             alert("Data: " + data + "\nStatus: " + status);
//         });
// }

// $("#purchase-tickets-button").click(function () {
//     var is_safari = navigator.userAgent.indexOf("Safari") > -1;
//     // Chrome has Safari in the user agent so we need to filter (https://stackoverflow.com/a/7768006/1502448)
//     var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
//     if ((is_chrome) && (is_safari)) {
//         is_safari = false;
//     }
//     if (is_safari) {
//         window.open('https://events.amanda-ai.com/e/1/embed');
//         // See if cookie exists (https://stackoverflow.com/a/25617724/1502448)
//     } else {
//         $("#ticket-purchasing-section").show();
//     }
// });
// Helped me https://stackoverflow.com/questions/14693758/passing-form-data-to-another-html-page && https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

const message = document.getElementById('message');

const urlParams = new URLSearchParams(window.location.search);
const fullName = urlParams.get('firstName') + ' ' + urlParams.get('lastName');
const date = urlParams.get('date');
const time = urlParams.get('time');
const massageTherapist = urlParams.get('massageTherapist');
const massageType = urlParams.get('massageType');
const frequency = urlParams.get('frequency')

message.innerText = 'Hi ' + fullName + ', your ' + massageType + ' Massage appointment with ' + massageTherapist + ' is confirmed for the ' + date + ' at ' + time + '. This appointment will happen ' + frequency + '.';
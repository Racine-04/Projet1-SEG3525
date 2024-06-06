// https://www.youtube.com/watch?v=In0nB0ABaUk and https://www.youtube.com/watch?v=wKBu_dEaF9E helped me

const form = document.getElementById('form');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const number = document.getElementById('number');

const massageType = document.getElementById('massageType');
const massageTherapist = document.getElementById('massageTherapist');
const date = document.getElementById('date');
const time = document.getElementById('time');

console.log(massageTherapist.value);

// https://stackoverflow.com/questions/47058077/how-can-i-add-an-event-listener-to-a-select-element
massageTherapist.addEventListener("change", function() {
    switch(massageTherapist.value) {
        case 'Maya Thompson':
            time.innerHTML = '<option value="Select">Select a Time</option>\n<option value="9:00 am">9:00 am</option>\n<option value="10:00 am">10:000 am</option>\n<option value="11:30 am">11:30 am</option>\n<option value="12:30 pm">12:30 pm</option>\n<option value="5:00 pm">5:00 pm</option>\n<option value="11:30 am">11:30 am</option>\n<option value="9:00 pm">9:00 pm</option>\n';
            break;
        case 'Sophia Nguyen':
            time.innerHTML = '<option value="Select">Select a Time</option><option value="9:30 am">9:30 am</option><option value="3:00 pm">3:00 pm</option><option value="4:00 pm">4:00 pm</option><option value="5:00 pm">5:00 pm</option><option value="7:30 pm">7:30 pm</option><option value="8:30 pm">8:30 pm</option>'
            break;
        case 'Olivia Rivera':
            time.innerHTML = '<option value="Select">Select a Time</option><option value="10:30 am">10:30 am</option><option value="11:30 am">11:30 am</option><option value="1:00 pm">1:00 pm</option><option value="4:00 pm">4:00 pm</option><option value="6:30 pm">6:30 pm</option><option value="8:00 pm">8:00 pm</option><option value="9:30 pm">9:30 pm</option>'
            break;
        case 'Ava Patel':
            time.innerHTML = '<option value="Select">No time available left. Choose a different Massage Therapist.</option>'
            break;
        default:
            time.innerHTML = '<option value="Select">Select a Time</option>\n<option value="Select">Select a massage therapist to find out what times she is available</option>'
    }
})

form.addEventListener('submit', (e) => {
    if(massageTherapist.value == 'Select'){
        e.preventDefault();
        alert("Select a valid Massage Therapist");
    }

    if(time.value == 'Select'){
        e.preventDefault();
        alert("Select a valid time");
    }

    if(massageType.value == 'Select'){
        e.preventDefault();
        alert("Select a valid type of Massage");
    }
})

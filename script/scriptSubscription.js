function confirmation(){
    const fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const form = document.getElementById('subscriptionForm');

    const message = 'Thank you, ' + fullName + ', for applying for our subscription. We will send you more details at ' + email + '.';
    alert(message);

    // https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
    form.reset();
}
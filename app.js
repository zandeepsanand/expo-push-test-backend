const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Define your Expo push token
// const expoPushToken = 'ExponentPushToken[dT-yVuEyHU9qkal8Kw0VFz]'; //iphone
const expoPushToken = 'ExponentPushToken[Sp09zgJ1aKqjxG_oPkB9N_]'
app.get('/send-notification', (req, res) => {
  // Define the notification content
  const notification = {
    to: expoPushToken,
    title: 'Fitaraise',
    body: 'ഇങ്ങനൊക്കെ  നടന്നാൽ മതിയോ.  ഒന്ന് workout  ഒക്കെ ചെയ്യന്നെ ',
  };

  // Send the notification using the Expo API
  axios.post('https://exp.host/--/api/v2/push/send', notification)
    .then(response => {
      console.log('Notification sent successfully:', response.data);
      res.send('Notification sent successfully.');
    })
    .catch(error => {
      console.error('Error sending notification:', error);
      res.status(500).send('Error sending notification.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

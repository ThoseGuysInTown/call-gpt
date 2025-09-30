require('dotenv').config();

// You can use this function to make a
// test call to your application by running
// npm inbound
async function makeInboundCall() {
  const VoiceResponse = require('twilio').twiml.VoiceResponse;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  
  const client = require('twilio')(accountSid, authToken);
  
  let twiml = new VoiceResponse();
  twiml.pause({ length: 2 });
  twiml.say('Hello! Thank you this is Kevin, I\'m needing help with my father who has been struggling with his medication adherence lately.');
  twiml.pause({ length: 3 });
  twiml.say('Can I schedule a meeting to discuss some options?');
  twiml.hangup();

  console.log(twiml.toString());
  console.log(process.env.APP_NUMBER);
  
  await client.calls
    .create({
      twiml: twiml.toString(),
      to: process.env.APP_NUMBER,
      from: process.env.FROM_NUMBER
    })
    .then(call => console.log(call.sid));
}  

makeInboundCall();
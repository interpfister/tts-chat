Use this library to type text to speak. Built for use with Virtual Audio Cable to enable text to speech on conference calls.

First install Virtual Audio Cable: http://vb-audio.pagesperso-orange.fr/Cable/

Then launch your phone application (e.g. Zoom or Skype) and set the virtual audio cable as your input.

Then launch this application and use it to type text for your conference call. This will enable you to listen to the audio but type text to speak. Very useful for quiet places where you can't talk!

Usage:
Run `npm install` to download dependencies.

Run `npm start` to launch the application.


Virtual Audio Cable configuration on Windows:
Basically the idea here is to route your regular sound output to the virtual microphone input, then route only the audio output from the call to your real audio output.

* Open Windows Sound settings in Control Panel.
* Under Playback, right-click CABLE Input and click Set as Default Device.
* In Skype or other VOIP tool, set Microphone to CABLE Output and Speakers to your regular sound card speaker output.

Note: When you're done with your call be sure to change your Windows Playback default device back to your regular speakers.
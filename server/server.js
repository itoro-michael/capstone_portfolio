
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => 
{
	// code to run on server at startup
	process.env.MAIL_URL = 'smtp://postmaster%40sandbox14dd888e767a46209cbb014174bdcb3d.mailgun.org:fe59c0eaa8fe64dddfa5251125155d14@smtp.mailgun.org:587';
});

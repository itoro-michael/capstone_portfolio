
import { Email } from 'meteor/email'


Meteor.methods(
{
	// method to send email to site admin.
	'send_email':function(to, from, subject, text) 
	{
		// Make sure that all arguments are strings.
		check([to, from, subject, text], [String]);
		
		// Let other method calls from the same client start running, without
		// waiting for the email sending to complete.
		this.unblock();
		Email.send({ to, from, subject, text });
	},
	
	// method to send acknowledgement autoresponder.
	'send_acknowledge':function(to, from, subject, text) 
	{
		// Make sure that all arguments are strings.
		check([to, from, subject, text], [String]);
		
		// Let other method calls from the same client start running, without
		// waiting for the email sending to complete.
		this.unblock();
		Email.send({ to, from, subject, text });
	}
});


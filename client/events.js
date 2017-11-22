
Template.navbar_template.events(
{
	//Add active class when contact navbar link is clicked
	'click #contact-href': function(event)
	{
		$("#contact-href").addClass("active");
	}
});

Template.homepage_body_template.events(
{
	//Add active class when contact.html is called
	'click #call-or-message': function(event)
	{
		$("#contact-href").click();
	},
	
	//Handle router, since not working for class btn
	'click #btn-about': function(event)
	{
		/* Router.go('/#about');
		event.preventDefault(); */
		var element=$("#"+"about");
		var scrollTop = element.offset().top;
		$("html,body").animate(
		{
			scrollTop: (scrollTop - 50)
		}, 1000, "easeInOutExpo");
	}
});

var track = false;
Template.contact_body_template.events(
{
	'submit #contactForm':function(event, template)
	{
		event.preventDefault();
		var emailAddr = template.find('#email').value;
		var emailSubject = template.find('#name').value;
		var emailMessage = template.find('#message').value;
		
		// Client: Asynchronously send an email.
		//Syntax: to, from, subject, text
		Meteor.call('send_email',
			'Itoro Ikon <itoroikon@gmail.com>',
			emailAddr,
			emailSubject,
			emailMessage
		);
				
		//When the user clicks the button, open the modal 
		clearForm();
		$(".floating-label-form-group").removeClass("floating-label-form-group-with-value");
		Meteor.setTimeout(function() 
		{
			document.getElementById('myModal').style.display = "block";
		}, 1000);
	},
	
	//When the user clicks on <span> (x), close the modal
	'click .w3s-close':function(event)
	{
		document.getElementById('myModal').style.display = "none";
	}
});

Template.body.events(
{
	//When the user clicks anywhere outside of the modal, close it
	'click body':function(event)
	{
		var modal = document.getElementById('myModal');
		if (event.target == modal) 
		{
			modal.style.display = "none";
		}
	}
});

//clear form
var clearForm = function()
{
	document.getElementById('email').value = ""
	document.getElementById('name').value = ""
	document.getElementById('message').value = "";	
}
	
	
	







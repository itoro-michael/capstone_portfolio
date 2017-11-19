
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
	}
});

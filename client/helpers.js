
Template.navbar_template.helpers(
{
	'contact_href_value': function()
	{
		if(Router.current().route.getName()=="contact.html")
		{
			return "#contact";
		}
		return "contact.html";
	},
	
	'navbar_href_value': function()
	{
		if(Router.current().route.getName()=="contact.html")
		{
			return "/";
		}
		return "#page-top";
	},
	
	'nav_about_value': function()
	{
		if(Router.current().route.getName()=="contact.html")
		{
			return "/#about";
		}
		return "#about";
	}
});


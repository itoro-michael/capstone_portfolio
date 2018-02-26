
Template.homepage_body_template.helpers(
{
	'uni_of_lond': function()
	{
		return "University of London, Goldsmiths on Coursera";
	}
});

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
	},
	
	'nav_skill_value': function()
	{
		if(Router.current().route.getName()=="contact.html")
		{
			return "/#skill-set";
		}
		return "#skill-set";
	},
	
	'nav_edu_value': function()
	{
		if(Router.current().route.getName()=="contact.html")
		{
			return "/#education";
		}
		return "#education";
	},
	
	'nav_cert_value': function()
	{
		if(Router.current().route.getName()=="contact.html")
		{
			return "/#certification";
		}
		return "#certification";
	}
});



//The layoutTemplate
Router.configure(
{
  layoutTemplate: 'home_page_template'
});

// the main route. showing the list of sites.
Router.route('/', function() 
{
	this.render('navbar_template', {to:"navbar"});
	this.render('homepage_body_template', {to:"body"});
	this.render('footer_template', {to:"footer"});
	
	//removing the any active class from contact navbar link
	$("#contact-href").removeClass("active");
});

// this route is for the discussion page for a site
Router.route('/contact.html', function() 
{	
	this.render('navbar_template', {to:"navbar"});
    this.render('contact_body_template', {to:"body"});
	this.render('footer_template', {to:"footer"});
});

Router.onBeforeAction(function() 
{
  $(window).scrollTop(0);
  this.next();
}, {only: ['contact.html']});












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

Router.onAfterAction(function() 
{
	// always start by resetting scroll to top of the page
	/* $(window).scrollTop(0); */
	var hash=this.params.hash;
	// if there is a hash in the URL, handle it
	if (hash) 
	{
		// now this is important : Tracker.afterFlush ensures that iron-router
		// rendering process has finished inserting the current route template
		// into DOM so we can manipulate it via jQuery, if you skip this part
		// the HTML element you want to scroll to might not yet be present in
		// the DOM (this is probably why your code fails in the first place)
		Tracker.afterFlush(function() 
		{
			var element=$("#"+hash);
			var scrollTop = element.offset().top;
			$("html,body").animate(
			{
				scrollTop: (scrollTop - 50)
			}, 1000, "easeInOutExpo");
		});
	}
});










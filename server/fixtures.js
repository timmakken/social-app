if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Social App',
		author: 'Tim Makken',
		url: 'http://lynu.nl'
	});

	Posts.insert({
		title: 'Inspired by Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	});
}

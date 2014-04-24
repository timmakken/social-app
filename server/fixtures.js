// On empty db add sample
if(Posts.find().count() === 0) {

	Posts.insert({
	 title: 'Introducing Social App',
	 author: 'Tim Makken',
	 url: 'htpp://lynu.nl'
	});

	Posts.insert({
	 title: 'Meteor',
	 author: 'Tom Coleman',
	 url: 'htpp://meteor.com'
	});

	Posts.insert({
	 title: 'The Meteor Book',
	 author: 'Sacha Greif',
	 url: 'htpp://themeteorbook.com'
	});

}
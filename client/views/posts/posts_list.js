// Hooking the data to the template
Template.postsList.helpers({
	posts: function(){
		return Posts.find();
	}
});

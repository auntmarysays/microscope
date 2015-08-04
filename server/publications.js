Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('comments', function(postId) {
	return Comments.find();
});

Meteor. publish('notifications', function() {
	return Notifications.find();
});
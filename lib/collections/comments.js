Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAttributes) {
		check(this.userId, String);
		check(commentAttributes, {
			postid: String,
			body: String
		});

		var user = Meteor.user();
		var post = Posts.findOne(commentattributes.postId);

		if(!post)
			throw new Meteor.Error('invalid-comment', 'You must comment on a post');

		comment = _.extend(commentAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		// update the post with the number of comments
		Posts.update(comment.postId, {$inc: {commentsCount: 1}});

		return Comments.insert(comment);
	}
});
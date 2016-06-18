import {Meteor} from 'meteor/meteor';
import {Chats, Messages} from '../lib/collections';

Meteor.methods({
	newMessage(message){

		if(!this.userId){
			throw new Meteor.Error('not-logged-in',
				'Must be logged in to send message.');
		}

		check(message, {
<<<<<<< HEAD
			text: String,
=======
			text: String,			
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
			chatId: String,
			type: String
		});

		message.timestamp = new Date();
		message.userId = this.userId;

		const messageId = Messages.insert(message);
		Chats.update(message.chatId, {$set: {lastMessage: message}});

		return messageId;
	},

	updateName(name){
		if(!this.userId){
			throw new Meteor.Error('not-logged-in', 'Must be logged in to update his name.');
		}

		check(name, String);

		if(name.length === 0){
			throw Meteor.Error('name-required', 'Must provide a user name');
		}

		return Meteor.users.update(this.userId, {$set: {'profile.name': name} });
	}
});
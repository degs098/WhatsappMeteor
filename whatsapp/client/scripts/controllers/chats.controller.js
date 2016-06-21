import {Chats} from '../../../lib/collections';
import {Controller} from 'angular-ecmascript/module-helpers';

export default class ChatsCtrl extends Controller{

	constructor(){
		super(...arguments);

		this.helpers({
      data(){
        return Chats.find();
      }
    });
	}

  showMeChatModal(){
    this.NewChat.showModal();
  }

  remove(chat){    
    this.callMethod('removeChat', chat._id);
  }

}

ChatsCtrl.$inject = ['NewChat'];
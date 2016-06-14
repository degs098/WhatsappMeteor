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

  remove(chat){
    //this.data.splice(this.data.indexOf(chat), 1);
    this.data.remove(chat);
  }
}
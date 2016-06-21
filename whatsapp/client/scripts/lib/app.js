//Librerias
import 'angular-animate';
import 'angular-meteor';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-meteor-auth';
import 'ionic-scripts';
import Loader from 'angular-ecmascript/module-loader';
import Angular from 'angular';
import {Meteor} from 'meteor/meteor';

//Modulos
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import LoginCtrl from '../controllers/login.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import ProfileCtrl from '../controllers/profile.controller';
import SettingsCtrl from '../controllers/settings.controller';
import NewChatCtrl from '../controllers/new-chat.controller';
import CalendarFilter from '../filters/calendar.filter';
import ChatNameFilter from '../filters/chat-name.filter';
import ChatPictureFilter from '../filters/chat-picture.filter';
import NewChatService from '../services/new-chat.service';
import Routes from '../routes';
import InputDirective from '../directives/input.directive';


//App
const App = 'Whatsapp';
Angular.module(App, [
	'angular-meteor',
	'angular-meteor.auth',
	'angularMoment',
	'ionic'
	]);

new Loader(App)
.load(ChatsCtrl)
.load(CalendarFilter)
.load(ChatNameFilter)
.load(ChatPictureFilter)
.load(ChatCtrl)
.load(LoginCtrl)
.load(ConfirmationCtrl)
.load(ProfileCtrl)
.load(SettingsCtrl)
.load(NewChatCtrl)
.load(InputDirective)
.load(NewChatService)
.load(Routes);

//Startup

if(Meteor.isCordova){
	Angular.element(document).on('deviceready',onReady);
}else{
	Angular.element(document).ready(onReady);
}

function onReady(){
	Angular.bootstrap(document, [App]);
}
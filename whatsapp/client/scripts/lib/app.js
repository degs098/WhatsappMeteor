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
import CalendarFilter from '../filters/calendar.filter';
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
.load(ChatCtrl)
.load(LoginCtrl)
.load(ConfirmationCtrl)
.load(ProfileCtrl)
.load(SettingsCtrl)
.load(InputDirective)
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
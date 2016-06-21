//Librerias
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-moment';
import 'angular-ui-router';
import 'ionic-scripts';
import Loader from 'angular-ecmascript/module-loader';
import Angular from 'angular';
import {Meteor} from 'meteor/meteor';

//Modulos
import RoutesConfig from '../routes';
import ChatCtrl from '../controllers/chat.controller';
import ChatsCtrl from '../controllers/chats.controller';
import InputDirective from '../directives/input.directive';
import CalendarFilter from '../filters/calendar.filter';
const App = 'Whatsapp';

//App

Angular.module(App, [
	'angular-meteor',
	'angularMoment',
	'ionic'
	]);

new Loader(App)
.load(RoutesConfig)
.load(ChatCtrl)
.load(ChatsCtrl)
.load(InputDirective)
.load(CalendarFilter);

//Startup

if(Meteor.isCordova){
	Angular.element(document).on('deviceready',onReady);
}else{
	Angular.element(document).ready(onReady);
}

function onReady(){
	Angular.bootstrap(document, [App]);
}
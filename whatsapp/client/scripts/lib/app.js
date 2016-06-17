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
import RoutesConfig from '../routes';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import LoginCtrl from '../controllers/login.controller';
import CalendarFilter from '../filters/calendar.filter';
import InputDirective from '../directives/input.directive';
import Routes from '../routes';


//App
const App = 'Whatsapp';
Angular.module(App, [
	'angular-meteor',
	'angular-meteor.auth',
	'angularMoment',
	'ionic'
	]);

new Loader(App)
.load(RoutesConfig)
.load(ChatsCtrl)
.load(CalendarFilter)
.load(ChatCtrl)
.load(LoginCtrl)
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
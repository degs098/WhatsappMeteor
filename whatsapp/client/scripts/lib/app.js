//Librerias
import 'angular-animate';
import 'angular-meteor';
<<<<<<< HEAD
import 'angular-meteor-auth';
=======
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
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
<<<<<<< HEAD
import ConfirmationCtrl from '../controllers/confirmation.controller';
import ProfileCtrl from '../controllers/profile.controller';
import SettingsCtrl from '../controllers/settings.controller';
=======
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
import CalendarFilter from '../filters/calendar.filter';
import Routes from '../routes';
import InputDirective from '../directives/input.directive';
import Routes from '../routes';


//App
const App = 'Whatsapp';
Angular.module(App, [
	'angular-meteor',
	'angular-meteor.auth',
<<<<<<< HEAD
	'ionic',
	'angularMoment'
=======
	'angularMoment',
	'ionic'
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
	]);

new Loader(App)
.load(ChatsCtrl)
.load(CalendarFilter)
.load(ChatCtrl)
.load(LoginCtrl)
<<<<<<< HEAD
.load(ConfirmationCtrl)
.load(ProfileCtrl)
.load(SettingsCtrl)
=======
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
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
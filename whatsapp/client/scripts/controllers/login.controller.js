import {_} from 'meteor/underscore';
import {Accounts} from 'meteor/accounts-base';
import {Controller} from 'angular-ecmascript/module-helpers';

<<<<<<< HEAD
export default class LoginCtrl extends Controller{
	login(){
		if(_.isEmpty(this.phone)) return;

		const confirmPopup = this.$ionicPopup.confirm({
			title: 'Number confirmation',
			template: '<div>' + this.phone + '</div><div>Is your phone above correct?</div>',
			cssClass: 'text-center',
			okText: 'Yes',
			okType: 'button-positive button-clear',
			cancelText: 'edit',
			cancelType: 'button-dark button-clear'
		});

=======
export default class LoginCtrl extends Controller {
	login(){

		//Se verifica si el número de celular de verificación está vacio.
		if(_.isEmpty(this.phone)) return;

		//Se despliega el popup con las propiedades para confirmar el número de celular.
		const confirmPopup = this.$ionicPopup.confirm({
			title: 'Confirmación de Número',
			template: '<div>' + this.phone + '</div><div>¿El número de telefono es correcto?</div>',
			cssClass: 'text-center',
			okText: 'Ok',
			okType: 'button-positive button-clear',
			cancelText: 'Editar',
			cancelType: 'button-dark button-clear'
		});


		//Luego de mostrar el popup se verifica la respuesta.
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
		confirmPopup.then((res) => {
			if(!res) return;

			this.$ionicLoading.show({
<<<<<<< HEAD
				template: 'Sending verification code...'
			});

			Accounts.requestPhoneVerification(this.phone,(err) => {
				this.$ionicLoading.hide();
				if(err) return this.handleError(err);
				this.$state.go('confirmation', {phone:this.phone});
=======
				template: 'Enviando código de verificación...'
			});

			Accounts.requestPhoneVerification(this.phone, (err) => {
				this.$ionicLoading.hide();
				if(err) return this.handleError(err);
				this.$state.go('confirmation', {phone: this.phone});
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
			});
		});
	}

<<<<<<< HEAD
	handleError(err){
		this.$log.error('Login error',err);
		this.$ionicPopup.alert({
			title: err.reason || 'Login failed',
			template: 'Please try again',
=======
	//Control o handler de error.
	handleError(err){
		this.$log.error('Error de logueo', err);
		this.$ionicPopup.alert({
			title: err.reason || 'Login fallido',
			template: 'Por favor intentalo de nuevo',
>>>>>>> 85ffa6f011ce1f697aca1dbe6e5329f4d244eda9
			okType: 'button-positive button-clear'
		});
	}
}

LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];
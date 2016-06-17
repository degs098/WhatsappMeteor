import {_} from 'meteor/underscore';
import {Accounts} from 'meteor/accounts-base';
import {Controller} from 'angular-ecmascript/module-helpers';

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
		confirmPopup.then((res) => {
			if(!res) return;

			this.$ionicLoading.show({
				template: 'Enviando código de verificación...'
			});

			Accounts.requestPhoneVerification(this.phone, (err) => {
				this.$ionicLoading.hide();
				if(err) return this.handleError(err);
				this.$state.go('confirmation', {phone: this.phone});
			});
		});
	}

	//Control o handler de error.
	handleError(err){
		this.$log.error('Error de logueo', err);
		this.$ionicPopup.alert({
			title: err.reason || 'Login fallido',
			template: 'Por favor intentalo de nuevo',
			okType: 'button-positive button-clear'
		});
	}
}

LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];
import {_} from 'meteor/underscore';
import {Accounts} from 'meteor/accounts-base';
import {Controller} from 'angular-ecmascript/module-helpers';

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

		confirmPopup.then((res) => {
			if(!res) return;

			this.$ionicLoading.show({
				template: 'Sending verification code...'
			});

			Accounts.requestPhoneVerification(this.phone,(err) => {
				this.$ionicLoading.hide();
				if(err) return this.handleError(err);
				this.$state.go('confirmation', {phone:this.phone});
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
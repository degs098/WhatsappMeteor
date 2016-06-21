import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if(Meteor.settings && Meteor.settings.ACCOOUNTS_PHONE) {
	Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOOUNTS_PHONE.ADMIN_NUMBERS;
	Accounts._options.phoneVerificationMasterCode = Meteor.settings.ACCOOUNTS_PHONE.MASTER_CODE;
}
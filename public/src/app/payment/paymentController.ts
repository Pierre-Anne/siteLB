'use strict';
/**
 * PaymentController is used as controller of the payment view
 */
class PaymentController {

    static $inject = ['$state'];

    constructor(private $state: ng.ui.IStateService) {
    }
}
siteLBApp.controller('PaymentController', PaymentController);

//https://secure.kooneo.com/pay/stripe
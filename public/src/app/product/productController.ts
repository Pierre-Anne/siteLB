'use strict';
/**
 * ProductController is used as controller of the product view
 */
class ProductController {

    static $inject = ['$state'];

    constructor(private $state: ng.ui.IStateService) {
    }

    public goToPay(nbPayment: number): void {
        this.$state.go('root.payment');
    }
}

siteLBApp.controller('ProductController', ProductController);

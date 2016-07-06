'use strict';

siteLBApp.config(function($locationProvider: ng.ILocationProvider,
                                   $stateProvider: ng.ui.IStateProvider,
                                   $urlRouterProvider: ng.ui.IUrlRouterProvider,
                                   $urlMatcherFactoryProvider: ng.ui.IUrlMatcherFactory) {

    // Make a trailing slash optional for all routes
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state('condition', {
            url: '/condition',
            views: {
                'container@': {
                    templateUrl: 'src/app/condition/conditionView.html'
                }
            }
        })
        .state('root', {
            abstract: true,
            url: '/',
            views: {
                'header': {
                    templateUrl: 'src/app/header/headerView.html',
                    controller: 'HeaderController',
                    controllerAs: 'vm'
                },
                'footer': {
                    templateUrl: 'src/app/footer/footerView.html',
                    controller: 'FooterController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.home', {
            url: '',
            views: {
                'container@': {
                    templateUrl: 'src/app/home/homeView.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.product', {
            url: 'product',
            views: {
                'container@': {
                    templateUrl: 'src/app/product/productView.html',
                    controller: 'ProductController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.payment', {
            url: 'payment',
            views: {
                'container@': {
                    templateUrl: 'src/app/payment/paymentView.html',
                    controller: 'PaymentController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.thanks', {
            url: 'thanks',
            views: {
                'container@': {
                    templateUrl: 'src/app/thanks/thanksView.html',
                    controller: 'ThanksController',
                    controllerAs: 'vm'
                }
            }
        });


    $urlRouterProvider.otherwise('/');

    // html5 removes the need for # in URL
    $locationProvider.html5Mode({
        enabled: true
    });

});

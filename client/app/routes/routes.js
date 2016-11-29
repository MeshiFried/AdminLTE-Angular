import angular from 'angular';
import Dashboard from './dashboard/dashboard'
let routesModule = angular.module('app.routes', [
    Dashboard.name
]);

export default routesModule;

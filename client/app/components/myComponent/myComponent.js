import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myComponentComponent from './myComponent.component';

let myComponentModule = angular.module('myComponent', [
  uiRouter
])

.component('myComponent', myComponentComponent)

.name;

export default myComponentModule;

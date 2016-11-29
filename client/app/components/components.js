import angular from 'angular';
import MyComponent from './myComponent/myComponent';

let componentModule = angular.module('app.components', [
  MyComponent
])

.name;

export default componentModule;

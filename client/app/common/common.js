import angular from 'angular';

import Footer from './footer/footer';
import Header from './header/header';

let commonModule = angular.module('app.common', [
  Footer,
  Header
])

.name;

export default commonModule;

import MyComponentModule from './myComponent'
import MyComponentController from './myComponent.controller';
import MyComponentComponent from './myComponent.component';
import MyComponentTemplate from './myComponent.html';

describe('MyComponent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyComponentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyComponentController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MyComponentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyComponentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyComponentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyComponentController);
      });
  });
});

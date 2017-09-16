const assert = require('assert');


describe("A Simple Test for home Controller", () => {
  var $q, $rootScope, ctrlScope;
   beforeEach(angular.mock.module('myApp'));
   beforeEach(angular.mock.inject(function(_$rootScope_, $controller, _$q_){
     $rootScope = _$rootScope_;
            $q = _$q_;
            $controller('homeCtrl', {
                $scope : ctrlScope              
            });
   }));
  it("--testing the getData function on onit call", () => {
    ctrlScope.getData();
    assert(ctrlScope.clicked).to.equal(0);
    assert(ctrlScope.gridData.length).to.equal(64);
    
  });

  it("--testing the clickCounter function on click event", () => {
    var data={key:'1',value:'diamond'};
    ctrlScope.diamondCount=0;
    ctrlScope.clicked=0;
    ctrlScope.clickCounter(data);
    assert(ctrlScope.diamondCount).to.equal(1);
    assert(ctrlScope.clicked).to.equal(2);
    
    
  });
})

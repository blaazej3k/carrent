
'use strict';
var path = '';

app
  .controller('NaprawyCtrl', function (NaprawyModel, $stateParams, $scope, SamochodyModel, $location, $window){

    var naprawy = this;
    var nap = this;
    function getNaprawa() {
      path = '/getNaprawa';
      NaprawyModel.all().then(function(result){
        naprawy.naprawa = result.data;
      })
    }

    naprawy.naprawa = [];
    getNaprawa();

    function createNaprawa(naprawa) {

      path = '/getNaprawa';
      NaprawyModel.create(angular.extend({},{samochody: $scope.samochod},naprawa)).then(function (result){
        console.log('Dodaję naprawę');
        initCreateNaprawa();
        $location.path('/app/samochody/list/'+samochodId);
      });
     // return

      //$window.alert('Dodano naprawę');
    }
    function initCreateNaprawa() {
      nap.newNap = {datNaprawy: '', kosztNaprawy: '',
        opisNaprawy: '', samochody: ''};
    }
    naprawy.createNaprawa = createNaprawa;

    // var displaysamochodid = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/'+ samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      // console.log("Zwracam: " + $scope.samochod);
    })
  })

  .constant('ENDPOINT_URI12', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/naprawa')
  .service('NaprawyModel', function ($http, ENDPOINT_URI12){

    var service = this;


    function getUrl() {
      return ENDPOINT_URI12 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }

    service.create = function (naprawa) {
      return $http.post(getUrl(),naprawa);
    }

    service.createNaprawa = function (naprawa) {
      return $http.post(getUrl(),(naprawa));
    }
  });
// .constant('ENDPOINT_URI11', 'http://localhost:8080/api/samochod')
// .service('SamochodyModel', function ($http, ENDPOINT_URI11){
//
//   var service = this;
//
//
//   function getUrl() {
//     return ENDPOINT_URI11 + path;
//   }
//
//   service.all3 = function () {
//     return $http.get(getUrl());
//   }
//
//   service.getSamochodById = function () {
//     return $http.get(getUrl());
//   }
//
// });


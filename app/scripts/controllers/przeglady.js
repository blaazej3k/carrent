'use strict';
var path = '';

app
  .controller('PrzegladyCtrl', function (PrzegladyModel, $stateParams, $scope, SamochodyModel, $location){

    var przeglady = this;
    var prze = this;
    function getPrzeglad() {
      path = '/getPrzeglad';
      PrzegladyModel.all().then(function(result){
        przeglady.przeglad = result.data;
        console.log(przeglady.przeglad);
      })
    }

    przeglady.przeglad = [];
    getPrzeglad();

    function createPrzeglad(przeglad) {

      path = '/getPrzeglad';
      PrzegladyModel.create(angular.extend({},{samochod: $scope.samochod},przeglad)).then(function (result){
        console.log('Dodaję przeglad');
        initCreatePrzeglad();
        $location.path('/app/samochody/list/'+samochodId);
      })
      return alert("Dodano nowy przegląd do samochodu.");
    }
    function initCreatePrzeglad() {
      prze.newPrze = {samochod: '', dataPrzegladu: '',
        dataNastepnegoPrzegladu: '', przebieg: ''};
    }
    przeglady.createPrzeglad = createPrzeglad;

    // var displaysamochodid = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/'+ samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      // console.log("Zwracam: " + $scope.samochod);
    })
  })

  .constant('ENDPOINT_URI13', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/przeglad')
  .service('PrzegladyModel', function ($http, ENDPOINT_URI13){

    var service = this;


    function getUrl() {
      return ENDPOINT_URI13 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }

    service.create = function (przeglad) {
      return $http.post(getUrl(),przeglad);
    }

    service.createPrzeglad = function (przeglad) {
      return $http.post(getUrl(),(przeglad));
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



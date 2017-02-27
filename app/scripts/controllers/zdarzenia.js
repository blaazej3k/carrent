
'use strict';
var path = '';

app
  .controller('ZdarzeniaCtrl', function (ZdarzeniaModel, $stateParams, $scope, WypozyczenieModel, $location){

    var zdarzenia = this;
    var zda = this;
    function getZdarzenie() {
      path = '/getZdarzenie';
      ZdarzeniaModel.all().then(function(result){
        zdarzenia.zdarzenie = result.data;
        console.log(zdarzenia.zdarzenie);
      })
    }

    zdarzenia.zdarzenie = [];
    getZdarzenie();

    function createZdarzenie(zdarzenie) {

      path = '/getZdarzenie';
      ZdarzeniaModel.create(angular.extend({},{wypozyczenie: $scope.wypozyczenie},zdarzenie)).then(function (result){
        console.log('Dodaję zdarzenie');
        initCreateZdarzenie();
        $location.url('/app/wypozyczenia/list/'+wypozyczenieId);
      })
    }
    function initCreateZdarzenie() {
      zda.newZda = {datZdarzenia: '', szkody: '',
        winny: '', wypozyczenie: ''};
    }
    zdarzenia.createZdarzenie = createZdarzenie;

    // var displaysamochodid = this;
    var wypozyczenieId = $stateParams.id;


    path = '/getWypozyczenieById/'+ wypozyczenieId;
    WypozyczenieModel.getWypozyczenieById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.wypozyczenie = result.data;
      // console.log("Zwracam: " + $scope.samochod);
    })
  })

  .constant('ENDPOINT_URI14', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/zdarzenie')
  .service('ZdarzeniaModel', function ($http, ENDPOINT_URI14){

    var service = this;


    function getUrl() {
      return ENDPOINT_URI14 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }

    service.create = function (zdarzenie) {
      return $http.post(getUrl(),zdarzenie);
    }

    service.createNaprawa = function (zdarzenie) {
      return $http.post(getUrl(),(zdarzenie));
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



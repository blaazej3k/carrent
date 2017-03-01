'use strict';
var path = '';

app
  .controller('UbezpieczeniaCtrl', function (UbezpieczeniaModel, $stateParams, $scope, SamochodyModel, $location, $state){

    var ubezpieczeniedash = this;
    var ube = this;
    function getUbezpieczenie() {
      path = '/getUbezpieczenie';
      UbezpieczeniaModel.all().then(function(result){
        ubezpieczeniedash.ubezpieczenie = result.data;
        console.log(ubezpieczeniedash.ubezpieczenie);
      })
    }

    ubezpieczeniedash.ubezpieczenie = [];
    getUbezpieczenie();

    function createUbezpieczenie(ubezpieczenie) {

      path = '/getUbezpieczenie';
      UbezpieczeniaModel.create(angular.extend({},{samochody: $scope.samochod},ubezpieczenie)).then(function (result){
        console.log('Tworze ubezpieczenie');
        initCreateUbezpieczenie();
        $location.path('/app/samochody/list/'+samochodId);
      })
      return alert("Dodano nowe ubezpieczenie do samochodu.");
    }
    function initCreateUbezpieczenie() {
      ube.newUbe = {rodzaj: '', cena: '',
        dataWystawienia: '', dataNastepnego: '', samochody: ''};
    }
    ubezpieczeniedash.createUbezpieczenie = createUbezpieczenie;

    // var displaysamochodid = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/'+ samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      // console.log("Zwracam: " + $scope.samochod);
    })
  })

  // .controller('SamochodCtrl', function ($scope, SamochodyModel){
  //
  //   var sam = this;
  //
  //   path = '/getSamochod';
  //   SamochodyModel.all3().then(function(result){
  //     $scope.samget = result.data;
  //     console.log("Zwracam samochody: " + $scope.samget);
  //   })
  // })

  .constant('ENDPOINT_URI10', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/ubezpieczenie')
  .service('UbezpieczeniaModel', function ($http, ENDPOINT_URI10){

    var service = this;


    function getUrl() {
      return ENDPOINT_URI10 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }

    service.create = function (ubezpieczenie) {
      return $http.post(getUrl(),ubezpieczenie);
    }

    service.createUbezpieczenie = function (ubezpieczenie) {
      return $http.post(getUrl(),(ubezpieczenie));
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


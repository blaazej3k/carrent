'use strict';
var path = '';

app
  .controller('KlienciEdit', function ($scope, $stateParams, KlienciModel, $location, $filter, NgTableParams) {

    var klientedit = this;
    var kli = this;
    var klientId = $stateParams.id;

    path = '/getKlientById/' + klientId;
    KlienciModel.getKlientById().then(function (result) {
      $scope.klient = result.data;
    });
    function createKlient(klient) {

      path = '/getKlient';
      KlienciModel.create(angular.extend({},{id: klientId, imieKlienta: $scope.klient.imieKlienta, nazwiskoKlienta: $scope.klient.nazwiskoKlienta,
        pesel: $scope.klient.pesel, adres: $scope.adres, telefon: $scope.telefon},klient)).then(function (result) {
        initCreateKlient();
        $location.replace().path('/app/klienci/show');
      })
      return alert("Dane klienta o id "+klientId+" zostały uaktualnione.");
    }

    function initCreateKlient() {
      kli.newKli = {imieKlienta: '', nazwiskoKlienta: '',
        pesel: '', adres: '', telefon: ''};
    }
    klientedit.createKlient = createKlient;
  })


  .constant('ENDPOINT_URI', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/klient')
  .service('KlienciModel', function ($http, ENDPOINT_URI15){

    var service = this;
    function getUrl() {
      return ENDPOINT_URI15 + path;
    }
    service.all = function () {
      return $http.get(getUrl());
    }
    service.getKlientById = function () {
      return $http.get(getUrl());
    }
    service.create = function (klient) {
      return $http.post(getUrl(),klient);
    }
    service.createKlient = function (klient) {
      return $http.post(getUrl(),klient);
    }

  });




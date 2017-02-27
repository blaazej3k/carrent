'use strict';
var path = '';

app
  .controller('KlienciNewCtrl', function (KlienciModel, $scope, $location, SamochodyModel, $stateParams, WypozyczenieModel) {

    var klientdash = this;
    var kli = this;

    function getKlient() {
      path = '/getKlient';
      KlienciModel.all().then(function (result) {
        klientdash.klient = result.data;
        console.log(klientdash.klient);
      })
    }

    klientdash.klient = [];
    getKlient();

    function createKlient(klient) {


      path = '/getKlient';
      KlienciModel.create(klient).then(function (result){
        console.log('Tworze klienta');
        initCreateKlient();
      })
      // return $location.replace().path('/app/klienci/show');
    }
    function initCreateKlient() {
      kli.newKli = {imieKlienta: '', nazwiskoKlienta: '',
        pesel: '', adres: '', telefon: ''};
    }
    klientdash.createKlient = createKlient;


    var samm = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/'+ samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      console.log("Zwracam samochod: " + $scope.samochod);
    })
    function createSamochod(samochod) {

      path = '/getSamochod';
      SamochodyModel.create(samochod).then(function (result){
        console.log('Tworze samochod');
        initCreateSamochod();
      })
    }
    function initCreateSamochod() {
      samm.newSamm = {model: '', nrRejestracyjny: '',
        vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''};
    }
    klientdash.createSamochod = createSamochod;

    var wyp = this;
    function getWypozyczenie() {
      path = '/getWypozyczenie';
      WypozyczenieModel.all().then(function(result){
        klientdash.wypozyczenie = result.data;
        console.log("Wypozyczenia" + klientdash.wypozyczenie);
      })
    }

    klientdash.wypozyczenie = [];
    getWypozyczenie();


    function createWypozyczenie(wypozyczenie) {


      path = '/getWypozyczenie';
      WypozyczenieModel.create(angular.extend({},{samochod: $scope.samochod},wypozyczenie)).then(function (result){
        console.log('Tworze wypozyczenie');
        initCreateWypozyczenie();
      })
      // return $location.replace().path('/app/wypozyczenia/new2/(auto.id)');
      return console.log($scope);
    }
    function initCreateWypozyczenie() {
      wyp.newWyp = {samochod: '', klient: '',
        pracownik: '', faktura: '', status: '', dataWypozyczenia: '', dataZwrotu: '', iloscKilometrow: ''};
    }
    klientdash.createWypozyczenie = createWypozyczenie;
    createWypozyczenie();
  })

  .controller('KlientCtrl', function ($scope, KlienciModel){

    path = '/getKlient';
    KlienciModel.all().then(function(result){
      $scope.klient = result.data;
      console.log("Zwracam klienta: " + $scope.klient);
    })
  })


  .controller('KlienciById', function ($scope, $stateParams, KlienciModel) {

    var klientId = $stateParams.id;
    path = '/getKlientById/' + klientId;
    KlienciModel.getKlientById().then(function (result) {
      $scope.klient = result.data;
      console.log("Zwracam: " + $scope.klient);
    })

      .service('KlienciModel', function ($http, ENDPOINT_URI5) {

        var service = this;


        function getUrl() {
          return ENDPOINT_URI5 + path;
        }

        service.all = function () {
          return $http.get(getUrl());
        }

        service.getKlientById = function () {
          return $http.get(getUrl());
        }

        service.create = function (klient) {
          return $http.post(getUrl(), klient);
        }
      })
  });





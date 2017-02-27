'use strict';
var path = '';

app
  .controller('SamochodyNewCtrl', function (SamochodyModel, $stateParams, WypozyczenieModel, $location, $scope){

    var samochoddash = this;
    var samm = this;
    function getSamochod() {
      path = '/getSamochod';
      SamochodyModel.all().then(function(result){
        samochoddash.samochod = result.data;
        console.log("Samochody" + samochoddash.samochod);
      })
    }

    samochoddash.samochod = [];
    getSamochod();

    function createSamochod(samochod) {

      path = '/getSamochod';
      SamochodyModel.create(samochod).then(function (result){
        console.log('Tworze samochod');
        initCreateSamochod();
      })
      return $location.replace().path('/app/samochody/show');
    }
    function initCreateSamochod() {
      samm.newSamm = {model: '', nrRejestracyjny: '',
        vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''};
    }
    samochoddash.createSamochod = createSamochod;



    var wyp = this;
    function getWypozyczenie() {
      path = '/getWypozyczenie';
      WypozyczenieModel.all().then(function(result){
        samochoddash.wypozyczenie = result.data;
        console.log("Wypozyczenia" + samochoddash.wypozyczenie);
      })
    }

    samochoddash.wypozyczenie = [];
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
    samochoddash.createWypozyczenie = createWypozyczenie;
  })

  .controller('MarkaCtrl', function ($scope, MarkaModel){

    var markadash = this;
    var mar = this;

    path = '/getMarka';
    MarkaModel.all2().then(function(result){
      $scope.marka = result.data;
      console.log("Zwracam marki: " + $scope.marka);
    })
  })

  .controller('ModelCtrl', function ($scope, ModelModel){

    var modeldash = this;
    var mod = this;

    path = '/getModel';
    ModelModel.all().then(function(result){
      $scope.model = result.data;
      console.log("Zwracam modele: " + $scope.model);
    })
  })

  .controller('TypCtrl', function ($scope, TypModel){

    path = '/getTyp';
    TypModel.all().then(function(result){
      $scope.typ = result.data;
      console.log("Zwracam typy: " + $scope.typ);
    })
  })

  .controller('AutoCtrl', function ($scope, SamochodyModel){

    path = '/getSamochod';
    SamochodyModel.all().then(function(result){
      $scope.auto = result.data;
      console.log("Zwracam auta: " + $scope.auto);
    })
  })

  .controller('SamochodyById', function ($scope, $stateParams, SamochodyModel) {

    var displaysamochodid = this;
    var samm = this;
    var samochodId = $stateParams.id;

    path = '/getSamochodById/' + samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      console.log("Zwracam: " + $scope.samochod);
    })
    function createSamochod(samochod) {

      path = '/getSamochod';
      SamochodyModel.create(samochod).then(function (result) {
        console.log('Tworze samochod');
        initCreateSamochod();
      })
    }

    function initCreateSamochod() {
      samm.newSamm = {
        model: '', nrRejestracyjny: '',
        vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''
      };
    }

    displaysamochodid.createSamochod = createSamochod;
  })

  .controller('SamochodyEdit', function ($scope, $stateParams, SamochodyModel, $location) {

    var displaysamochodid = this;
    var samm = this;
    var samochodId = $stateParams.id;

    path = '/getSamochodById/' + samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      console.log("Zwracam: " + $scope.samochod);
    })
    function createSamochod(samochod) {

      path = '/getSamochod';
      SamochodyModel.create(angular.extend({},{id: samochodId, marka: $scope.samochod.marka, model: $scope.samochod.model,
        nrRejestracyjny: $scope.samochod.nrRejestracyjny, vin: $scope.samochod.vin, stanLicznika: $scope.samochod.stanLicznika,
      paliwo: $scope.samochod.paliwo, dostepnosc: $scope.samochod.dostepnosc, typ: $scope.samochod.typ},samochod)).then(function (result) {
        console.log('Tworze samochod');
        initCreateSamochod();
        $location.replace().path('/app/samochody/show');
      })
    }

    function initCreateSamochod() {
      samm.newSamm = {
        model: '', nrRejestracyjny: '',
        vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''
      };
    }

    displaysamochodid.createSamochod = createSamochod;
  })

  .controller('SamochodyDelete', function ($scope, $stateParams, SamochodyModel, $location) {

    var displaysamochodid = this;
    var samm = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/' + samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      console.log("Zwracam: " + $scope.samochod);
    })
    function createSamochod(samochod) {

      path = '/getSamochod';
      SamochodyModel.create(angular.extend({},{id: samochodId, marka: $scope.samochod.marka, model: $scope.samochod.model,
        nrRejestracyjny: $scope.samochod.nrRejestracyjny, vin: $scope.samochod.vin, stanLicznika: $scope.samochod.stanLicznika,
        paliwo: $scope.samochod.paliwo, typ: $scope.samochod.typ},samochod)).then(function (result) {
        console.log('Tworze samochod');
        initCreateSamochod();
        $location.replace().path('/app/samochody/show');
      })
    }

    function initCreateSamochod() {
      samm.newSamm = {
        model: '', nrRejestracyjny: '',
        vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''
      };
    }

    displaysamochodid.createSamochod = createSamochod;



  })
    .constant('ENDPOINT_URI', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/samochod')
      .service('SamochodyModel', function ($http, ENDPOINT_URI){

        var service = this;
        function getUrl() {
          return ENDPOINT_URI + path;
        }
        service.all = function () {
          return $http.get(getUrl());
        }
        service.getSamochodById = function () {
          return $http.get(getUrl());
        }
        service.create = function (samochod) {
          return $http.post(getUrl(),samochod);
        }
        service.createSamochod = function (samochod) {
          return $http.post(getUrl(),samochod);
        }

  });



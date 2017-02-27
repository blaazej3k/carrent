'use strict';
var path = '';

app
  .controller('WypozyczeniaCtrl', function (WypozyczenieModel, $stateParams, $scope, $location, SamochodyModel, KlienciModel){

    var wypozyczeniedash = this;
    var wyp = this;
    function getWypozyczenie() {
      path = '/getWypozyczenie';
      WypozyczenieModel.all().then(function(result){
        wypozyczeniedash.wypozyczenie = result.data;
        console.log(wypozyczeniedash.wypozyczenie);
      })
    }

    wypozyczeniedash.wypozyczenie = [];
    getWypozyczenie();

    function createWypozyczenie(wypozyczenie) {

      path = '/getWypozyczenie';
      WypozyczenieModel.create(angular.extend({},{samochod: $scope.samochod, klient: $scope.klient},wypozyczenie)).then(function (result){
        console.log('Tworze wypozyczenie');
        initCreateWypozyczenie();
        $location.path('/app/wypozyczenia/show');false
      })
    }
    function initCreateWypozyczenie() {
      wyp.newWyp = {samochod: '', klient: '',
        pracownik: '', faktura: '', status: '', dataWypozyczenia: '', dataZwrotu: '', iloscKilometrow: ''};
    }
    wypozyczeniedash.createWypozyczenie = createWypozyczenie;


    var wypozyczenieId = $stateParams.id;


    path = '/getWypozyczenieById/'+ wypozyczenieId;
    WypozyczenieModel.getWypozyczenieById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.wypozyczenie = result.data;
      console.log("Zwracam wyp: " + $scope.wypozyczenie.id);

    })
    var displaysamochodid = this;
    var samm = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/'+ samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      $scope.samochod.dostepnosc = "false";
      console.log("Zwracam dostepnosc: " + $scope.samochod.dostepnosc);
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
    displaysamochodid.createSamochod = createSamochod;


    var klientId = $stateParams.klientId;
    path = '/getKlientById/'+ klientId;
    KlienciModel.getKlientById().then(function (result) {
      $scope.klient = result.data;
      console.log("Zwracam: " + $scope.klient);
    })



  })

  .controller('WypozyczeniaCtrlUpdate', function (WypozyczenieModel, $stateParams, $scope, $location, SamochodyModel, $state){

    var wypozyczeniedash = this;
    var wyp = this;
    function getWypozyczenie() {
      path = '/getWypozyczenie';
      WypozyczenieModel.all().then(function(result){
        wypozyczeniedash.wypozyczenie = result.data;
        console.log(wypozyczeniedash.wypozyczenie.length);
      })
    }

    wypozyczeniedash.wypozyczenie = [];
    getWypozyczenie();

    function createWypozyczenie(wypozyczenie) {

      path = '/getWypozyczenie';
      WypozyczenieModel.create(angular.extend({},{id: wypozyczeniedash.wypozyczenie.id, samochod: $scope.samochod},wypozyczenie)).then(function (result){
        console.log('Tworze wypozyczenie');
        initCreateWypozyczenie();
        $state.go('app.wypozyczenia.show');
       // $location.path('/app/wypozyczenia/show');
      })
    }
    function initCreateWypozyczenie() {
      wyp.newWyp = {samochod: '', klient: '',
        pracownik: '', faktura: '', status: '', dataWypozyczenia: '', dataZwrotu: '', iloscKilometrow: ''};
    }
    wypozyczeniedash.createWypozyczenie = createWypozyczenie;


    var wypozyczenieId = $stateParams.id;


    path = '/getWypozyczenieById/'+ wypozyczenieId;
    WypozyczenieModel.getWypozyczenieById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.wypozyczenie = result.data;
      console.log("Zwracam: " + $scope.wypozyczenie);

    })
    var displaysamochodid = this;
    var samm = this;
    var samochodId = $stateParams.id;


    path = '/getSamochodById/'+ samochodId;
    SamochodyModel.getSamochodById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.samochod = result.data;
      $scope.samochod.dostepnosc = "false";
      console.log("Zwracam dostepnosc: " + $scope.samochod.dostepnosc);
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
    displaysamochodid.createSamochod = createSamochod;





  })
  .directive('ngUpdateHidden',function() {
  return function(scope, el, attr) {
    var model = attr['ngModel'];
    scope.$watch(model, function(nv) {
      el.val(nv);
    })
  };
  })

  .controller(
    'WypozyczenieById', function ($scope, $stateParams, WypozyczenieModel, $location) {

    $scope.click = function () {
      var samochodId = $scope.wypozyczenie.samochod.id;
      var klientId = $scope.wypozyczenie.klient.id;
      var dataWyp = $scope.wypozyczenie.dataWypozyczenia;
      console.log(samochodId, klientId, dataWyp)
    }
    var wypozyczeniedash = this;
    var wyp = this;
    function getWypozyczenie() {
      path = '/getWypozyczenie';
      WypozyczenieModel.all().then(function(result){
        wypozyczeniedash.wypozyczenie = result.data;
        console.log(wypozyczeniedash.wypozyczenie);
      })
    }

    wypozyczeniedash.wypozyczenie = [];
    getWypozyczenie();

    function createWypozyczenie(wypozyczenie) {

      $scope.wypozyczenie.samochod.dostepnosc = "true";

      path = '/getWypozyczenie';
      WypozyczenieModel.create(angular.extend({},{id: wypozyczenieId, dataWypozyczenia: $scope.wypozyczenie.dataWypozyczenia, samochod: $scope.wypozyczenie.samochod, klient: $scope.wypozyczenie.klient}, wypozyczenie)).then(function (result){
        console.log('Tworze wypozyczenie');
        initCreateWypozyczenie();
        $location.replace().path('/app/wypozyczenia/list/'+wypozyczenieId);
      })
    }
    function initCreateWypozyczenie() {
      wyp.newWyp = {klient: '',
        pracownik: '', faktura: '', status: '', dataWypozyczenia: '', dataZwrotu: '', iloscKilometrow: ''};
    }
    wypozyczeniedash.createWypozyczenie = createWypozyczenie;


    var wypozyczenieId = $stateParams.id;


    path = '/getWypozyczenieById/'+ wypozyczenieId;
    WypozyczenieModel.getWypozyczenieById().then(function (result) {
      // displaysamochodid.samochod = result.data;
      $scope.wypozyczenie = result.data;
      console.log("Zwracam: " );

    })

  })


  .constant('ENDPOINT_URI7', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/wypozyczenie')
  .service('WypozyczenieModel', function ($http, ENDPOINT_URI7){

    var service = this;


    function getUrl() {
      return ENDPOINT_URI7 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }

    service.getWypozyczenieById = function () {
      return $http.get(getUrl());
    }

    service.create = function (wypozyczenie) {
      return $http.post(getUrl(),wypozyczenie);
    }

    service.createWypozyczenie = function (wypozyczenie) {
      return $http.post(getUrl(),wypozyczenie);
    }

  });


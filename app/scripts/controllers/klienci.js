'use strict';
var path = '';

app
  .controller('KlienciCtrl', function (KlienciModel, $scope, $filter, NgTableParams, $location, $state) {

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
        $state.go('app.klienci.show');
      })
      return alert("Klient został dodany do bazy.");
    }
    function initCreateKlient() {
      kli.newKli = {imieKlienta: '', nazwiskoKlienta: '',
        pesel: '', adres: '', telefon: ''};
    }
    klientdash.createKlient = createKlient;


  })

  .controller('KlientCtrl', function ($scope, KlienciModel){

    path = '/getKlient';
    KlienciModel.all().then(function(result){
      $scope.klient = result.data;
      console.log("Zwracam klienta: " + $scope.klient);
    })
  })

  .controller('AdresCtrl', function (AdresModel, $scope){

    var adresdash = this;
    var adr = this;

      path = '/getAdres';
      AdresModel.all().then(function(result){
        $scope.adres = result.data;
        console.log($scope.adres);
      })

    adresdash.adres = [];

    function createAdres(adres) {

      path = '/getAdres';
      AdresModel.create(adres).then(function (result){
        console.log('Tworze nowy adres');
        initCreateAdres();
      })
    }
    function initCreateAdres() {
      adr.newAdr = {miejscowosc: '', ulica: '', nrDomu: '', kodPocztowy: ''};
    }
    adresdash.createAdres = createAdres;
  })
  //
  // .controller('ModelCtrl', function ($scope, ModelModel){
  //
  //   var modeldash = this;
  //   var mod = this;
  //
  //   path = '/getModel';
  //   ModelModel.all().then(function(result){
  //     $scope.model = result.data;
  //     console.log("Zwracam modele: " + $scope.model);
  //   })
  //



    // function createMarka(marka) {
    //   MarkaModel.createMarka(marka).then(function (result){
    //     console.log('Tworze marke');
    //     initCreateMarka();
    //   })
    // }
    // function initCreateMarka() {
    //   mar.newMarka = {nazwaMarki: ''};
    // }
    //markadash.createMarka = createMarka;

  // })
  //
  // .controller('TypCtrl', function ($scope, TypModel){
  //
  //   path = '/getTyp';
  //   TypModel.all().then(function(result){
  //     $scope.typ = result.data;
  //     console.log("Zwracam typy: " + $scope.typ);
  //   })

    // function createMarka(marka) {
    //   MarkaModel.createMarka(marka).then(function (result){
    //     console.log('Tworze marke');
    //     initCreateMarka();
    //   })
    // }
    // function initCreateMarka() {
    //   mar.newMarka = {nazwaMarki: ''};
    // }
    //markadash.createMarka = createMarka;

  // })
  //
  .controller('KlienciById', function ($scope, $stateParams, KlienciModel) {

    var klientId = $stateParams.id;
    path = '/getKlientById/'+ klientId;
    KlienciModel.getKlientById().then(function (result) {
      $scope.klient = result.data;
      console.log("Zwracam: " + $scope.klient);
    })

  })
  //
  // .controller('SamochodyNewCtrl', function (SamochodyModel) {
  //     return console.log("siema");
  //   }
  // )
  // .controller('SamochodyNew', function ($scope, SamochodyModel) {
  //
  //   var samm = this;
  //   var samochoddash = this;
  //   path = '/getSamochod';
  //
  //   function createSam(samochod) {
  //     console.log('Tworze samochod');
  //     SamochodyModel.createSamochod().then(function(){
  //       initCreateSamochod();
  //     })
  //   }
  //   function initCreateSamochod() {
  //     samm.newSamm = { marka: '', model: '', nrRejestracyjny: '',
  //     vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''};
  //   }
  //   samochoddash.createSam = createSam;
  // })
  .constant('ENDPOINT_URI5', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/klient')
  // .constant('ENDPOINT_URI2', 'http://localhost:8080/api/marka')
  // .constant('ENDPOINT_URI3', 'http://localhost:8080/api/model')
  // .constant('ENDPOINT_URI4', 'http://localhost:8080/api/typ')
  .service('KlienciModel', function ($http, ENDPOINT_URI5){

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
      return $http.post(getUrl(),klient);
    }
  })

  .constant('ENDPOINT_URI6', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/adres')
  .service('AdresModel', function ($http, ENDPOINT_URI6){

    var service = this;


    function getUrl() {
      return ENDPOINT_URI6 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }

    service.create = function (adres) {
      return $http.post(getUrl(),adres);
    }


  })
;

  // .service('MarkaModel', function ($http, ENDPOINT_URI2) {
  //
  //   var service = this;
  //
  //   function getUrl2() {
  //     return ENDPOINT_URI2 + path;
  //   }
  //
  //   service.all2 = function () {
  //     return $http.get(getUrl2());
  //   }
  // })
  //
  // .service('TypModel', function ($http, ENDPOINT_URI4) {
  //
  //   var service = this;
  //
  //   function getUrl() {
  //     return ENDPOINT_URI4 + path;
  //   }
  //
  //   service.all = function () {
  //     return $http.get(getUrl());
  //   }
  // })
  //
  // .service('ModelModel', function ($http, ENDPOINT_URI3) {
  //
  //   var service = this;
  //
  //   function getUrl() {
  //     return ENDPOINT_URI3 + path;
  //   }
  //
  //   service.all = function () {
  //     return $http.get(getUrl());
  //   }
  // });
// app
//   .controller('SamochodyCtrl', function ($scope) {
//
//   });



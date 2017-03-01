'use strict';
var path = '';

app
  .controller('SamochodyCtrl', function (SamochodyModel, $stateParams, WypozyczenieModel, $location, $scope, $state) {

    var samochoddash = this;
    var samm = this;

    function getSamochod() {
      path = '/getSamochod';
      SamochodyModel.all().then(function (result) {
        samochoddash.samochod = result.data;
        console.log("Samochody" + samochoddash.samochod);
        if (samochoddash.samochod == null){
            alert('asd');
      }
      })
    }

    samochoddash.samochod = [];
    getSamochod();

    function createSamochod(samochod) {

      path = '/getSamochod';
      SamochodyModel.create(samochod).then(function (result) {
        console.log('Tworze samochod');
        initCreateSamochod();
        $state.go('app.samochody.show');
      })
      return alert("Samochód został dodany do bazy.");
    }

    function initCreateSamochod() {
      samm.newSamm = {
        model: '', nrRejestracyjny: '',
        vin: '', stanLicznika: '', paliwo: '', dostepnosc: '', typ: ''
      };
    }

    samochoddash.createSamochod = createSamochod;
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


      path = '/getSamochodById/'+ samochodId;
      SamochodyModel.getSamochodById().then(function (result) {
       // displaysamochodid.samochod = result.data;
        $scope.samochod = result.data;
        console.log("Zwracam: " + $scope.samochod);
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

  })
  .constant('ENDPOINT_URI2', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/marka')
  .service('MarkaModel', function ($http, ENDPOINT_URI2) {

  var service = this;

  function getUrl2() {
    return ENDPOINT_URI2 + path;
  }

  service.all2 = function () {
    return $http.get(getUrl2());
  }
})
  .constant('ENDPOINT_URI4', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/typ')
  .service('TypModel', function ($http, ENDPOINT_URI4) {

    var service = this;

    function getUrl() {
      return ENDPOINT_URI4 + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }
  })
  .constant('ENDPOINT_URI3', 'http://lowcost-env.rmpquumrh9.eu-west-1.elasticbeanstalk.com/api/model')
  .service('ModelModel', function ($http, ENDPOINT_URI3) {

  var service = this;

  function getUrl() {
    return ENDPOINT_URI3 + path;
  }

  service.all = function () {
    return $http.get(getUrl());
  }
});


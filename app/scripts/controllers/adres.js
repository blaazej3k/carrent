// 'use strict';
// var path = '';
//
// app
//   .controller('AdresCtrl', function (AdresModel, $stateParams){
//
//     var adresdash = this;
//     var adr = this;
//     function getAdres() {
//       path = '/getAdres';
//       AdresModel.all().then(function(result){
//         adresdash.adres = result.data;
//         console.log(adresdash.adres);
//       })
//     }
//
//     adresdash.adres = [];
//     getAdres();
//
//     function createAdres(adres) {
//
//       path = '/getAdres';
//       AdresModel.create(adres).then(function (result){
//         console.log('Tworze nowy adres');
//         initCreateAdres();
//       })
//     }
//     function initCreateAdres() {
//       adr.newAdr = {miejscowosc: '', ulica: '', nrDomu: '', kodPocztowy: ''};
//     }
//     adresdash.createAdres = createAdres;
//
//
//   })
//
//   // .controller('MarkaCtrl', function ($scope, MarkaModel){
//   //
//   //   var markadash = this;
//   //   var mar = this;
//   //
//   //   path = '/getMarka';
//   //   MarkaModel.all2().then(function(result){
//   //     $scope.marka = result.data;
//   //     console.log("Zwracam marki: " + $scope.marka);
//   //   })
//
//
//
//
//     // function createMarka(marka) {
//     //   MarkaModel.createMarka(marka).then(function (result){
//     //     console.log('Tworze marke');
//     //     initCreateMarka();
//     //   })
//     // }
//     // function initCreateMarka() {
//     //   mar.newMarka = {nazwaMarki: ''};
//     // }
//     //markadash.createMarka = createMarka;
//
//   // })
//   //
//   // .controller('ModelCtrl', function ($scope, ModelModel){
//   //
//   //   var modeldash = this;
//   //   var mod = this;
//   //
//   //   path = '/getModel';
//   //   ModelModel.all().then(function(result){
//   //     $scope.model = result.data;
//   //     console.log("Zwracam modele: " + $scope.model);
//   //   })
//
//
//
//
//     // function createMarka(marka) {
//     //   MarkaModel.createMarka(marka).then(function (result){
//     //     console.log('Tworze marke');
//     //     initCreateMarka();
//     //   })
//     // }
//     // function initCreateMarka() {
//     //   mar.newMarka = {nazwaMarki: ''};
//     // }
//     //markadash.createMarka = createMarka;
//
//   // })
//
//   // .controller('TypCtrl', function ($scope, TypModel){
//   //
//   //   path = '/getTyp';
//   //   TypModel.all().then(function(result){
//   //     $scope.typ = result.data;
//   //     console.log("Zwracam typy: " + $scope.typ);
//   //   })
//
//     // function createMarka(marka) {
//     //   MarkaModel.createMarka(marka).then(function (result){
//     //     console.log('Tworze marke');
//     //     initCreateMarka();
//     //   })
//     // }
//     // function initCreateMarka() {
//     //   mar.newMarka = {nazwaMarki: ''};
//     // }
//     //markadash.createMarka = createMarka;
//
//   // })
//
//   // .controller('SamochodyById', function ($scope, $stateParams, SamochodyModel) {
//   //
//   //   // var displaysamochodid = this;
//   //   var samochodId = $stateParams.id;
//   //
//   //
//   //   path = '/getSamochodById/'+ samochodId;
//   //   SamochodyModel.getSamochodById().then(function (result) {
//   //     // displaysamochodid.samochod = result.data;
//   //     $scope.samochod = result.data;
//   //     console.log("Zwracam: " + $scope.samochod);
//   //   })
//   //
//   // })
//
//   .constant('ENDPOINT_URI6', 'http://localhost:8080/api/adres')
//   .service('AdresModel', function ($http, ENDPOINT_URI6){
//
//     var service = this;
//
//
//     function getUrl() {
//       return ENDPOINT_URI6 + path;
//     }
//
//     service.all = function () {
//       return $http.get(getUrl());
//     }
//
//     service.create = function (adres) {
//       return $http.post(getUrl(),adres);
//     }
//
//
//   });
//

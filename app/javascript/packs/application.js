import "bootstrap";
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
import('materialize-css');

import {sexChoice} from '../components/sexechoice'
if (document.getElementById('membre_sexe_true')){
  console.log('hello');
  sexChoice();
};

import {cardChoice} from '../components/cardchoixe'
if (document.getElementById('badge-mode-3')){
  cardChoice();
};


import {dropDown} from '../components/dropDown'
if (document.getElementById('paiement_roof')) {
  dropDown();
};

import {modePaiement} from '../components/modePaiement'
if (document.getElementById('input-mode')){
  modePaiement();
};


import {identBancaire} from '../components/identbancaire'
if (document.getElementById('identifiants')){
  console.log("Martial");
  identBancaire();
};

import {tabMotion} from '../components/tabsMotion'
if (document.getElementById('tabs-swipe-demo')) {
  console.log("Sergio Leon");
  tabMotion();
};
import {askMoneyHide} from '../components/askMoneyHide'
if (document.getElementById('show-2')) {
  console.log("silencio");
  askMoneyHide();
};

import {modalAskMoney} from '../components/modalAskMoney'
if (document.getElementById('modal1')) {
  modalAskMoney();
};

import {accepted} from '../components/accepted'
if (document.getElementById('accepted')) {
  accepted();
};











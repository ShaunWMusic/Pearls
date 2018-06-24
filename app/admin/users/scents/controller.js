import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  columns: [
  {
    "propertyName": "jan"
  },
  {
    "propertyName": "feb"
  },
  {
    "propertyName": "mar"
  },
  {
    "propertyName": "apr"
  },
  {
    "propertyName": "may"
  },
  {
    "propertyName": "jun"
  },
  {
    "propertyName": "jul"
  },
  {
    "propertyName": "aug"
  },
  {
    "propertyName": "sept"
  },
  {
    "propertyName": "oct"
  },
  {
    "propertyName": "nov"
  },
  {
    "propertyName": "dec"
  },

  ],
});

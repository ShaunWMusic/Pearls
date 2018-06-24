import Controller from '@ember/controller';
import {get} from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  reset() {
  this.setProperties({
    jan: '',
    feb: '',
    mar: '',
    apr: '',
    may: '',
    jun: '',
    jul: '',
    aug: '',
    sept: '',
    oct: '',
    nov: '',
    dec: '',
    userid: ''
  });
},
    columns: [
    {
      "propertyName": "jan",
      "editable": true
    },
    {
      "propertyName": "feb",
      "editable": true
    },
    {
      "propertyName": "mar",
      "editable": true
    },
    {
      "propertyName": "apr",
      "editable": true
    },
    {
      "propertyName": "may",
      "editable": true
    },
    {
      "propertyName": "jun",
      "editable": true
    },
    {
      "propertyName": "jul",
      "editable": true
    },
    {
      "propertyName": "aug",
      "editable": true
    },
    {
      "propertyName": "sept",
      "editable": true
    },
    {
      "propertyName": "oct",
      "editable": true
    },
    {
      "propertyName": "nov",
      "editable": true
    },
    {
      "propertyName": "dec",
      "editable": true
    },
    {
    "title": "Edit",
    "component": "editRow",
    "editable": false
    },
    {
      "title": "Delete",
      "component": "deleteRow",
      "editable": false
    }
    ],

  actions: {
    onSaveRow(param) {
    // return a truthy value (or Promise) for the row to exit edit mode
    return param.record.save();
    },

    // Example of ES6 destructuring parameters
    onCancelRow( { record } ) {
    record.rollbackAttributes();
    // return a truthy value for the row to exit edit mode
    return true;
  },

  newScent(ev) {
     ev.preventDefault();

     let user = this.store.createRecord('scent-schedule', this.model);
     // debugger
     user.save()
       .then(() => {
           window.location.reload(true);
       });
   },

   deleteRecord(record) {
       record.destroyRecord();
     },
  }
});

import Controller from '@ember/controller';
import {get} from '@ember/object';

export default Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  reset() {
  this.setProperties({
    barbershop: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    callLog: '',
    website: '',
    address: ''
  });
},

  columns: [
  {
    "propertyName": "barbershop"
  },
  {
    "propertyName": "contactPerson",
    "className": 'editcolumn'
  },
  {
    "propertyName": "phoneNumber",
    "className": 'editcolumn'
  },
  {
    "propertyName": "email"
  },
  {
    "propertyName": "callLog",
    "className": 'textcolumn'
  },
  {
    "propertyName": "website"
  },
  {
    "propertyName": "address"
  },
  {
  "title": "Edit",
  "component": "editRow",
  "className": 'editcolumn',
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
 newContact(ev) {
    ev.preventDefault();

    let user = this.store.createRecord('contact', this.model);
    // debugger
    user.save()
      .then(() => {
          // window.location.reload(true);
      });
  },
  deleteRecord(record) {
      record.destroyRecord();
    }
 }
});

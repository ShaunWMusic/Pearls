import Controller from '@ember/controller';

export default Controller.extend({
    columns: [
        {
        "propertyName": "email",
        "title": "Subscribers",
        "editable": false
        },
        {
        "propertyName": "trackingNumber",
        "editable": true
        },
        {
        "propertyName": "updatedAt",
         "component": "updatedAt",
         "className": "hidemobile",
        "editable": false
        },
        {
        "propertyName": "createdAt",
         "component": "createdAt",
         "className": "hidemobile",
        "editable": false
        },
        {
            "title": "Edit",
            "component": "editRow",
            "editable": false
        },
        // {
        //     "title": "Delete",
        //     "component": "deleteRow",
        //     "editable": false
        // }
    ],
    columns2: [
        {
        "propertyName": "receiptEmail",
        "title": "One Time Purchaser",
        "editable": false
        },
        {
        "propertyName": "trackingNumber",
        "editable": true
        },
        {
        "propertyName": "updatedAt",
        "component": "updatedAt",
         "className": "hidemobile",
        "editable": false
        },
        {
        "propertyName": "createdAt",
        "component": "createdAt",
         "className": "hidemobile",
        "editable": false
        },
        {
            "title": "Edit",
            "component": "editRow",
            "editable": false
        },
        // {
        //     "title": "Delete",
        //     "component": "deleteRow",
        //     "editable": false
        // }
    ],

    actions: {
      onSaveRow(param) {
        // return a truthy value (or Promise) for the row to exit edit mode
        return param.record.save();
      },

      // Example of ES6 destructuring parameters
      onCancelRow({record}) {
        record.rollbackAttributes();
        // return a truthy value for the row to exit edit mode
        return true;
      },
    //   newTrackingnumber1(ev) {
    //     ev.preventDefault();

    //     let user = this.store.createRecord('customer-inventory', this.model);
    //     // debugger
    //     user.save()
    //       .then(() => {
    //         // window.location.reload(true);
    //       });
    //   },
    //   newTrackingnumber2(ev) {
    //     ev.preventDefault();

    //     let user = this.store.createRecord('charge', this.model);
    //     // debugger
    //     user.save()
    //       .then(() => {
    //         // window.location.reload(true);
    //       });
    //   },
 
    }
 
});
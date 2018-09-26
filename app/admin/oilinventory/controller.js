import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    reset() {
        this.setProperties({
            beardbark: '',
            sandycheeks: '',
            totalbottles: ''
        });
    },

    columns: [
        
        {
            "propertyName": "beardbark"
        },
        {
            "propertyName": "sandycheeks"
        },
        {
            "propertyName": "totalbottles"
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
        onCancelRow({ record }) {
            record.rollbackAttributes();
            // return a truthy value for the row to exit edit mode
            return true;
        },
        newBottles(ev) {
            ev.preventDefault();

            let user = this.store.createRecord('oilinventory', this.model);
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

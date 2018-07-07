import Controller from '@ember/controller';

export default Controller.extend({
    columns: [
        {
        "propertyName": "email"
        },
        {
        "propertyName": "admin"
        },
        {
        "propertyName": "barbershop"
        },
        {
        "propertyName": "customer"
        },
        // {
        //     "title": "Edit",
        //     "component": "editRow",
        //     "editable": false
        // },
        // {
        //     "title": "Delete",
        //     "component": "deleteRow",
        //     "editable": false
        // }
    ]
 
});
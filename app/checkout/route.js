import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

    model({ id }) {
      return {
        password: '',
        // address: '',
        // aptnumber: '',
        // city: '',
        // country: '',
        // state: '',
        // zip: '',
        username: '',
        email: '',
        plan_id: id
      };
    }
});



import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {

model() {
    return RSVP.hash({
        subscriber: this.store.findAll('customer'),
        onetime: this.store.findAll('charge'),
    })
}
});

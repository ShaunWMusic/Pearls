import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return {
        payment: '',
        password: '',
        email: '',
        charge_id: id,
        plan_id: id
    };
    }
});

import Route from '@ember/routing/route';

export default Route.extend({
    model({ id }) {
    return {
        product: '',
        password: '',
        email: '',
        plan_id: id
    };
    }
});

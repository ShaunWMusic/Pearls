import Route from '@ember/routing/route';

export default Route.extend({
    model({ id }) {
        return this.store.query('new-account', {
                filter: {
                    token: id
                }
        });
    }
});

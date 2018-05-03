import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend({
  authorizer: 'authorizer:token',

    host: config.DS.host,
    namespace: config.DS.namespace,
});

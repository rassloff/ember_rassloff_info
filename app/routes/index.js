import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;

  beforeModel() {
    this.session.transitionTo('index');
  }
}

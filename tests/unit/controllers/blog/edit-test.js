import { module, test } from 'qunit';
import { setupTest } from 'ember-rassloff-info/tests/helpers';

module('Unit | Controller | blog/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:blog/edit');
    assert.ok(controller);
  });
});

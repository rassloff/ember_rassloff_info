import Model, { attr } from '@ember-data/model';

export default class BlogModel extends Model {
  @attr('string')
  createdAt;
  @attr('string')
  description;
  @attr('string')
  title;
  @attr('string')
  updatedAt;
}

import Model, { attr, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('timestamp') createdAt;
  @attr('string') title;
  @attr('string') body;

  @hasMany('comment') comments;
}

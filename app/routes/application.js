import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    // this._makeFakeData();
    return this.store.findRecord('post', 'tC0XF90NS9jNR6nIcJHh'); // update me after making fake data
  }

  async _makeFakeData() {
    const post = this.store.createRecord('post', {
      title: 'The Title',
      body: 'The Body',
    });
    await post.save();

    for (let i = 0; i< 10; i++) {
      const comment = this.store.createRecord('comment', {
        post,
        body: 'Here is a comment.',
      });
      await comment.save();
    }
  }
}

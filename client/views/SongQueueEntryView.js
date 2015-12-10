// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
      'click': function() {
        console.log('DQ from SEQV');
        this.model.dequeue();
       }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

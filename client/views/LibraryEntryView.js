// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %> - </td><td class=title ><%= title %></td><td><%= playCount %></td><td><i class="fa fa-plus-square"></i> <i class="fa fa-minus-square"></i> <%= upvotes %></td>'),

  events: {
    'click .title': function() {
      //this.model.play();
      this.model.enqueue();
      //console.log("enqueue");
    },
    'click .fa-plus-square': function () {
      this.model.upvote();
    },
    'click .fa-minus-square': function () {
      this.model.downvote();
    }
  },
  initialize: function(){
    this.model.on('change:playCount', this.render, this);
    this.model.on('change:upvotes', this.render, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

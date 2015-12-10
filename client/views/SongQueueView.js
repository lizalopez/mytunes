// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);//pop
  },

  render: function() {
   this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    ); 
  }

});
//rendering and instanstiating SEQ
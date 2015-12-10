// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    //console.log(this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
    // console.log("model enqueue");

  },
  dequeue: function() {
    this.trigger('dequeue', this);
    //console.log(this.get('title'));
  },
  removeSong: function() {
    this.trigger('removeSong', this);
  },
  ended: function() {
   // debugger;
    //console.log('ended!!', this);
    this.trigger('dequeue', this);
    //this.destroy();
    this.trigger('ended', this);
  }

});

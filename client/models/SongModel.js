// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // initialize: function(){
  //   this.set('playCount', 0);
  // },
  defaults: {
    playCount: 0,
    upvotes: 0
  },
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
    this.set('playCount', this.get('playCount')+1);
    console.log(this.get('playCount'));
  },
  upvote: function(){
    this.set('upvotes', this.get('upvotes')+1);
  },
  downvote: function(){
    this.set('upvotes', this.get('upvotes')-1);
  }

});

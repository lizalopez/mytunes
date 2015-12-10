// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('change', this.removeSong , this);
  },
  removeSong: function(song) {
    this.remove(song);
  }

});
//change collection size and format
//triggers model.play
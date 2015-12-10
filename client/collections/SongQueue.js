// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.model.on();
  }

});
//change collection size and format
//triggers model.play
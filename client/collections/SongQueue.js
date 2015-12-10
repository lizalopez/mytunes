// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('change', this.removeSong , this);
   // this.on('enqueue', this.addSong , this)
    this.on('add', function(){
      if (!this.at(1)) {
        this.playFirst();
      }
    }, this);
    this.on('ended', this.removeSong, this);
    this.on('dequeue', this.removeSong, this);
  },
  // remove: function(song) {
  //   this.removeSong(song);
  // },
  removeSong: function(song) {
    //console.log('remove song' + song);
    //this.remove(this.at(0));
    this.shift();
    if(this.at(0)){
      //this.at(0).play();
      this.playFirst();
    }
  },
  addSong: function(song){
    this.add(song);
    //this.playFirst();
    console.log('SongQueue enqueue triggered')
  },
  playFirst: function(){
    console.log(this.at(0));
    if(this.at(0)){
      this.at(0).play();
    }
  }

});
//change collection size and format
//triggers model.play
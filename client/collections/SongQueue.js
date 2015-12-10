// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('change', this.removeSong , this);
   // this.on('enqueue', this.addSong , this)
    // this.on('add', function(){
    //   if (!this.at(1)) {
    //     this.playFirst();
    //   }
    // }, this);
    this.on('ended', this.removeSong, this);
    this.on('dequeue', this.dequeue, this);
    // this.on('removeSong', this.removeSong, this);

  },
  dequeue: function() {
    this.shift();
    if(this.at(0)){
      //this.at(0).play();
      this.playFirst();
    }
  },
  // removeSong: function(song) {
  //   //console.log('remove song' + song);
  //   this.remove(song);
  // },
  addSong: function(song){
    if(!this.at(0)) {
      this.add(song);
      this.playFirst();
    } else{
      this.add(song);
    }
    //this.playFirst();
    //console.log('SongQueue enqueue triggered')
  },
  playFirst: function(){
    console.log(this.at(0).attributes.title);
    if(this.at(0)){
      this.at(0).play();
    }
  }

});
//change collection size and format
//triggers model.play
// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
 

    params.library.on('play', function(song) {
      //if(!this.get('currentSong')) {
        this.set('currentSong', song);
      //} 
      //console.log('APP:', this);
      this.get('songQueue').addSong(song);
      // console.log(this.get('songQueue'));
    }, this);

    params.library.on('enqueue', function(song) {
      //this.set('currentSong', song);
      this.get('songQueue').addSong(song);

      //console.log(' triggered! songQueue');
    }, this);

    params.library.on('upvote', function(song) {
      //this.set('currentSong', song);
      this.get('songQueue').addSong(song);

      //console.log(' triggered! songQueue');
    }, this);

    this.get('songQueue').on('removeSong', function(song) {
      // console.log('dqing');
      this.get('songQueue').remove(song);
    }, this);

    // this.get('songQueue').on('ended', function(song) {
    //   console.log('songQueue end');
    //   this.get('songQueue').removeSong(song);
    // }, this);

  }

});

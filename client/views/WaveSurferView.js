// PlayerView.js - Defines a backbone view class for the music player.
var WaveSurferView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  
 //el: div,
  wavesurfer: {},
  initialize: function() {
    
    //wavesurfer.init();
    wavesurfer = Object.create(WaveSurfer);
    var options = {
      container: '#wave',
      waveColor: 'violet',
      progressColor: 'purple', 
      height: '300'
    };
    wavesurfer.init(options);
  
  },
  setSong: function(songModel){
    this.model = songModel;
    wavesurfer.load(this.model.attributes.url);
    //var self = this;
    // setTimeout(function(){
    //   wavesurfer.play();
    // }, 2000);
    wavesurfer.on('ready', function()
    {
      wavesurfer.play();
    });
    this.render(); 
    var self = this;
    wavesurfer.on('finish', function () {
      self.model.ended();
      //this.$el.html('');
    })
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }
//passing in audio buffer
});

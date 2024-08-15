(function() {
    var vertoHandle, vertoCallbacks;
  
    $.verto.init({}, bootstrap);
  
    function bootstrap(status) {
      vertoHandle = new jQuery.verto({
        // The params...
        login: '[USER]@[YOUR_FREESWITCH_SERVER_DOMAIN]',
    passwd: '[PASSWORD]',
    // As configured in verto.conf.xml on the server.
    socketUrl: 'wss://[YOUR_FREESWITCH_SERVER_DOMAIN]:8082',
    // TODO: Where is this file, on the server? What is the base path?
    ringFile: 'sounds/bell_ring2.wav',
    // STUN/TURN server config, more than one is allowed.
    // Instead of an array of objects, you can also pass a Boolean value,
    // false disables STUN, true uses the default Google STUN servers.
    iceServers: [
      {
        url: 'stun:[YOUR_STUN_SERVER]',
      },
    ],
    // These can be set per-call as well as per-login. They can also be set to
    // A specific device ID, or 'none' to disable that particular element of
    // the media flow.
    deviceParams: {
      // Set to 'none' to disable outbound audio.
      useMic: 'any',
      // Set to 'none' to disable inbound audio.
      useSpeak: 'any',
      // Set to 'none' to disable outbound video.
      useCamera: 'none',
    },
    // Optional Id of the HTML audio/video tag to be used for playing video/audio.
    // This can even be a function which will return an element id. (Use this as
    // function to create unique element for every new call specially when dealing
    // with multiple calls simultaneously to avoid conflicts between streams.
    // In this case, once call is finished, newly generated element will be
    // destroyed automatically)
    tag: "video-container",
    // Below are some more advanced configuration parameters.
    // Google Chrome specific adjustments/filters for audio.
    // Official documentation is scant, best to try them out and see!
    //audioParams: {
    //  googEchoCancellation: true,
    //  googAutoGainControl: true,
    //  googNoiseSuppression: true,
    //  googHighpassFilter: true,
    //  googTypingNoiseDetection: true,
    //  googEchoCancellation2: false,
    //  googAutoGainControl2: false,
    //},
    // Internal session ID used by Verto to track the call, eg. for call
    // recovery. A random one will be generated if none is provided, and,
    // it can be useful to provide a custom ID to store and reference for
    // other purposes.
    //sessid: sessid,
      }, vertoCallbacks);
    };
  
    vertoCallbacks = {
      onWSLogin: onWSLogin,
      onWSClose: onWSClose
    };
  
    function onWSLogin(verto, success) {
      console.log('onWSLogin', success);
    };
  
    function onWSClose(verto, success) {
      console.log('onWSClose', success);
    };
  })();
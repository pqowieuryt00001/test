  (function() {
      var elements = document.getElementsByClassName(".mdMN17Ttl .mdMN17Desc");
      var rng = document.createRange();
      rng.selectNodeContents(element);
      window.getSelection().addRange(rng);
      document.execCommand('copy');
  })();

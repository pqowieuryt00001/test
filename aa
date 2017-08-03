  (function() {
      var tmp_comment = '';

      function get_name_to_comment(comment) {
          var target_name = null;
          var target_info = comment.split(' ');
          console.info(target_info);
          console.info(target_info.length);
          console.info(2 <= target_info.length);
          if (2 <= target_info.length) {
              console.info('set_target yes');
              var reg = new RegExp(/[\(||\)||\{||\}||\.||\\]/, 'g');
              target_name = target_info[0].replace(reg, '');
          }
          return target_name;
      }

      function set_target(comment) {
          var name = get_name_to_comment(comment);
          if (name === null) { return false; }

          if (/dandy/.test(comment)) {
              console.info('dandyに追加されました　＝＞' + name);
              dandy_names.push(name);

              okinawa_names.some(function(v, i) {
                  if (v == name) okinawa_names.splice(i, 1);
              });
              geek_names.some(function(v, i) {
                  if (v == name) geek_names.splice(i, 1);
              });
              english_names.some(function(v, i) {
                  if (v == name) english_names.splice(i, 1);
              });
          } else if (/okinawa/.test(comment)) {
              console.info('okinawaに追加されました　＝＞' + name);
              okinawa_names.push(name);
              dandy_names.some(function(v, i) {
                  if (v == name) dandy_names.splice(i, 1);
              });
              geek_names.some(function(v, i) {
                  if (v == name) geek_names.splice(i, 1);
              });
              english_names.some(function(v, i) {
                  if (v == name) english_names.splice(i, 1);
              });
          } else if (/geek/.test(comment)) {
              console.info('geekに追加されました　＝＞' + name);
              geek_names.push(name);
              okinawa_names.some(function(v, i) {
                  if (v == name) okinawa_names.splice(i, 1);
              });
              dandy_names.some(function(v, i) {
                  if (v == name) dandy_names.splice(i, 1);
              });
              english_names.some(function(v, i) {
                  if (v == name) english_names.splice(i, 1);
              });
          } else if (/しょけん/.test(comment)) {
              okinawa_names.some(function(v, i) {
                  if (v == name) okinawa_names.splice(i, 1);
              });
              dandy_names.some(function(v, i) {
                  if (v == name) dandy_names.splice(i, 1);
              });
              geek_names.some(function(v, i) {
                  if (v == name) geek_names.splice(i, 1);
              });
              english_names.some(function(v, i) {
                  if (v == name) english_names.splice(i, 1);
              });
          } else if (/english/.test(comment)) {
              console.info('englishに追加されました　＝＞' + name);
              english_names.push(name);
              okinawa_names.some(function(v, i) {
                  if (v == name) okinawa_names.splice(i, 1);
              });
              dandy_names.some(function(v, i) {
                  if (v == name) dandy_names.splice(i, 1);
              });
              geek_names.some(function(v, i) {
                  if (v == name) geek_names.splice(i, 1);
              });
          }
      }

      function is_names(names, comment) {
          var flg = false;
          names.forEach(function(val, index, arr) {
              var reg = new RegExp('^' + val);
              if (reg.test(comment)) {
                  flg = true;
              }
          })
          return flg;
      }

      $($('.mdMN15Scroll')[0]).bind('DOMSubtreeModified', function(e) {
          var comment = e.target.lastElementChild.innerText;
          for (var key in replase_map) {
              var reg = new RegExp(key, 'gi');
              comment = comment.replace(reg, replase_map[key]);
          }

          console.info("validation前" + comment);
          if (comment !== tmp_comment) {
              console.info("読み上げる言葉" + comment);
              var synthes = new SpeechSynthesisUtterance(comment);
              var voices = window.speechSynthesis.getVoices();
              synthes.voice = voices[20];
              synthes.lang = "ja-JP"
              for (var i = 0; i < voices.length; i++) {
                  console.log(voices[i]['lang']);
                  if (voices[i]['lang'] === 'ja-JP') {
                      synthes.voice = voices[i];
                      console.log(voices[i]['lang']);
                      break;
                  }
              }

              synthes.pitch = 100;
              synthes.rate = 1.1;
              synthes.volume = 2;

              if (is_names(okinawa_names, comment)) {
                  synthes.pitch = 2;
                  synthes.rate = 0.5;
                  synthes.volume = 0.5;
              } else if (is_names(geek_names, comment)) {
                  synthes.pitch = -0.2;
                  synthes.rate = 0.65;
                  synthes.volume = 2.5;
              } else if (is_names(dandy_names, comment)) {
                  synthes.pitch = -0.5;
                  synthes.rate = 1.2;
                  synthes.volume = 2.5;
              } else if (is_names(english_names, comment)) {
                  console.log('is english■■■■■■■■■■■■■■■■■■■■■■');
                  synthes.lang = "en-US";
                  for (var i = 0; i < voices.length; i++) {
                      console.log(voices[i]['lang']);
                      if (voices[i]['lang'] === 'en-US') {
                          synthes.voice = voices[i];
                          console.log(voices[i]['lang']);
                          break;
                      }
                  }
              }
              speechSynthesis.speak(synthes);

              window.clipboardData.getData( "Text" )
              window.clipboardData.setData( "Text", comment )

              set_target(comment);
              comment_count++;
          }
          tmp_comment = comment;
          check_live_close();
      });
  })();

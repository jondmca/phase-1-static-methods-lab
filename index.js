class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');  
  }

  static titleize(string) {
    let str = string.replace(/([^\W_]+[^\s-]*) */g, function(text) {
      return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    });
    console.log(str)
    let lowers = ['The', 'A', 'An', 'But', 'Of', 'And', 'For', 'At', 'By', 'From'];
    for (let i = 0; i < lowers.length; i++){
      str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
      function(text) {
        return text.toLowerCase();
      });
    }
  }

  }
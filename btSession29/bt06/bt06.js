var chuoi = "hello world";

function capitalization(string) {
    var words = string.split(" ");
    for (var i = 0; i < words.length; i++) {
      var first_item = words[i].charAt(0).toUpperCase();
      words[i] = first_item + words[i].substring(1);
    }
    return words.join(" ");
  }

console.log("Chuỗi sau khi được in hoa cữ cái đầu là: ", capitalization(chuoi));
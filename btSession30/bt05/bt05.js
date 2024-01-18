let input = prompt("Nhập chuỗi:");

function check(str) {
    let words = str.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      let lastChar = words[i][words[i].length - 1];
      words[i] = words[i].slice(0, -1) + lastChar.toUpperCase();
    }
    
    return words.join(" ");
  }

console.log("Kết quả: " + check(input));
var arr = prompt("Vui lòng nhập một chuỗi bất kỳ để thực hiện lọc chuỗi");

function check(str){
    var letters = [];
    var numbers = [];
    var specials = [];

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
          letters.push(char);
        } else if (/[0-9]/.test(char)) {
          numbers.push(char);
        } else {
          specials.push(char);
        }
      }
          let orderedChars = letters.concat(numbers, specials);
    
      return orderedChars;
    }

console.log(check(arr));
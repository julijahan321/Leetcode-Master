//problem name validanagram

function isAnagram(s, t) {
    let map1 = new Map();
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (map1.has(char)) {
        map1.set(char, map1.get(char) + 1);
      } else {
        map1.set(char, 1);
      }
    }
  
    for (let i = 0; i < t.length; i++) {
      let char = t[i];
      if (map1.has(char)) {
        map1.set(char, map1.get(char) - 1);
      } else {
        map1.set(char, 1);
      }
    }
    //console.log(map1.values())
    let areEqual = true;
    for(let value of map1.values()){
      if(value!=0){
        areEqual=false;
        break;
      }
    }
    if (areEqual == true) {
      return true
    } else {
      return false
    }
  }
  let test1=isAnagram("anagram", "nagaram");
  let test2=isAnagram("rat","car")
  console.log(test1)
  console.log(test2)
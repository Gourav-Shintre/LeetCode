/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
    let start =0;
    let end=0;
    let set = new Set();
    let length=0;
    while(start<s.length){
        if(!set.has(s[start])){
            set.add(s[start]);
            start++;
            length=Math.max(length,set.size)

        }else{
            set.delete(s[end]);
            end++;
        }
    }
    return length;

    
    
    
    
};
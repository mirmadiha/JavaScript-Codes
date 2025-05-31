/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Example string : 'The quick brown fox'

Expected Output : 5
*/

const countString=function(str){
    let count=0;
    for(let val in str){
        if (str[val]=='a' || str[val]=='e'|| str[val]=='i'||str[val]=='o'|| str[val]=='u'){
            count++;
        }
    }
    return count;
}

const str="The quick brown fox";
console.log(countString(str)); // Expected Output : 5
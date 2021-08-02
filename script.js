const letterCounts = {}
const wordCounts={}
const button = document.getElementById("countButton");
button.addEventListener("click", function(){  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    let words=typedText.split(/\s/);
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    function contString(){
        for (let i = 0; i < typedText.length; i++) {
            currentLetter = typedText[i];
            if (letterCounts[currentLetter] === undefined) {
                letterCounts[currentLetter] = 1; 
             } else {
                letterCounts[currentLetter]++; 
             }
         }
         return letterCounts[currentLetter]
    }
    contString()
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
     function cntString(){
        for (let i = 0; i < words.length; i++) {
            currentLetter3 = words[i];
            if ( wordCounts[currentLetter3] === undefined) {
                wordCounts[currentLetter3] = 1; 
             } else {
                wordCounts[currentLetter3]++; 
             }
    
         }
         return  wordCounts[currentLetter3]
    }
    
    cntString()
    for (let word in  wordCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${ wordCounts[word]}, `;
        span.innerText = textContent; 
        const wordsz = document.getElementById("wordsDiv");
        wordsz.appendChild(span); 
        
     }
     
})








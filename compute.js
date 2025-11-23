
async function foo() {
const GUESSES = ["brass", "barns", "brain"]; 

const gameAppRoot = window.document.getElementsByTagName("game-app")[0]; 
const gameKeyboardRoot = gameAppRoot.shadowRoot.querySelector("game-keyboard"); 

gameKeyboardRoot.style.display = 'none'; 

for(word of GUESSES) {
    console.log(word);
    for(letter of word) {
        const keyboardBtn = gameKeyboardRoot.shadowRoot.querySelector(`button[data-key="${letter}"]`); 
        await new Promise(resolve => setTimeout(resolve, 500));
        keyboardBtn.click(); 
    }
    
    const enterBtn = gameKeyboardRoot.shadowRoot.querySelector('button[data-key="↵"]');
    enterBtn.click();  
    await new Promise(resolve => setTimeout(resolve, 2000));
}
}

foo(); 


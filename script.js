const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    
    document.getElementById('generateBtn').addEventListener('click', generatePasswords);
    
    function generatePasswords() {
        const passwordLength = parseInt(document.getElementById('passwordLength').value);
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
    
        let charSet = characters.slice(0, 52); // letters only
        if (includeNumbers) {
            charSet = charSet.concat(characters.slice(52, 62)); // add numbers
        }
        if (includeSymbols) {
            charSet = charSet.concat(characters.slice(62)); // add symbols
        }
    
        document.getElementById('password1').value = generateRandomPassword(passwordLength, charSet);
        document.getElementById('password2').value = generateRandomPassword(passwordLength, charSet);
    }
    
    function generateRandomPassword(length, charSet) {
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
        return password;
    }
    
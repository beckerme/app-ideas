document.getElementById('submit').onclick = function() {
    const inputField = document.getElementById('binInput').value;
    const outputField = document.getElementById('decOutput');
    let decNumber = 0;
    let valid = /^[01]{1,8}$/.test(inputField);

    if(valid){

        for(let i = 0; i < inputField.length; i++){
            const bit = inputField.charAt(i);
            const position = inputField.length - i - 1;
            decNumber += parseInt(bit) * Math.pow(2, position);  // Converting binary to decimal using bitwise operator. 2^position gives the value of 2 raised to the power of position. 0 * 2^position = 0, 1 * 2^position = 2^position. The result is then added to decNumber. 10010101 in binary is 193 in decimal. 10010
        }

        outputField.innerHTML = `the decimal value is: ${decNumber}`;
    } else{
        outputField.innerHTML = "Insert a value input. Only 0 and 1 and 8-digit numbers are accepted";
    }
     
};
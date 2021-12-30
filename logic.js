
    function calculate() {

        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;
        let number = document.getElementById("num").value;
    
        if (from == "Binary" && to == "Decimal") {
           
            if (validBinary(number)) {
                answer = binaryToDecimal(number);
                displayAns(answer);
            }
            else
                document.getElementById("display").innerHTML = "NOT A VALID INPUT";
        }

        else if (from == "Decimal" && to == "Binary") {
            answer = decimalToBinary(number);
            displayAns(answer);
        }

        else if (from == "Octal" && to == "Decimal") 
        {
            if (validOctal(number))
            {
            answer = octalToDecimal(number);
            displayAns(answer);
            }
            else
                document.getElementById("display").innerHTML = "NOT A VALID INPUT";
        }
        else if (from == "Octal" && to == "Binary") 
        {
            if (validOctal(number))
            {
            answer = octalToBinary(number);
            displayAns(answer);
            }
            else
                document.getElementById("display").innerHTML = "NOT A VALID INPUT";
        }

        else if (from == "Binary" && to == "Octal") 
        {
            if (validBinary(number)) 
            {
            answer = binaryToOctal(number);
            displayAns(answer);
            }
            else
            document.getElementById("display").innerHTML = "NOT A VALID INPUT";

        }

        else if (from == "Decimal" && to == "Octal") 
        {
            answer = decimalToOctal(number);
            displayAns(answer);
        }

        else 
        {
            if(validOctal(number)==true && from=="Octal")
            displayAns(number);
            else if (validBinary(number)==true && from=="Binary")
            displayAns(number);
            else if (from=="Decimal")
            displayAns(number);
            else
            document.getElementById("display").innerHTML = "NOT A VALID INPUT";
        }
    }

    // binary to decimal converter
    function binaryToDecimal(number) {
        let ans = 0;
        for (let i = 0; i < number.length; i++) {
            ans += number.charAt(i) * Math.pow(2, number.length - i - 1);
        }
        return ans;
    }

        // decimal to binary converter
    function decimalToBinary(number) {
        let ans = "";
        let rem = "";
        while (number != 0) {
            rem += number % 2;
            console.log(rem);
            number = Math.floor(number / 2);
            console.log(number);
        }
        for (let i = 0; i < rem.length; i++) {
            ans += rem.charAt(rem.length - i - 1);
        }
        return ans;
    }

    // Octal to decimal converter
    function octalToDecimal(number) {
        let ans = 0;
        for (let i = 0; i < number.length; i++) {
            ans += number.charAt(i) * Math.pow(8, number.length - i - 1);
        }
        return ans;
    }
    // Decimal to Octal converter
    function decimalToOctal(number) {
        let ans = "";
        let rem = "";
        while (number != 0) {
            rem += number % 8;
            console.log(rem);
            number = Math.floor(number / 8);
            console.log(number);
        }
        for (let i = 0; i < rem.length; i++) {
            ans += rem.charAt(rem.length - i - 1);
        }
        return ans;
    }

    function octalToBinary(number) {
        let ans = octalToDecimal(number);
        return decimalToBinary(ans);
    }
    // Octal to binary converter
    function binaryToOctal(number) {
        let ans = binaryToDecimal(number);
        return decimalToOctal(ans);
    }

    // Valid Binary Number or Not
    function validBinary(number) {
        let flag = true;
        for (let i = 0; i < number.length; i++) {
            if (number.charAt(i) != "1" && (number.charAt(i) != "0")) {
                flag = false;
                console.log(number.charAt(i));
                break;
            }
        }
        if (flag)
            return true;
        else
            return false;
    }

    // Valid Octal Number or Not
    function validOctal(number) {
        let flag = true;
        for (let i = 0; i < number.length; i++) {
            if (number.charAt(i)<0 || number.charAt(i)>7) {
                flag = false;
                console.log(number.charAt(i));
                break;
            }
        }
        if (flag)
            return true;
        else
            return false;
    }

    // displaying the answer
    function displayAns(answer) {
        document.getElementById("display").innerHTML = answer;
    }

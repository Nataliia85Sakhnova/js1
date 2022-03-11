        function Plus() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
         //   alert(Number(x) + Number(y));
            document.getElementById("result").innerHTML= Number(x) + Number(y)
        }

        function Minus() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
            document.getElementById("result").innerHTML= Number(x) - Number(y)
        }

        function Multi() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
            document.getElementById("result").innerHTML= Number(x) * Number(y)
        }

        function Divide() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
            document.getElementById("result").innerHTML= Number(x) / Number(y)
        }


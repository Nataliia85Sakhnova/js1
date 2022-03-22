        function Plus() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
         //   alert(Number(x) + Number(y));
            document.getElementById("result").innerHTML= Number(x) + Number(y)
            console.log(document.getElementById("result").innerHTML)
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
            console.log(typeof y);
            if(isNaN(y)){
                alert("Это не число!")
                return
            }
            
            else if(!Number(y)){
                alert("На 0 делить нельзя!") 
                return
            }

            document.getElementById("result").innerHTML= Number(x) / Number(y)

        }

        function select(sender) {
            console.log(sender);
            sender.classList.toggle("selected");
        }

        function handlechange(elem) {
            console.log(elem.value)
            document.getElementById("color").style.background=elem.value
        }


        function themeselect(sender) {
            console.log(sender);
            sender.classList.toggle("darktheme");
        }

        function themechange(elem) {
            console.log(elem.value)
            document.getElementById("theme").style.background=elem.value
        }





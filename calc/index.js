        function Plus() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
         //   alert(Number(x) + Number(y));
            showResult(Number(x) + Number(y))
            console.log(document.getElementById("result").innerHTML)
        }

        function Minus() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
            showResult(Number(x) - Number(y))
        }

        function Multi() {
            let x = document.getElementById("number1").value;
            let y = document.getElementById("number2").value;
            showResult(Number(x) * Number(y))
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

            showResult(Number(x) / Number(y))
            console.log(document.getElementById("color").innerText)
            console.log(document.getElementById("color").innerHTML)
        }

        const showResult = (answer) => {
            document.getElementById("result").innerHTML= `Ваш результат ${answer}`}

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

        plus.addEventListener("click", Plus);
        minus.addEventListener("click", Minus);
        multi.addEventListener("click", Multi);
        divide.addEventListener("click", Divide);





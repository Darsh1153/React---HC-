# React---HC-

The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

![image](https://github.com/user-attachments/assets/2090817a-5475-4451-ba2f-7788ec08a849)



# React working under the hood (Counter App)
How react re-renders any change in the state.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div id="parentComponent">

    </div>

    <script>
        let state = {
            count : 0
        }
        function buttonComponentReRender(){
            document.getElementById('parentComponent').innerHTML = " ";
            const component = buttonComponent(state.count);
            document.getElementById('parentComponent').appendChild(component);
        }
        function buttonComponent(count){
            const but = document.createElement('button');
            but.innerHTML = `counter: ${count}`;
            but.setAttribute('onclick', 'incrementCounter()');
            return but;
        }
        function incrementCounter(){
            state.count++;
            buttonComponentReRender();
        }
        buttonComponentReRender();
    </script>
    
</body>
</html>





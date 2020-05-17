window.onload = function () {

    var todoList = [];
        
    document.querySelector('.add').onclick = function () {
        var d = document.getElementById('todo').value;
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        out();
        

    }

    function out(){
        var out = '';
        for (var key in todoList){
            out +=todoList[key].todo + '<br>';
        }
        document.getElementById('out').innerHTML = out;
            
            
        };
        
    }
 

 let arr = [1,0,3,4];

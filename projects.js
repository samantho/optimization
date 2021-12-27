var basis;

function validmatrix(){
    try{
        // All boxes must have a value
        if((document.getElementById("subA").value == '') | (document.getElementById("subB").value == '') | (document.getElementById("subC").value == '') | (document.getElementById("subX").value == '')){
            alert("Fill in all boxes");
            return "none";
        }

        var a = math.matrix(JSON.parse("[" + document.getElementById("subA").value + "]"));
        var b = math.matrix(JSON.parse("[" + document.getElementById("subB").value + "]"));
        b = math.transpose(b);
        var c = math.matrix(JSON.parse("[" + document.getElementById("subC").value + "]"));
        var x = math.evaluate(document.getElementById("subX").value);


        // c must have as many elements as x
        if(math.size(c)._data[1] != x){
            alert("Matrix c must have a value for all x variables")
            return "none";
        }

        // A must have as many rows as b
        if(math.size(a)._data[0] != math.size(b)._data[0]){
            alert("Matrix b must have a value for each row of Matrix A");
            return "none";
        }

        // A must have as many columns as x
        if(math.size(a)._data[1] != x){
            alert("Matrix A must have a column for every x variable")
            return "none";
        }
        
        console.log("still running");

        return {"a":a, "b":b, "c":c, "x":x};
    } catch (error){
        console.error(error);
        alert("Error: check all matrices to make sure the information entered is correct");
        return "none";
    }
}




function canonical(){
    if(true){
        return true;
    } else {
        return false;
    }
}

function canonical_form(){

}





function matrixsub(){
    const matrix_return = validmatrix();
    if(matrix_return == "none"){
        return;
    } else {
        var a = matrix_return.a;
        var b = matrix_return.b;
        var c = matrix_return.c;
        var x = matrix_return.x;

        document.getElementById("matA").innerText = a.toString();
        document.getElementById("matB").innerText = b.toString();
        document.getElementById("matC").innerText = c.toString();
        document.getElementById("matX").innerText = x;

        window.location.hash = "steps";

        // Step 1: Basis
        // basis must be same size as rows of a
        //basis = math.evaluate('1:math.size(a)._data[1]');

        // [1,2],[3,4],[5,6]
        // [1,2,3]
        // [1,2]
        // 2
    }
}
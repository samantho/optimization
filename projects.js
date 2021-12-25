// const m = math.matrix();
// const rows = 2;
// const cols = 3;

var m = math.matrix();

// m.resize([rows,cols]);

function matrixsub(){
    try{
        const matsub = document.getElementById("matrixsub");
        m = math.matrix(JSON.parse("[" + matsub.value + "]"));
        console.log(math.det(m));
    } catch (error) {
        console.error(error);
        alert("wrong");
    }
}
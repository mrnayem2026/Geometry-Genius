// Triangle card start
document.getElementById('calculate').addEventListener('click', function(){
    getDate("first-name", "base" , "height")
})
// Triangle card end

// Rectangle card Start 
document.getElementById('rectangleCalc').addEventListener('click', function(){
    getDateForRectPara('rectangle-title','rectangle-width','rectangle-length')
})
// Rectangle card End

// parallelogram card Start
document.getElementById('parallelogramCalc').addEventListener('click', function(){
    getDateForRectPara('parallelogram-name','parallelogram-width','parallelogram-length')
})
// parallelogram card End




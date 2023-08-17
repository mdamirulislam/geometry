function triangleCalculator(){
    const baseElement = document.getElementById('triangleBase');
    const baseString = baseElement.value;
    const base = parseFloat(baseString);


    const hightElement = document.getElementById('triangleHight');
    const hightString = hightElement.value;
    const hight = parseFloat(hightString);

    const area = 0.5*base*hight

    const areaElement = document.getElementById('area');
    areaElement.innerText = area

    console.log(area)
}

function rectangleCalculator(){
    const element = document.getElementById('rectangleWidth');
    const string = element.value;
    const width = parseFloat(string);


    const lengthElement = document.getElementById('rectangleLength');
    const lengthString = lengthElement.value;
    const length = parseFloat(lengthString);
console.log(width, length)

    const area = width*length;

    const areaRectangular = document.getElementById('areaRectangular');
    areaRectangular.innerText =area
}
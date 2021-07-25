const navbar2python = document.getElementById("python-btn");
const navbar2html = document.getElementById("html-css-btn");
const navbar2fale = document.getElementById("fale-comigo-btn");

navbar2python.onclick = function () {
    if (navbar2python.value === 'hidden'){
        console.log('a função está ok');
        navbar2python.value = 'shown';
        // navbar2python.style.backgroundColor = "#000000";
        // navbar2python.style.color = "#FFFFFF";
        navbar2html.style.button.navbar2 = ":active";
    } 
    else if (navbar2python.value === 'shown') {
        console.log('a função está ok');
        navbar2python.value = 'hidden';
        // navbar2python.style.backgroundColor = "#dfdfdf";
        // navbar2python.style.color = "#000000";
        navbar2html.style.button.navbar2 = ":";
    }
}

navbar2html.onclick = function () {
    if (navbar2html.value === 'hidden'){
        console.log('a função está ok');
        navbar2html.value = 'shown';
        navbar2html.style.backgroundColor = "#000000";
        navbar2html.style.color = "#FFFFFF";
    } 
    else if (navbar2html.value === 'shown') {
        console.log('a função está ok');
        navbar2html.value = 'hidden';
        navbar2html.style.backgroundColor = "#dfdfdf";
        navbar2html.style.color = "#000000";
    }
} 
  
const btnChoice1 = document.getElementById('choice01');
const btnChoice2 = document.getElementById('choice02');
const btnChoice3 = document.getElementById('choice03');

const imgChoice1 = document.getElementById('op1');
const imgChoice2 = document.getElementById('op2');
const imgChoice3 = document.getElementById('op3');

const txtChoice1 = document.getElementById('choice-name1');
const txtChoice2 = document.getElementById('choice-name2')
const txtChoice3 = document.getElementById('choice-name3')

const btnShowMore = document.getElementById('show-more');

//Changes the products shown
btnShowMore.onclick = function () {
    if (btnChoice1.value === 'op1') {
        btnChoice1.value = 'op4';
        imgChoice1.src = 'img/chocolate-morango.jpg';
        txtChoice1.textContent = 'Escolher Chocolate com Morango';
    } 

    else if (btnChoice1.value === 'op4') {
        btnChoice1.value = 'op1';
        imgChoice1.src = 'img/4-queijos.jpg';
        txtChoice1.textContent = 'Escolher 4 Queijos';
    }

    if (btnChoice2.value === 'op2') {
        btnChoice2.value = 'op5';
        imgChoice2.src = 'img/champignon.jpg';
        txtChoice2.textContent = 'Escolher Champignon';
    }

    else if (btnChoice2.value === 'op5') {
        btnChoice2.value = 'op2';
        imgChoice2.src = 'img/camarao.jpg';
        txtChoice2.textContent = 'Escolher Camarão';
    }

    if (btnChoice3.value === 'op3') {
        btnChoice3.value = 'op6';
        imgChoice3.src = 'img/bacon.jpg';
        txtChoice3.textContent = 'Escolher Bacon';
    }

    else if (btnChoice3.value === 'op6') {
        btnChoice3.value = 'op3';
        imgChoice3.src = 'img/portuguesa.jpg';
        txtChoice3.textContent = 'Escolher Portuguesa';
    }

}

btnChoice1.onclick = function () {
    alert('Você escolheu: ' + txtChoice1.value);
},

btnChoice2.onclick = function () {
    alert('Você escolheu: ');
}

btnChoice3.onclick = function () {
    alert('Você escolheu: ');
}

// `${é assim}`

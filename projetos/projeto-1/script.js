const imagemDoutor = document.getElementById('img-card');
const humorDoutor = document.getElementById('img-humor');
const botaoHumorDoutor = document.getElementById('btn-humor');

botaoHumorDoutor.onclick = function () {
    if (botaoHumorDoutor.value === 'happy1') {
        botaoHumorDoutor.value = 'curious';
        imagemDoutor.src = 'img/doctor-curious.jpg';
        humorDoutor.textContent = 'The Doctor is curious!';
    }
    else if (botaoHumorDoutor.value === 'curious') {
        botaoHumorDoutor.value = 'sad';
        imagemDoutor.src = 'img/doctor-sad.jpg';
        humorDoutor.textContent = 'The Doctor is sad!';
    }
    else if (botaoHumorDoutor.value === 'sad') {
        botaoHumorDoutor.value = 'happy2';
        imagemDoutor.src = 'img/doctor-happy2.jpg';
        humorDoutor.textContent = 'The Doctor is happy!';
    }
    else if (botaoHumorDoutor.value === 'happy2') {
        botaoHumorDoutor.value = 'naughty';
        imagemDoutor.src = 'img/doctor-naughty.jpg';
        humorDoutor.textContent = 'The Doctor is naughty!';
    }
    else if (botaoHumorDoutor.value === 'naughty') {
        botaoHumorDoutor.value = 'happy3';
        imagemDoutor.src = 'img/doctor-happy3.jpg';
        humorDoutor.textContent = 'The Doctor is happy!';
    }
    else if (botaoHumorDoutor.value === 'happy3') {
        botaoHumorDoutor.value = 'angry';
        imagemDoutor.src = 'img/doctor-angry.jpg';
        humorDoutor.textContent = 'The Doctor is angry!';
    }
    else if (botaoHumorDoutor.value === 'angry') {
        botaoHumorDoutor.value = 'happy4';
        imagemDoutor.src = 'img/doctor-happy4.jpg';
        humorDoutor.textContent = 'The Doctor is happy!';
    }
    else if (botaoHumorDoutor.value === 'happy4') {
        botaoHumorDoutor.value = 'sad2';
        imagemDoutor.src = 'img/doctor-sad2.jpg';
        humorDoutor.textContent = 'The Doctor is sad!';
    }
    else if (botaoHumorDoutor.value === 'sad2') {
        botaoHumorDoutor.value = 'happy1';
        imagemDoutor.src = 'img/doctor-happy.jpg';
        humorDoutor.textContent = 'The Doctor is happy!';
    }
}
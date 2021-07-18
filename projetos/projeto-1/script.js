// Gets the current doctor image, mood text, button and icons displayed on screen
const imagemDoutor = document.getElementById('img-card');
const moodDoutor = document.getElementById('img-mood');
const botaomoodDoutor = document.getElementById('btn-mood');
const icon = document.getElementById('icon');
const shortcuticon = document.getElementById('shortcut-icon');

// Changes the current doctor image, mood text, button and icons displayed on screen
botaomoodDoutor.onclick = function () {
    if (botaomoodDoutor.value === 'happy1') {
        botaomoodDoutor.value = 'curious';
        imagemDoutor.src = 'img/doctor-curious.jpg';
        moodDoutor.textContent = 'The Doctor is curious!';
        icon.href = 'img/doctor-curious.jpg';
        shortcuticon.href = 'img/doctor-curious.jpg';
    }
    else if (botaomoodDoutor.value === 'curious') {
        botaomoodDoutor.value = 'sad';
        imagemDoutor.src = 'img/doctor-sad.jpg';
        moodDoutor.textContent = 'The Doctor is sad!';
        icon.href = 'img/doctor-sad.jpg';
        shortcuticon.href = 'img/doctor-sad.jpg';
    }
    else if (botaomoodDoutor.value === 'sad') {
        botaomoodDoutor.value = 'happy2';
        imagemDoutor.src = 'img/doctor-happy2.jpg';
        moodDoutor.textContent = 'The Doctor is happy!';
        icon.href = 'img/doctor-happy2.jpg';
        shortcuticon.href = 'img/doctor-happy2.jpg';
    }
    else if (botaomoodDoutor.value === 'happy2') {
        botaomoodDoutor.value = 'naughty';
        imagemDoutor.src = 'img/doctor-naughty.jpg';
        moodDoutor.textContent = 'The Doctor is naughty!';
        icon.href = 'img/doctor-naughty.jpg';
        shortcuticon.href = 'img/doctor-naughty.jpg';
    }
    else if (botaomoodDoutor.value === 'naughty') {
        botaomoodDoutor.value = 'happy3';
        imagemDoutor.src = 'img/doctor-happy3.jpg';
        moodDoutor.textContent = 'The Doctor is happy!';
        icon.href = 'img/doctor-happy3.jpg';
        shortcuticon.href = 'img/doctor-happy3.jpg';
    }
    else if (botaomoodDoutor.value === 'happy3') {
        botaomoodDoutor.value = 'angry';
        imagemDoutor.src = 'img/doctor-angry.jpg';
        moodDoutor.textContent = 'The Doctor is angry!';
        icon.href = 'img/doctor-angry.jpg';
        shortcuticon.href = 'img/doctor-angry.jpg';
    }
    else if (botaomoodDoutor.value === 'angry') {
        botaomoodDoutor.value = 'happy4';
        imagemDoutor.src = 'img/doctor-happy4.jpg';
        moodDoutor.textContent = 'The Doctor is happy!';
        icon.href = 'img/doctor-happy4.jpg';
        shortcuticon.href = 'img/doctor-happy4.jpg';
    }
    else if (botaomoodDoutor.value === 'happy4') {
        botaomoodDoutor.value = 'sad2';
        imagemDoutor.src = 'img/doctor-sad2.jpg';
        moodDoutor.textContent = 'The Doctor is sad!';
        icon.href = 'img/doctor-sad2.jpg';
        shortcuticon.href = 'img/doctor-sad2.jpg';
    }
    else if (botaomoodDoutor.value === 'sad2') {
        botaomoodDoutor.value = 'happy1';
        imagemDoutor.src = 'img/doctor-happy.jpg';
        moodDoutor.textContent = 'The Doctor is happy!';
        icon.href = 'img/doctor-happy.jpg';
        shortcuticon.href = 'img/doctor-happy.jpg';
    }
}
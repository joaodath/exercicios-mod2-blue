// Gets the current doctor image, mood text, button and icons displayed on screen
const imgDoctor = document.getElementById('img-card');
const moodDoctor = document.getElementById('img-mood');
const btnMoodDoctor = document.getElementById('btn-mood');
const icon = document.getElementById('icon');
const shortcuticon = document.getElementById('shortcut-icon');

// Changes the current doctor image, mood text, button and icons displayed on screen based on language
btnMoodDoctor.onclick = function () {
    if (btnMoodDoctor.value === 'happy1') {
        btnMoodDoctor.value = 'curious';
        imgDoctor.src = 'img/doctor-curious.jpg';
        moodDoctor.textContent = 'A Doutora está curiosa!';
        icon.href = 'img/doctor-curious.jpg';
        shortcuticon.href = 'img/doctor-curious.jpg';
    }
    else if (btnMoodDoctor.value === 'curious') {
        btnMoodDoctor.value = 'sad';
        imgDoctor.src = 'img/doctor-sad.jpg';
        moodDoctor.textContent = 'O Doutor está triste!';
        icon.href = 'img/doctor-sad.jpg';
        shortcuticon.href = 'img/doctor-sad.jpg';
    }
    else if (btnMoodDoctor.value === 'sad') {
        btnMoodDoctor.value = 'happy2';
        imgDoctor.src = 'img/doctor-happy2.jpg';
        moodDoctor.textContent = 'O Doutor está feliz!';
        icon.href = 'img/doctor-happy2.jpg';
        shortcuticon.href = 'img/doctor-happy2.jpg';
    }
    else if (btnMoodDoctor.value === 'happy2') {
        btnMoodDoctor.value = 'naughty';
        imgDoctor.src = 'img/doctor-naughty.jpg';
        moodDoctor.textContent = 'O Doutor está safadinho!';
        icon.href = 'img/doctor-naughty.jpg';
        shortcuticon.href = 'img/doctor-naughty.jpg';
    }
    else if (btnMoodDoctor.value === 'naughty') {
        btnMoodDoctor.value = 'happy3';
        imgDoctor.src = 'img/doctor-happy3.jpg';
        moodDoctor.textContent = 'O Doutor está feliz!';
        icon.href = 'img/doctor-happy3.jpg';
        shortcuticon.href = 'img/doctor-happy3.jpg';
    }
    else if (btnMoodDoctor.value === 'happy3') {
        btnMoodDoctor.value = 'angry';
        imgDoctor.src = 'img/doctor-angry.jpg';
        moodDoctor.textContent = 'O Doutor está com raiva';
        icon.href = 'img/doctor-angry.jpg';
        shortcuticon.href = 'img/doctor-angry.jpg';
    }
    else if (btnMoodDoctor.value === 'angry') {
        btnMoodDoctor.value = 'happy4';
        imgDoctor.src = 'img/doctor-happy4.jpg';
        moodDoctor.textContent = 'O Doutor está feliz!';
        icon.href = 'img/doctor-happy4.jpg';
        shortcuticon.href = 'img/doctor-happy4.jpg';
    }
    else if (btnMoodDoctor.value === 'happy4') {
        btnMoodDoctor.value = 'sad2';
        imgDoctor.src = 'img/doctor-sad2.jpg';
        moodDoctor.textContent = 'O Doutor está feliz!';
        icon.href = 'img/doctor-sad2.jpg';
        shortcuticon.href = 'img/doctor-sad2.jpg';
    }
    else if (btnMoodDoctor.value === 'sad2') {
        btnMoodDoctor.value = 'happy1';
        imgDoctor.src = 'img/doctor-happy.jpg';
        moodDoctor.textContent = 'O Doutor está feliz!';
        icon.href = 'img/doctor-happy.jpg';
        shortcuticon.href = 'img/doctor-happy.jpg';
    }
}
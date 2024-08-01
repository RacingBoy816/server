function saveData() {
    const data = {
        name: document.getElementById('name').value,
        bd: document.getElementById('bd').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        city: document.getElementById('city').options[document.getElementById('city').selectedIndex].text,
        district: document.getElementById('district').options[document.getElementById('district').selectedIndex].text,
        ward: document.getElementById('ward').options[document.getElementById('ward').selectedIndex].text,
        ctf: document.getElementById('ctf').value,
        toan1: document.getElementById('toan1').value,
        tv1: document.getElementById('tv1').value,
        nn1: document.getElementById('nn1').value,
        toan2: document.getElementById('toan2').value,
        tv2: document.getElementById('tv2').value,
        nn2: document.getElementById('nn2').value,
        favoriteSubjects: []
    };
    const subjects = document.getElementsByName('subjects');
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            data.favoriteSubjects.push(subjects[i].value);
        }
    }
    localStorage.setItem('formData', JSON.stringify(data));
    alert('Dữ liệu đã được lưu. Bạn sẽ được đưa đến trang xuất file PDF. Vui lòng nhấn nút OK.');

    window.location.href = 'submit.html';

}
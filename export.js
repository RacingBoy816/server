document.getElementById('generatePdf').addEventListener('click', function() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        const docDefinition = {
            content: [
                { text: 'KẾT QUẢ KHẢO SÁT ĐIỂM HỌC TẬP VÀ SỞ THÍCH MÔN HỌC CỦA HỌC SINH', fontSize: 18, bold: true, alignment: 'center'},
                { text: '------***------', fontSize: 18, bold: true, alignment: 'center'},
                { text: 'Thông tin học sinh', fontSize: 16, bold: true },
                { text: `Họ và tên: ${formData.name}`, fontSize: 14 },
                { text: `Ngày tháng năm sinh: ${formData.bd}`, fontSize: 14 },
                { text: `Email: ${formData.email}`, fontSize: 14 },
                { text: `Số điện thoại: ${formData.tel}`, fontSize: 14 },
                { text: `Nơi cư trú hiện tại: ${formData.ward}, ${formData.district}, ${formData.city}`, fontSize: 14 },
                { text: 'Thông tin học tập', fontSize: 16, bold: true },
                { text: `Chứng chỉ tiếng Anh: ${formData.ctf}`, fontSize: 14 },
                { text: `Điểm thi cả năm của học sinh:`, fontSize: 14 },
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Môn học', 'Điểm thi học kỳ 1', 'Điểm thi học kỳ 2'],
                            ['Toán', formData.toan1, formData.toan2],
                            ['Tiếng Việt', formData.tv1, formData.tv2],
                            ['Ngoại Ngữ', formData.nn1, formData.nn2]
                        ]
                    }
                },
                { text: 'Môn học yêu thích:', style: 'subheader', fontSize: 14 },
                        formData.favoriteSubjects.join(', ')
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                }
            }
        };

        pdfMake.createPdf(docDefinition).download('PhieuKhaoSatHocSinh.pdf');
    } else {
        alert('No data found. Please enter data in the input page and save it first.');
    }
});

function trove() {
    window.location.href = 'index.html';
}
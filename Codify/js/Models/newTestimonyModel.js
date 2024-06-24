const btnSubmit = document.querySelector('#submit-form-test');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let tests = JSON.parse(localStorage.getItem('testimonys')) || [];

    const name = document.querySelector('#nomeAluno').value;
    const image = document.querySelector('#imgAluno').value;
    const subtitle = document.querySelector('#subtitulo').value;
    const text = document.querySelector('#testemunho').value;

    const newTestimony = new Testimonys(name, image, subtitle, text);

    tests.push(newTestimony);
    localStorage.setItem('testimonys', JSON.stringify(tests));

    alert('Testemunho adicionado com sucesso!');
    console.log(newTestimony);
    window.location.href = 'testimonys.html';

})

document.querySelector('#alumni-icon').style.color = '#78FCA0';
const textBox = document.querySelector('.text-box');

const btnAbout = document.querySelector('#about');
const btnStudiesPlan = document.querySelector('#studiesPlan');
const btnProfessionalWays = document.querySelector('#professionalWays');
const btnAcess = document.querySelector('#acess');
const btnInfo = document.querySelector('#info');

document.querySelector('#tsiw-icon').style.color = '#78FCA0';
document.querySelector('#tsiw-icon').style.fontSize = '30px';


function about() {
    btnAbout.style.color  = '#78FCA0';
    btnStudiesPlan.style.color  = '#000';
    btnProfessionalWays.style.color  = '#000';
    btnAcess.style.color  = '#000';
    btnInfo.style.color  = '#000';

    textBox.innerHTML = `
    <div class="subtitulo">
        <h2>Tecnologias e Sistemas de Informação para a Web</h2>
        <img src="/Codify/img/p.porto.png" alt="" id="logo-porto">
    </div>

    <div class="main">
        <div class="row">                                    
            <div class="col">
                <p>A licenciatura assenta numa visão contemporânea e multidisciplinar da Web, agregando competências focadas na conceção, design e desenvolvimento de produtos e software para a Web. Procura dotar os estudantes de conhecimento e competências práticas que lhes permitam o domínio de áreas emergentes como os serviços centrados na cloud, a computação móvel e ubíqua, ou plataformas Web e de negócio eletrónico, sem descurar competências hoje em dia fundamentais, como ergonomia e design de interação, usabilidade e user experience ou prototipagem de plataformas digitais.</p>
            </div>
            <div class="col" align="center">
                <img src="/Codify/img/students.jpeg" alt="" id="img-1">
            </div>
        </div>
        <br>
        <p>Esta característica de aliar competências relacionadas com o desenvolvimento de produtos a conceitos emergentes relacionados com o design de interfaces (user interface & user experience) é uma característica distintiva desta licenciatura e um dos motivos do seu grande sucesso!</p>
        <p>Esta é ainda uma área de atuação onde a empregabilidade está próxima do pleno emprego. De acordo com estudo realizado em 2019 junto dos diplomados desta licenciatura, a taxa de desemprego foi de 0%, isto é, verificou-se uma situação de pleno emprego!</p>
        <p>O curso privilegia ainda uma vertente eminentemente prática, como o demonstram os projetos incluídos no seu plano de estudos desde o 1.º ano, assim como uma forte ligação ao meio empresarial. Prova disso é o alargado leque de parceiros tecnológicos do curso, como a IOTech, ikuTeam, Helppier, Xing, Zalox, Ground Contro Studios, e-Goi, Nonius Software, BindTuning, FMQ, Increase Time, Interactive Brand, InovaMais, TechPitch, Blip, GoWeb, Planeta Virtual, INESC_TEC, Samsys, MGS, Celfocus, touchIT, MOG Technologies, entre outras.</p>
        <br>
        <b>Regime de estudos</b>
        <br>
        Diurno 
        <br>
        <b>Coordenador/Diretor de curso </b>
        <br>
        Ricardo Alexandre Peixoto Queirós 
        <br>
        <b>Acreditação do ciclo de estudos</b>
        <br> 
        Acreditado por: 6 ano(s) em 26/06/2020 
        <br>
        Consultar relatórios em <a href="https://www.a3es.pt/pt/resultados-acreditacao/tecnologias-e-sistemas-de-informacao-para-web-0" style="color: grey;">https://www.a3es.pt/pt/resultados-acreditacao/tecnologias-e-sistemas-de-informacao-para-web-0</a> 
        <br>
        <b>Área CNAEF:</b>
        <br>
        480 Informática * 
        <br>
        <b>Registo DGES Número:</b>
        <br> 
        R/A-Cr 98/2014/AL01 de 26-06-2020 
        <br>
        Data: 01/01/2001 
        <br>
        <b>Publicação em Diário da República N.º Despacho/Portaria:</b>
        <br>
        Despacho n.º 8282/2020 (2.ª Série), n.º 166
        <br> 
        Data: 26/06/2020
    </div>
    `
}

function studiesPlan() {
    btnAbout.style.color  = '#000';
    btnStudiesPlan.style.color  = '#78FCA0';
    btnProfessionalWays.style.color  = '#000';
    btnAcess.style.color  = '#000';
    btnInfo.style.color  = '#000';

    textBox.innerHTML = `
    <div class="subtitulo">
        <h2>Unidades Curriculares</h2>
        <img src="/Codify/img/p.porto.png" alt="" id="logo-porto">
    </div>

    <div class="main">
        <table border="1px" class="table table-striped table-hover planoCurricular">
            <tr class="tableTitle">
                <th>1ºANO</th>
                <th>Período</th>
                <th>ECTS</th>
            </tr>
            <tr>
                <td>Algoritmia e Estrutura de Dados</td>
                <td>1ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Fundamentos de Desgin</td>
                <td>1ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Matemática I</td>
                <td>1ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Sistemas Computacionais</td>
                <td>1ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Tecnologias Web</td>
                <td>1ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Conceção e Produção Multimédia</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Interfaces e Design para Aplicações</td>
                <td>2ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Matemática II</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Programação Orientada a Objetos</td>
                <td>2ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Projeto I</td>
                <td>2ºSemestre</td>
                <td>7.0</td>
            </tr>

        </table>

        <br>
        <hr>
        <br>

        <table border="1px" class="table table-striped table-hover planoCurricular">
            <tr class="tableTitle">
                <th>2ºANO</th>
                <th>Período</th>
                <th>ECTS</th>
            </tr>
            <tr>
                <td>Base de Dados</td>
                <td>1ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Computação Gráfica</td>
                <td>1ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Engenharia de Software</td>
                <td>1ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Ergonomia Cognitiva e Design de Interação</td>
                <td>1ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Programação Web I</td>
                <td>1ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Inteligência Artificial</td>
                <td>2ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Programação Web II</td>
                <td>2ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Projeto II</td>
                <td>2ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Testes e Performance Web</td>
                <td>2ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr class="opcional">
                <td>Análise de Filmes (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Cultura Digital (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Laboratório I (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional"> 
                <td>Laboratório II (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Programação I (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Programação II (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Publicação e Divulgação em Media Digitais (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Som (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Som e Imagem (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Som I (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Teoria e Análise da Imagem (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Teorias e Práticas da Comunicação (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Vídeo (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr class="opcional">
                <td>Vídeo I (opcional)</td>
                <td>2ºSemestre</td>
                <td>5.0</td>
            </tr>

        </table>

        <br>
        <hr>
        <br>

        <table border="1px" class="table table-striped table-hover planoCurricular">
            <tr class="tableTitle">
                <th>3ºANO</th>
                <th>Período</th>
                <th>ECTS</th>
            </tr>
            <tr>
                <td>Computação Móvel e Ubíqua</td>
                <td>1ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Inovação e Empreendendorismo</td>
                <td>1ºSemestre</td>
                <td>5.0</td>
            </tr>
            <tr>
                <td>Negócio Eletrônico e Segurança</td>
                <td>1ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Prototipagem Avançada em Plataformas Digitais</td>
                <td>1ºSemestre</td>
                <td>6.0</td>
            </tr>
            <tr>
                <td>Serviços e Interfaces para a Cloud</td>
                <td>1ºSemestre</td>
                <td>7.0</td>
            </tr>
            <tr>
                <td>Marketing Digital</td>
                <td>2ºSemestre</td>
                <td>3.0</td>
            </tr>
            <tr>
                <td>Projeto Final/Estágio</td>
                <td>2ºSemestre</td>
                <td>23.0</td>
            </tr>
            <tr>
                <td>Usabilidade e User Experience</td>
                <td>2ºSemestre</td>
                <td>4.0</td>
            </tr>
        </table>
    </div>
    `

}

function professionalWays() {
    btnAbout.style.color  = '#000';
    btnStudiesPlan.style.color  = '#000';
    btnProfessionalWays.style.color  = '#78FCA0';
    btnAcess.style.color  = '#000';
    btnInfo.style.color  = '#000';

    textBox.innerHTML = `
    <div class="subtitulo">
        <h2>Saídas Profissionais</h2>
        <img src="/Codify/img/p.porto.png" alt="" id="logo-porto">
    </div>
    <div class="row cards">
        <div class="col-lg card">
            <img src="/Codify/img/saidasProfissionais1.jpg" alt="" class="img-saidas">
            <h5 class="h5">Conceção e desenvolvimento de software e produtos Web</h5>
            <p class="main-text">
                Na Era da Informação, o desenvolvimento de softwares é uma das atividades mais valorizadas no mercado de trabalho. 
                <br><br>
                A cada dia que passa, novas soluções tecnológicas surgem para mudar a maneira como fazíamos determinada tarefa.
                <br><br>
                É uma transformação digital e cultural, pois incita uma nova mentalidade na população em geral, mas principalmente nos empreendedores.
                <br><br>
                Aqueles que não entenderem a importância do software em seu negócio – seja qual for sua área de atuação – tendem a ficar para trás.</p>
        </div>
        <div class="col-lg card">
            <img src="/Codify/img/saidasProfissionais2.jpg" alt="" class="img-saidas">
            <h5 class="h5">Desenvolvimento de produtos multiplataforma</h5>
            <p class="main-text">
                As empresas que desenvolvem sistemas não podem mais se prender a um determinado tipo de plataforma. A tendência do mercado, levando em consideração a demanda dos usuários, é a criação de soluções multiplataforma.
                <br><br>
                A diversidade de opções é interessante para os clientes e agrega valor ao produto desenvolvido pelas software houses. Na era dos smatphone, tablets e cloud computing os softwares restritos a uma única plataforma são cada vez menos competitivos e as empresas que desejam evoluir devem considerar o potencial do desenvolvimento multiplataforma uma prioridade.
            </p>
        </div>
        <div class="col-lg card">
            <img src="/Codify/img/saidasProfissionais3.jpg" alt="" class="img-saidas"> 
            <h5 class="h5">Desenvolvimento de plataformas de comercio e negócio eletrónico.</h5>
            <p class="main-text">
                O desenvolvimento de sites de e‑commerce consiste na criação e construção de uma loja de e‑commerce.
                <br><br>
                O design do site de e-commerce envolve projetar, construir e ajustar seu site de e-commerce para melhorar o desempenho, impulsionar as vendas e tornar seu portal de e-commerce um lugar que as pessoas querem vir e usar. Existem milhões de sites de e-commerce, e bilhões de consumidores os usam todos os dias.
                <br><br>
                Um site de e-commerce requer desenvolvimento de front-end e back-end. Seu site precisa de uma aparência moderna, bem como de um alto nível de facilidade de uso em qualquer dispositivo, seja um laptop ou um telefone celular.
            </p>
        </div>
    </div>
    `
}

function acess() {
    btnAbout.style.color  = '#000';
    btnStudiesPlan.style.color  = '#000';
    btnProfessionalWays.style.color  = '#000';
    btnAcess.style.color  = '#78FCA0';
    btnInfo.style.color  = '#000';

    textBox.innerHTML = `
    <div class="subtitulo">
        <h2>Acesso</h2>
        <img src="/Codify/img/p.porto.png" alt="" id="logo-porto">
    </div>
    <div class="row acesso">
        <b>Uma das seguintes provas de Ingresso:</b>
        <br>
        <p>
        (16) Matemática
        <br>
        (19) Matemática A</p>
        <br><br><br><br>
        <b>Condições Mínimas: </b>
        <p>
        Nota de Candidatura: 95 pontos;
        <br>
        Provas de Ingresso: 95 pontos
        </p>
        <br><br><br><br><br><br>
        <b>Nota:</b>
        <p>A informação disponibilizada nesta página não dispensa a consulta do Website de acesso ao ensino superior do Ministério da Ciência, Tecnologia e Ensino Superior - <a href="http://www.dges.gov.pt/pt" style="color: grey;">http://www.dges.gov.pt/pt</a></p>
    </div>
    `
}

function info() {
    btnAbout.style.color  = '#000';
    btnStudiesPlan.style.color  = '#000';
    btnProfessionalWays.style.color  = '#000';
    btnAcess.style.color  = '#000';
    btnInfo.style.color  = '#78FCA0';

    textBox.innerHTML = `
    <div class="subtitulo">
        <h2>Mais informações</h2>
        <img src="/Codify/img/p.porto.png" alt="" id="logo-porto">
    </div>

    <div class="row info">
        <b>Valor das propinas no ano letivo 2023/24:</b>
        <p>Estudante nacional — 697,00€/ano 
        <br>
        Estudante internacional — 3,000€/ano
        </p>
        <br><br><br><br>
        <b>Pagamento de Propinas:</b>
        <p>Numa única prestação no ato da inscrição/matrícula ou em 10 prestações (10%).</p>
        <br><br><br><br>
        <b>AVALIAÇÃO A3ES</b>
        <p>
            <a href="https://www.esmad.ipp.pt/documentacao/relatorio-de-autoavaliacao" style="color: grey;">RELATÓRIO DE AUTOAVALIAÇÃO</a>
            <br>
            <a href="https://www.esmad.ipp.pt/documentacao/relatorio-de-sintese" style="color: grey;">RELATÓRIO DE SÍNTESE</a>
            <br>
            <a href="https://www.esmad.ipp.pt/documentacao/relatorio-final-da-cae-da-a3es" style="color: grey;">RELATÓRIO FINAL DA CAE DA A3ES</a>
            <br>
            <a href="https://www.esmad.ipp.pt/documentacao/decisao-de-acreditacao-da-a3es" style="color: grey;">DECISÃO DE ACREDITAÇÃO DA A3ES</a>
        </p>
        <br><br><br><br>
        <div class="social-media-icons">
            <a href="https://www.youtube.com/channel/UCA1uYDftSXjN1Lx5E9-ByIg" title="Youtube"><i class="fa-brands fa-youtube social-media"></i></a>
            <a href="https://www.instagram.com/_tsiw.esmad_/" title="Instagram"><i class="fa-brands fa-instagram social-media"></i></a>
            <a href="https://www.facebook.com/LTSIW" title="Facebook"><i class="fa-brands fa-facebook social-media"></i></a>
            <a href="https://www.youtube.com/watch?v=qdou61b7Egc&list=PLGE7aF_13xNWG5_MnWX7lAyjBtOy1gt--&index=14" title="Teaser de apresentação"><i class="fa-solid fa-video social-media"></i></a>
        </div>
        

    </div>
    `
}

let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (!loggedUser) {
    document.querySelector('.dropdown').innerHTML = `
        <a href="login.html" class="nav-link py-3 px-2" title="Login" data-bs-toggle="tooltip" data-bs-placement="right">
            Fazer login
        </a>
    `;
    document.querySelector('.dropdown').style.color = '#78FCA0';
}

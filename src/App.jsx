import React, { useState } from "react";
import './App.css'
import './mobile.css';
import Footer from "/src/components/Footer/footer.jsx";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {
  const nav = document.querySelector('.nav-container');

  const showNav = () => {
    nav.style.display="flex";
  }

  const hideNav = () => {
    nav.style.display="none";
  }

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const showOverlay = () => {
      setIsOverlayVisible(true);
    };

    const closeOverlay = () => {
      setIsOverlayVisible(false);
    };
  
  return (
    <>
    <main class="main-screen">
      <header class="header flex-row">
        <div class="image-container-logo">
          <img src="/src/assets/Logo.png" class="logo"></img>
        </div>

        <i onClick={ showNav } class="mobile pointer transition absolute white uil uil-draggabledots"></i>
        <div id="navbar" class="flex-row align-container-center nav-container">
          <nav>
            <ul class="nav flex-row align-container-center">
              <i onClick={ hideNav } class="mobile pointer transition absolute white uil uil-times"></i>
              <li><a href="" class="uppercase nav-item lato-regular white transision">início</a></li>
              <li><a href="second-screen.html" class="uppercase nav-item lato-regular white transision">sobre</a></li>
              <li><a href="second-screen.html#egressos" class="uppercase nav-item lato-regular white transision">egressos</a></li>
              <li><a href="second-screen.html#localizacao" class="uppercase nav-item lato-regular white transision">localização & contato</a></li>
            </ul>
          </nav>

          <button onClick={ showOverlay } id="buttonOver" class="btn-transparent white btn-header-acess lato-black pointer uppercase transition botao-13">
            acessar
          </button>
        </div>
      </header>
      <section class="normal-padding section-1 flex-row">

        <aside class="flex-column welcome">
          <h1 class="white mont-700 uppercase no-cursor">
            seja muito bem vindo !
          </h1>
          <a href="explore.html"><button class="white btn-welcome-explore mont-900 btn-transparent pointer transition uppercase">
            Explorar
          </button></a>
        </aside>
        <aside class="relative welcome-photo-container">
          <div class="photo-container-w">
            <img src="/src/assets/girl-and-boy.png"></img>
          </div>
        </aside>
      </section>
    </main>
    <div class="relative flex-row align-container-center explore-section-container">
      <span class="mont-900 white no-cursor uppercase">
        Veja Mais
      </span>
    </div>
    <main class="container-explore-down aling-container-center flex-column">
      <section class="faqs">
        <div class="container flex-column align-container-center faqs_container">
          <article class="faq">
            <div class="faq_icon"><i class="color-1 uil uil-plus"></i></div>
            <div class="question_answer">
              <h4 class="mont-800 white uppercase">Feira de Matemática</h4>
              <button class="not-allowed pointer btn-visit-feira white transition mont-800 uppercase">Visitar</button>
              <p class="white mont-400">Uma feira de matemática é um evento educacional em que os estudantes têm a oportunidade de apresentar projetos, experimentos, jogos ou outras atividades relacionadas à matemática. Esses eventos geralmente ocorrem em escolas, universidades ou centros comunitários e são projetados para promover o interesse e o aprendizado da matemática de uma forma interativa e divertida.
      A Feira tem como finalidade incentivar, divulgar, e socializar as experiências, pesquisas e atividades matemáticas, bem como confirmar que as “Feiras de Matemática” se constituem numa experiência curricular ou extracurricular de relevância, para sistematizar e implementar os Projetos e/ou Programas de Educação Científica dos Alunos e Professores, contribuindo para a inovação curricular, durante o ano letivo, nas instituições envolvidas.

              Participe!</p>
            </div>
          </article>
        </div>
      </section>

      <aside class="container-other-info flex-column">
        <div class="courses flex-column">
          <h3 class="color-1 mont-900 uppercase">
            curso
          </h3>
          <article class="courses-content flex-row">
            <div class="left flex-column">
              <div class="horarios-w-link flex-column">
                <a id="somenteAlunos" href=""><span class="mont-600 white">
                  Horários
                </span></a>
                <div class="align-container-center link-horarios flex-row">
                  <div class="align-container-center link-container flex-column">
                    <i class="color-1 uil uil-link"></i>
                  </div>
                  <a href=""><span class="download mont-400 color-1">Baixar Horários</span></a>
                </div>
              </div>
              <a class="white mont-600" href="disciplinas.html">Disciplinas</a>
              <a class="white mont-600" href="https://meu.ifmg.edu.br/Corpore.Net/Login.aspx" target="_blank">Meu IFMG</a>
            </div>

            <div class="right flex-column">
              <a class="white mont-600" href="https://ead.ifmg.edu.br/saojoaoevangelista/" target="_blank">AVA</a>

              <div class="right-other flex-column">
                <a class="white mont-600" href="corpo.html">Corpo Docente</a>
                <a href="https://www.sje.ifmg.edu.br/portal/index.php/graduacao/matematica-licenciatura" target="_blank"><span class="download mont-400 color-1">Ver no site</span></a>
              </div>
            </div>
          </article>
        </div>
        <div class="flex-column books-and-lessons">
          <h3 class="color-1 mont-900 uppercase">
            aulas e livros
          </h3>
          <div class="flex-column aulas">
            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Cálculo I é Fácil</span>
              <div class="link-yt flex-row">
                <i class="red uil uil-youtube"></i>
                <a href="https://www.youtube.com/watch?v=jQI0bsCtdws&list=PLEfwqyY2ox86LhxKybOY3_IG-7R5herLC" target="_blank"><span class="download watch mont-500 white">Assistir</span></a>
              </div>
            </article>

            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Aula de Deriva...</span>
              <div class="link-yt flex-row">
                <img width="50px" height="17px" src="/src/assets/udemy.png"></img>
                <a href="https://www.udemy.com/course/aula-de-derivadas-de-funcoes-potencia/" target="_blank"><span class="download watch mont-500 white">Estudar</span></a>
                <span class="color-1 mont-500 align-container-center uppercase coord flex-column">
                  Gratuito
                </span>
              </div>
            </article>


            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Álgebra Linear par...</span>
              <div class="link-yt flex-row">
                <img width="50px" height="17px" src="/src/assets/udemy.png"></img>
                <a href="https://www.udemy.com/course/algebra-linear-para-quem-tem-pressa/?kw=%C3%81lgebra+Linear+para&src=sac" target="_blank"><span class="download watch mont-500 white">Estudar</span></a>
                <span class="color-1 mont-500 align-container-center uppercase coord flex-column">
                  Pago
                </span>
              </div>
            </article>

            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Expressões Algébricas</span>
              <div class="link-yt flex-row">
                <i class="red uil uil-youtube"></i>
                <a href="https://www.youtube.com/watch?v=i7MZpiRht2E" target="_blank"><span class="download watch mont-500 white">Assistir</span></a>
              </div>
            </article>
            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Limites: a Ideia Fund...</span>
              <div class="link-yt flex-row">
                <i class="red uil uil-youtube"></i>
                <a href="https://www.youtube.com/watch?v=8jaLYCGG7io" target="_blank"><span class="download watch mont-500 white">Assistir</span></a>
              </div>
            </article>
            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Inducão Matemática</span>
              <div class="link-yt flex-row">
                <i class="red uil uil-youtube"></i>
                <a href="https://www.youtube.com/watch?v=bhfhmre-QxU&list=PLrVGp617x0hAb3bokPETMb7ymiVW_FtuM" target="_blank"><span class="download watch mont-500 white">Assistir</span></a>
              </div>
            </article>
            <article class="flex-row lesson">
              <span class="no-cursor white mont-600 white">Limites, Derivadas e ...</span>
              <div class="link-yt flex-row">
                <img width="50px" height="17px" src="/src/assets/udemy.png"></img>
                <a href="https://www.udemy.com/course/calculo-limites-x/" target="_blank"><span class="download watch mont-500 white">Estudar</span></a>
                <span class="color-1 mont-500 align-container-center uppercase coord flex-column">
                  Pago
                </span>
              </div>
            </article>
          </div>
          <div class="flex-column livros">
            <article class="flex-row book">
              <span class="no-cursor white mont-600 white">Cálculo - Volume 1, James Stewart</span>
              <a href="https://tsxvpsbr.dyndns.org/arquivos/UFFS/James%20Stewart%20-%205%C2%AA%20Edi%C3%A7%C3%A3o%20-%20Vol.1.pdf" target="_blank"><button class="pointer mont-900 white transition link-book align-container-center flex-row">
                Ler
              </button></a>
            </article>
            <article class="flex-row book">
              <span class="no-cursor white mont-600 white">Matemática Discreta, Raquel Montezuma Pinheiro Cabral</span>
              <a href="https://educapes.capes.gov.br/bitstream/capes/432209/2/Livro_Matematica%20Discreta.pdf" target="_blank"><button class="pointer mont-900 white transition link-book align-container-center flex-row">
                Ler
              </button></a>
            </article>
            <article class="flex-row book">
              <span class="no-cursor white mont-600 white">Álgebra Linear com Aplicações, Howard Anton & Chris Rorres</span>
              <a href="https://oespetacularmundodamatematica.com/wp-content/uploads/2023/05/Algebra-Linear-Howard-Anton-10a-ed.pdf" target="_blank"><button class="pointer mont-900 white transition link-book align-container-center flex-row">
                Ler
              </button></a>
            </article>
          </div>

        </div>
      </aside>
    </main>

      {/* <!-- ////////////////////////// login screen --> */}
        <section class="login-screen flex-row align-container-center">
          <div style={{ display: isOverlayVisible ? 'flex' : 'none' }} class="login-container flex-column">
            <i id="buttonOver-Close" onClick={ closeOverlay } class="color-1 pointer uil uil-times"></i>
            <img src="/src/assets/Logo.png"></img>
            <aside class="user-container flex-column">
              <span class="color-1 mont-800">
                Usuário ou Email:
              </span>
              <input type="text"></input>
            </aside>
            <aside class="user-container flex-column">
              <span class="color-1 mont-800">Senha:</span>
              <input type="password"></input>
            </aside>

             <aside class="keepMe-container flex-row">
               <div>
                   <input class="pointer checkbox" type="checkbox"></input>
                   <span class="default color-1 mont-400">Mantenha-me Conectado</span>
               </div>
               <a class="mont-400 muted" href="">Esqueci minha senha</a>
              </aside>

            <button class="pointer transition login-button">
              Acessar
            </button>
          </div>
        </section>
        <section style={{ display: isOverlayVisible ? 'block' : 'none' }} className="overlay">

        </section>
          
    <Footer />
      </>
  )
}
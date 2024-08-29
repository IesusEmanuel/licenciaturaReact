import React from "react";

const Footer = () => {
  return (
    <>
    <footer class="footer flex-column">
      <div class="footer-logo-container">
        <img src="/src/assets/Logo.png" class="footer-logo"></img>
      </div>
      <span class="white mont-700">
        2024, Licenciatura em Matemática, SJE
      </span>

      <aside class="info flex-column">
        <span class="mont-400 white">
          Av. Primeiro de Junho, 1023, São João Evangelista, P3
        </span>
        <span class="mont-400 white">
        cre@gmail.com
        </span>
        <span class="mont-400 white">
        +55 33 95487-5421
        </span>
      </aside>
    </footer>
    <footer class="align-container-center second-footer flex-row">
      <span class="white mont-700">
        Desenvolvido por: <a class="white me" href="https://www.linkedin.com/in/iesus-emanuel/" target="_blank">Iesus Emanuel</a> e <a class="white me" href="">Bruno Figueiredo</a>
      </span>
    </footer>
      </>
  )
}

export default Footer;
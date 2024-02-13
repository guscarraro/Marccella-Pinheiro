import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.js";
import perfilMar from "../../images/perfilMar.jpeg";
import { SessaoInfoStyle } from "./style.js";

function SectionInfo() {
  return (
    <SessaoInfoStyle>
      <img src={perfilMar} alt="Perfil Marccella" />
      <p>
        Olá, sou Marccella, Médica Veterinária formada pela Universidade
        Positivo. Desde a graduação, meu interesse pelo agronegócio tem sido
        constante, fascinando-me desde a produção até o consumidor final.
        Durante meu curso, estagiei em clínica de cães e gatos, além de
        propriedades renomadas em bovinocultura leiteira e na Fazenda Escola da
        universidade. Essas experiências enriqueceram minha formação, destacando
        a importância da proatividade e comunicação em todas as áreas.
      </p>
    </SessaoInfoStyle>
  );
}

export default SectionInfo;

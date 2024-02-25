import '../assets/scss/estilosPersonalizados.css';

export const Utilservice = {
  mostrarCargando,
  ocultarCargando,
};
function mostrarCargando() {
    document.getElementById("divCargando").style.display = "block";
  }
  function ocultarCargando() {
    document.getElementById("divCargando").style.display = "none";
  }
  

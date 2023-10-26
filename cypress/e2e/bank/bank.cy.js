//import bankPage from '..'

const bank = require("../../support/page/bankPage");

describe('login bank', () => {

  it('login', () => {
    bank.ingresarUsuario()
    
  })

  it('login cliente regular', () => {
    bank.ingresarUsuarioRegular()
  })

  it('login cliente externo', () => {
    bank.ingresarUsuarioExterno()
  })

  it('login asesor bank', () => {
    bank.ingresarUsuarioAsesorBank()
  })

  it('login asesor bank - cliente no existe', () => {
    bank.ingresarUsuarioAsesorBankClienteNoExiste()
  })

  it('Usuario regular - inicio', () => {
    bank.usuarioRegularInicio()
  })

  it('Usuario Asesor Externo - inicio', () => {
    bank.usuarioAsesorExternoInicio()
  })

  it('Usuario Asesor Bank - inicio', () => {
    bank.usuarioAsesorBankInicio()
  })

  it('Usuario regular - Inicio Patrimonio Resumen', () => {
    bank.usuarioRegularInicioPatrimonioResumen()
  })

  it('Usuario regular - Inicio Patrimonio Rentabilidad', () => {
    bank.usuarioRegularInicioPatrimonioRentabilidadMensual()
  })

  it('Usuario regular - Inicio Patrimonio Evolución Historica', () => {
    bank.usuarioRegularInicioPatrimonioEvolucionHistorica()
  })

  it('Usuario regular - Inicio Patrimonio Calendario de Pagos', ()=>{
    bank.usuarioRegularInicioPatrimonioCalendarioDePagos()
  })

  it('Usuario regular - Inicio Patrimonio Detalle de Posicion', ()=>{
    bank.usuarioRegularInicioPatrimonioDetallePosicion()
  })

  it('Usuario regular Firmante - Inicio Patrimonio Resumen', () => {
    bank.usuarioRegularFirmanteInicioPatrimonioResumen()
  })

  it('Usuario regular Firmante - Inicio Patrimonio Rentabilidad', () => {
    bank.usuarioRegularFirmanteInicioPatrimonioRentabilidadMensual()
  })

  it('Usuario regular Firmante - Inicio Patrimonio Evolución Historica', () => {
    bank.usuarioRegularFirmanteInicioPatrimonioEvolucionHistorica()
  })

  it('Usuario regular Firmante - Inicio Patrimonio Calendario de Pagos', ()=>{
    bank.usuarioRegularFirmanteInicioPatrimonioCalendarioDePagos()
  })

  it('Usuario regular Firmante - Inicio Patrimonio Detalle de Posicion', ()=>{
    bank.usuarioRegularFirmanteInicioPatrimonioDetallePosicion()
  })


  it.only('Usuario regular Firmante - Inicio Patrimonio Detalle de Posicion', ()=>{
    bank.usuarioRegularTodosteInicioPatrimonioDetallePosicion()
  })

  // it('Modulo Patrimonio - Vista todos, detalle de cada portafolio', ()=>{
  //   bank.usuarioTodosPatrimonioDetallePortafolio()

  // })


})
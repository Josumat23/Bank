

class bankPage {

    idUsuarioInPut='#IdUsuario';
    btnLogin='#btnLogin1_';
    idPassInPut='#passTextId';
    btnIngresar='#btnIngresar';

    ingresarUsuario(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("100423")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        
    }

    ingresarUsuarioRegular(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
    }

    ingresarUsuarioExterno(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560E1")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
    }

    ingresarUsuarioAsesorBank(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("5005")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        /*cy.get('#frmPaso30PreguntaSeguridad > .content-campo-int > .content-input-int > .content-int > .input-campo-int').should('be.visible').type('a')
        cy.get('#ValidarNavegador').click()
        cy.get('#inputSi').click()*/
        cy.get('#input_usuario').type("100423")
        cy.get('#btn_usuario').click()

        
    }

    ingresarUsuarioAsesorBankClienteNoExiste(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("5005")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        /*cy.get('#frmPaso30PreguntaSeguridad > .content-campo-int > .content-input-int > .content-int > .input-campo-int').should('be.visible').type('a')
        cy.get('#ValidarNavegador').click()
        cy.get('#inputSi').click()*/
        cy.get('#input_usuario').type("423")
        cy.get('#btn_usuario').click()
        cy.get('#div_mdlasesorbusquedaclienteKO').should('have.text',"No se encontraron registros.")
        cy.get('#btn_mdlasesorbusquedaclienteKO').click()
    }

    usuarioRegularInicio(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        /*cy.get('#frmPaso30PreguntaSeguridad > .content-campo-int > .content-input-int > .content-int > .input-campo-int').should('be.visible').type('a')
        cy.get('#ValidarNavegador').click()
        cy.get('#inputSi').click()*/
        cy.wait(4000)
        cy.get('.portfolio-right > .profile-viewer > .viewer-descript').should('have.text',"Vista como titular")
        cy.get('.container-select > .nice-select > .current').should('have.text',"Todos como titular")
        cy.get('.portafolio-title').should('have.text','Mi patrimonio')
        cy.get('.portfolio-selector > :nth-child(1)').should('have.text','Seleccione su portafolio')
        cy.get('#id-tab-one-portafolios').should('have.text','1. Resumen')
        cy.get('.m-r-20 > .container-radio-text').should('have.text','Por clase de activo')
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .container-radio-text').should('have.text','Por tipo de producto')
        cy.get('.m-r-20 > .checkmark').click()
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .checkmark').click()
    }

    usuarioAsesorBankInicio(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("5005")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(4000)
        cy.get('#input_usuario').type('12560')
        cy.get('#btn_usuario').should('be.enabled').click()
        cy.wait(8000)
        cy.get('#btn_mdlasesorbusquedaclienteOK').should('be.enabled').click()
        cy.wait(30000)
        cy.get('.menu-active-int > .menuBank').should('have.text','Patrimonio')
        cy.get(':nth-child(1) > .menuBank').click()
        cy.wait(20000)
        /cy.get('.portfolio-right > .profile-viewer > .viewer-descript').should('have.text',"Vista como titular")
        cy.get('.container-select > .nice-select > .current').should('have.text',"Todos como titular")
        cy.get('.portafolio-title').should('have.text','Mi patrimonio')
        cy.get('.portfolio-selector > :nth-child(1)').should('have.text','Seleccione su portafolio')
        cy.get('#id-tab-one-portafolios').should('have.text','1. Resumen')
        cy.get('.m-r-20 > .container-radio-text').should('have.text','Por clase de activo')
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .container-radio-text').should('have.text','Por tipo de producto')
        cy.get('.m-r-20 > .checkmark').click()
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .checkmark').click()
    }

    usuarioAsesorExternoInicio(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560E1")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(4000)
        cy.get('.portfolio-right > .profile-viewer > .viewer-descript').should('have.text',"Vista como titular")
        cy.get('.container-select > .nice-select > .current').should('have.text',"Todos como titular")
        cy.get('.portafolio-title').should('have.text','Mi patrimonio')
        cy.get('.portfolio-selector > :nth-child(1)').should('have.text','Seleccione su portafolio')
        cy.get('#id-tab-one-portafolios').should('have.text','1. Resumen')
        cy.get('.m-r-20 > .container-radio-text').should('have.text','Por clase de activo')
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .container-radio-text').should('have.text','Por tipo de producto')
        cy.get('.m-r-20 > .checkmark').click()
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .checkmark').click()
    }

    usuarioRegularInicioPatrimonioResumen(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.portafolio-title').should('include.text','Mi patrimonio')
        cy.get('.container-select > .nice-select > .current').should('include.text','Todos como titular')
        cy.wait(4000)
        cy.get('#id-tab-one-portafolios').should('include.text','Resumen')
        cy.wait(4000)
        cy.get('.m-r-20 > .container-radio-text').should('include.text','Por clase de activo')
        cy.wait(4000)
        cy.get('[data-gtm-codcuenta="Por tipo de producto"]').should('include.text','Por tipo de producto')
        cy.wait(4000)
        cy.get('.inteligo-table-thead-tr > .headcol').should('include.text','Nombre')
        cy.wait(4000)
        cy.get('.inteligo-table-thead-tr > :nth-child(2)').should('include.text','Monto invertido')
        cy.wait(4000)
        cy.get('.inteligo-table-thead-tr > :nth-child(3)').should('include.text','Valor actual')
        cy.wait(4000)
        cy.get(':nth-child(1) > .inteligo-table-tbody-td-blue').should('include.text','Cash y depósitos')
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tfoot-tr > .headcol').should('have.text','Total')
        cy.wait(4000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(4000)
        cy.get('.m-t-20 > .button-primary').should('be.enabled')
        cy.wait(4000)
        cy.get('#dev-btn-ir-reporte').should('be.enabled')
        cy.wait(4000)
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .container-radio-text').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > .inteligo-table-tbody-td-blue').should('include.text','Cuenta corriente')
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get(':nth-child(2) > .inteligo-table-tbody-td-blue').should('include.text','Cuenta trading')
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get(':nth-child(3) > .inteligo-table-tbody-td-blue').should('include.text','Bonos')
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get(':nth-child(4) > .inteligo-table-tbody-td-blue').should('include.text','Fondos')
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get(':nth-child(5) > .inteligo-table-tbody-td-blue').should('include.text','Acciones')
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(5) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(5) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tfoot-tr > .headcol').should('include.text','Total')
        cy.wait(4000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(4000)
    }
    usuarioRegularInicioPatrimonioRentabilidadMensual(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.container-select > .nice-select > .current').click()
        cy.wait(4000)
        cy.get('.container-select > .nice-select > .list > [data-value="12560-1"]').click()
        cy.wait(4000)
        cy.get('#gtm-profileTypeDesactualizado').should('include.text','Perfil desactualizado')
        cy.wait(4000)
        cy.get('#id-tab-two-portafolios').should('not.be.disabled')
        cy.wait(4000)
        cy.get('#id-tab-two-portafolios').click()
        cy.wait(4000)
        cy.get('.analisis-title').should('include.text','Análisis de portafolio')
        cy.wait(4000)
        cy.get('#blockPortafolio > .analisis-subtitle').should('include.text','Seleccione su portafolio')
        cy.wait(4000)
        cy.get('#blockPortafolio > .nice-select > .current').should('include.text','Portafolio').click()
        cy.wait(4000)
        cy.get('#blockPortafolio > .nice-select > .list > [data-value="12560-2"]').click()
        cy.wait(4000)
        cy.get('#chartPortafolio1').should('not.be.enabled')
        cy.get('.portafolio-rentabilidad-table > :nth-child(1)').should('include.text','Rentabilidad')
        cy.get('.portafolio-rentabilidad-table > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('.portafolio-rentabilidad-table > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('.portafolio-rentabilidad-detail').should('include.text','Ver detalle').click()
        
        
    }

    usuarioRegularInicioPatrimonioEvolucionHistorica(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.container-select > .nice-select > .current').click()
        cy.wait(4000)
        cy.get('.container-select > .nice-select > .list > [data-value="12560-1"]').click()
        cy.wait(4000)
        cy.get('#id-tab-three-portafolios').should('be.not.enabled').click()
        cy.get('#blockPortafolio > .nice-select > .current').should('include.text','Portafolio').click()
        cy.wait(6000)
        cy.get('#blockPortafolio > .nice-select > .list > [data-value="12560-2"]').click()
        cy.wait(4000)
            
    }

    usuarioRegularInicioPatrimonioCalendarioDePagos(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.m-t-20 > .button-primary').should('be.enabled').click()
        cy.visit('https://dev.inteligobank.com/group/guest/mi-agenda')
        cy.wait(80000)
        //todos
        cy.get(':nth-child(1) > .nice-select > .current').should('include.text','Todos')
        cy.get(':nth-child(3) > .nice-select > .current').should('include.text','Todos los productos')
        cy.get('#datepickerFromPay').should('be.visible')
        cy.get('#datepickerToPay').should('be.visible')
        cy.get('#dev-btnbuscarbonos-desktop').should('be.enabled').click()
        cy.get('#SectionAbonos-Abonado > h3').should('be.visible').should('include.text','Abonado')
        cy.get('#dev-id-monto-abonado').should('have.length.greaterThan',0)
        cy.get('#SectionAbonos-PendientePorAbonar > h3').should('be.visible').should('include.text','Pendiente de abonar')
        cy.get('#dev-id-monto-pendiente').should('have.length.greaterThan',0)
        cy.get('.mTable-desktop-pay > thead > tr > #cliente').should('include.text','Tipo de abono')
        cy.get('.mTable-desktop-pay > thead > tr > #cliente > .icon').click()
        cy.get('.mTable-desktop-pay > thead > tr > :nth-child(2)').should('include.text','Tipo de Producto')
        cy.get('.mTable-desktop-pay > thead > tr > :nth-child(3)').should('include.text','de pago')
        cy.get('.mTable-desktop-pay > thead > tr > :nth-child(4)').should('include.text','Producto')
        cy.get('.mTable-desktop-pay > thead > tr > :nth-child(4) > .icon').click()
        cy.get('thead > tr > :nth-child(5) > div').should('include.text','Fecha de pago')
        cy.get('.mTable-desktop-pay > thead > tr > :nth-child(5) > .icon').click()
        cy.get('thead > tr > :nth-child(6)').should('include.text','Monto')
        cy.get(':nth-child(6) > .icon').click()
        cy.get('thead > tr > :nth-child(7) > div').should('include.text','Estado del abono')
        cy.get(':nth-child(7) > .icon').click()
        //enviar por correo
        cy.get('.spm__search-action > .buttons-block-right > [data-balloon-length="medium"]').should('be.enabled').click()
        cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-main > .inteligo-modal-header > .inteligo-modal-title').should('include.text','Enviar mail')
        cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-main > .inteligo-modal-footer > .button').should('not.be.enabled')
        cy.get('#inpSendmailCorreoProduct').should('be.visible').type('josue.ortega@entelgy.com')
        cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-main > .inteligo-modal-header > :nth-child(3) > .inteligo-modal-message-title').should('include.text','Asunto')
        cy.get('#inpSendmailAsuntoProduct').should('be.visible').type('detalle de productos')
        cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-main > .inteligo-modal-footer > .button').should('be.enabled').should('include.text','Continuar').click()
        //cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-main > .inteligo-modal-footer > .button').should('include.text','Mensaje')
        cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-sending > .inteligo-modal-header > .inteligo-modal-desc > p').should('include.text','Estimado')
        cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-sending > .inteligo-modal-footer > .button').should('be.enabled').click()
        //fin de envió de correo
        cy.get('#dev-btn-excel-desk').should('be.enabled').click()
        cy.get('#dev-btn-imprmir-desk').should('be.enabled').click()
    }   

    usuarioRegularInicioPatrimonioDetallePosicion(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('#dev-btn-ir-reporte').should('be.enabled').click()
        cy.visit('https://dev.inteligobank.com/group/guest/reporte-patrimonio-beta')
        cy.get('#text-subtitulo-producto').should('include.text','Detalle')
        cy.get('.detallepos-select-title').should('include.text','Seleccione')
        cy.get('.detallepos-select-title').should('be.visible').should('include.text','Seleccione su portafolio')
        cy.wait(10000)
        cy.get('.m-r-20 > .checkmark').should('be.visible')
        cy.get('.m-r-20 > .container-radio-text').should('include.text','Por clase de activo')
        cy.get(':nth-child(2) > .container-radio-text').should('include.text','Por tipo de producto')
        cy.get('.nombre-productos-reporte-pop > :nth-child(1) > .cab').should('include.text','CASH')
        //cy.get('.prev-slick').should('not.be.visable')
        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Moneda de inversión')
        cy.get('[data-slick-index="2"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Unidades')
        cy.get('[data-slick-index="3"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Precio de compra')
        cy.get('[data-slick-index="4"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Precio de mercado')
        cy.get('[data-slick-index="5"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text',"Invers. total en moneda de inv.")
        cy.get('[data-slick-index="6"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Inversión total en USD')
        cy.get('[data-slick-index="7"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Ganan./Pérd. no realizada USD')

        cy.get('.nombre-productos-reporte-pop > :nth-child(1) > :nth-child(2)').should('include.text','Current Account')
       /* cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').invoke('text').then((text)).invoke('text').should(text => {
            expect('USD').to.contain('PEN');
          })*/
        
        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').invoke('text').then((text) => {
            if (text.includes('USD')) {
               //Do Something
            }
            else if (text.includes('PEN')) { //206065
               //Do Something
            }
            else {
               //Do Something
            }
         })

        cy.get('[data-slick-index="1"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="2"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0) 
        cy.get('[data-slick-index="3"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0) 
        cy.get('[data-slick-index="4"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="5"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="6"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="7"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)

        
        cy.get('.nombre-productos-reporte-pop > :nth-child(1) > :nth-child(3)').should('include.text','Trading Account')

        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').invoke('text').then((text) => {
            if (text.includes('USD')) {
               //Do Something
            }
            else if (text.includes('PEN')) { //206065
               //Do Something
            }
            else {
               //Do Something
            }
         })

        cy.get('[data-slick-index="1"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="2"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="3"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="4"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)

        cy.get('.next-slick').should('be.enabled').click()
        //cy.get('[data-slick-index="8"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('Valor de mercado')
        //cy.get('[data-slick-index="9"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('Interés acumulado')

        cy.get('.next-slick').should('be.enabled').click({ force: true })
        cy.get('[data-slick-index="10"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Valor actual')
        cy.get('[data-slick-index="11"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Frecuencia de intereses')

        cy.get('.next-slick').should('be.enabled').click({ force: true })
        
        cy.wait(6000)
              
                
        cy.get('[data-slick-index="12"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Cupón')
        cy.get('[data-slick-index="13"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Próximo Pago')
        cy.get('[data-slick-index="14"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Monto Pago')
        cy.get('[data-slick-index="15"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > .cab2').should('include.text','Vencimiento')
        
        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)')
        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)')
        cy.get('[data-slick-index="9"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="9"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="10"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="10"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="12"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="14"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('.next-slick').should('be.enabled').click({ force: true })
        cy.wait(5000)

        cy.get(':nth-child(2) > .checkmark').should('not.be.checked')
        cy.get(':nth-child(2) > .checkmark').click()
        cy.wait(10000)

        //enviar por correo
        cy.get('.float-right > .email-detalle-posicion > .icon-mail').click()
        cy.get('.subtitulo-pop').should('include.text','ENVIAR MAIL')
        cy.get('#enviarEmail').should('not.be.enabled')
        cy.get('#emailDestinoId').should('be.visible').type('josue.ortega@entelgy.com')
        cy.get(':nth-child(4) > .nombre-campo-int').should('include.text','Asunto')
        cy.get('#emailAsuntoId').should('be.visible').type('detalle de productos')
        cy.get('#emailTextoId').should('be.visible').type('Mis movimientos')
        cy.get('#enviarEmail').should('be.enabled').click()
        //cy.get('#modal-inteligo-emailProduct > .inteligo-modal-content > .inteligo-modal-main > .inteligo-modal-footer > .button').should('include.text','Mensaje')
        cy.get('.texto-big-pop').should('include.text','Estimado')
        cy.get('#popMensajeExitoEmail > .content-pop-int > .content-btn-pop > .btn-principal').should('be.enabled').click()
        //fin de envió de correo

        cy.get('#excelDetalleReporte > .icon-descarga').click()
        cy.get('#printDetalleReporte > .icon-impresora').click()
        
    
    }

}

module.exports = new bankPage()

//export default bankPage;
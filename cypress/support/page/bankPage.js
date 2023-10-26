

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
        cy.wait(1000)
        cy.get('#id-tab-one-portafolios').should('include.text','Resumen')
        cy.wait(1000)
        cy.get('.m-r-20 > .container-radio-text').should('include.text','Por clase de activo')
        cy.wait(1000)
        cy.get('[data-gtm-codcuenta="Por tipo de producto"]').should('include.text','Por tipo de producto')
        cy.wait(1000)
        cy.get('.inteligo-table-thead-tr > .headcol').should('include.text','Nombre')
        cy.wait(1000)
        cy.get('.inteligo-table-thead-tr > :nth-child(2)').should('include.text','Monto invertido')
        cy.wait(1000)
        cy.get('.inteligo-table-thead-tr > :nth-child(3)').should('include.text','Valor actual')
        cy.wait(1000)
        cy.get(':nth-child(1) > .inteligo-table-tbody-td-blue').should('include.text','Cash y depósitos')
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > .headcol').should('have.text','Total')
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(2000)
        cy.get('.m-t-20 > .button-primary').should('be.enabled')
        cy.wait(2000)
        cy.get('#dev-btn-ir-reporte').should('be.enabled')
        cy.wait(2000)
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .container-radio-text').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(1) > .inteligo-table-tbody-td-blue').should('include.text','Cuenta corriente')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(2) > .inteligo-table-tbody-td-blue').should('include.text','Cuenta trading')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(3) > .inteligo-table-tbody-td-blue').should('include.text','Bonos')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(4) > .inteligo-table-tbody-td-blue').should('include.text','Fondos')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(5) > .inteligo-table-tbody-td-blue').should('include.text','Acciones')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(5) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(5) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > .headcol').should('include.text','Total')
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)

        //Validando el Sidebar
        cy.get('#menuPatrimonioTotal > .sidebar-mainoption > .inteligo-sidebar-text > .sidebar-title').should('include.text','Patrimonio total')
        cy.get('#menuPatrimonioTotal > .sidebar-mainoption > .inteligo-sidebar-text > .sidebar-subtitle').should('have.length.greaterThan',0)
        cy.get('.sidebar-mainoption > :nth-child(3) > .icon').click({force:true})
        cy.get('#menuPatrimonioTotal > .sidebar-mainoption').click()
        cy.get('.dev-content-cc > .sidebar-subblock-title').should('include.text','Cuenta corriente')
        cy.get('.dev-content-cc > .sidebar-subblock-title > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.get('.dev-content-portafolios > .sidebar-subblock-title').should('include.text','Portafolios')
        cy.get('.dev-content-portafolios > .sidebar-subblock-title > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.wait(3000)
        //seleccionando sección cuenta corriente
        cy.get('.dev-content-cc > .inteligo-portafolio-arrow').click()
        cy.wait(2000)
        cy.get('#port2 > .sidebar-holder-portf').click()
        //seleccionando el portafolio el card 1 desde el sidebar
        cy.get('[style="margin-top: 20px;"] > .sidebar-suboptions-box3 > .sidebar-suboptions-content > .inteligo-portafolio-arrow').click()
        cy.get('#port2 > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > :nth-child(1) > #cash4').should('include.text','Cash y depósitos')
        cy.get('#port2 > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.get('[style="margin-top: 20px;"] > .sidebar-suboptions-box3').click()
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > :nth-child(1) > .inteligo-portafolio-arrow > .icon').click()
        //cuenta corriente de cash
        cy.get('[style=""] > .portfolio-active-subitems-head > .dev-content-cc-depen > .sidebar-subblock-title').should('include.text','Cuenta corriente')
        cy.get('[style=""] > .portfolio-active-subitems-head > .dev-content-cc-depen > .sidebar-subblock-title > .sidebar-subblock-money-2').should('have.length.greaterThan',0)
        cy.get('[style=""] > .portfolio-active-subitems-head > .dev-content-cc-depen').click()
        //cuenta trading de cash
        cy.get('[style=""] > .portfolio-active-subitems-head > [data-section="secCtaTrading"] > .sidebar-subblock-title').should('include.text','Cuenta trading')
        cy.get('[style=""] > .portfolio-active-subitems-head > [data-section="secCtaTrading"] > .sidebar-subblock-title > .sidebar-subblock-money-2').should('have.length.greaterThan',0)
        cy.get('[style=""] > .portfolio-active-subitems-head > [data-section="secCtaTrading"]').click()
        //Activos
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > .dev-head-portfolio-active > #activo4').should('include.text','Activos')
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > .dev-head-portfolio-active > #activo4 > .sidebar-suboptions-money-2').should('have.length.greaterThan',0)
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > .dev-head-portfolio-active > .inteligo-portafolio-arrow > .icon').click()
        
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

    //Usuario regular Firmante

    usuarioRegularFirmanteInicioPatrimonioResumen(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.portafolio-title').should('include.text','Mi patrimonio')
        cy.get('.container-select > .nice-select > .current').should('include.text','Todos como titular')
        cy.wait(1000)
        cy.get('.dev-only-signatory').should('include.text','Firmante').click()
        cy.get('.portfolio-right > .profile-viewer > .viewer-descript').should('include.text','Vista como firmante')
        //resumen
        cy.get('#id-tab-one-portafolios').should('include.text','Resumen')

        cy.wait(1000)
        cy.get('.m-r-20 > .container-radio-text').should('include.text','Por clase de activo')
        cy.wait(1000)
        cy.get('[data-gtm-codcuenta="Por tipo de producto"]').should('include.text','Por tipo de producto')
        cy.wait(1000)
        cy.get('.inteligo-table-thead-tr > .headcol').should('include.text','Nombre')
        cy.wait(1000)
        cy.get('.inteligo-table-thead-tr > :nth-child(2)').should('include.text','Monto invertido')
        cy.wait(1000)
        cy.get('.inteligo-table-thead-tr > :nth-child(3)').should('include.text','Valor actual')
        cy.wait(1000)
        cy.get(':nth-child(1) > .inteligo-table-tbody-td-blue').should('include.text','Cash y depósitos')
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(1000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > .headcol').should('have.text','Total')
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(2)').should('have.length.greaterThan', 0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(3)').should('have.length.greaterThan', 0)
        cy.wait(2000)
        cy.get('.m-t-20 > .button-primary').should('be.enabled')
        cy.wait(2000)
        cy.get('#dev-btn-ir-reporte').should('be.enabled')
        cy.wait(2000)
        cy.get('[data-gtm-codcuenta="Por tipo de producto"] > .container-radio-text').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(1) > .inteligo-table-tbody-td-blue').should('include.text','Cuenta corriente')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(1) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(2) > .inteligo-table-tbody-td-blue').should('include.text','Cuenta trading')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(2) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(3) > .inteligo-table-tbody-td-blue').should('include.text','Productos estructurados')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(3) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get(':nth-child(4) > .inteligo-table-tbody-td-blue').should('include.text','Fondos')
        cy.wait(2000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(4000)
        cy.get('.inteligo-table-tbody > :nth-child(4) > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > .headcol').should('include.text','Total')
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(2)').should('have.length.greaterThan',0)
        cy.wait(2000)
        cy.get('.inteligo-table-tfoot-tr > :nth-child(3)').should('have.length.greaterThan',0)
        cy.wait(2000)
        /*
        //Validando el Sidebar
        cy.get('#menuPatrimonioTotal > .sidebar-mainoption > .inteligo-sidebar-text > .sidebar-title').should('include.text','Patrimonio total')
        cy.get('#menuPatrimonioTotal > .sidebar-mainoption > .inteligo-sidebar-text > .sidebar-subtitle').should('have.length.greaterThan',0)
        cy.get('.sidebar-mainoption > :nth-child(3) > .icon').click({force:true})
        cy.get('#menuPatrimonioTotal > .sidebar-mainoption').click()
        cy.get('.dev-content-cc > .sidebar-subblock-title').should('include.text','Cuenta corriente')
        cy.get('.dev-content-cc > .sidebar-subblock-title > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.get('.dev-content-portafolios > .sidebar-subblock-title').should('include.text','Portafolios')
        cy.get('.dev-content-portafolios > .sidebar-subblock-title > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.wait(3000)
        //seleccionando sección cuenta corriente
        cy.get('.dev-content-cc > .inteligo-portafolio-arrow').click()
        cy.wait(2000)
        cy.get('#port2 > .sidebar-holder-portf').click()
        //seleccionando el portafolio el card 1 desde el sidebar
        cy.get('[style="margin-top: 20px;"] > .sidebar-suboptions-box3 > .sidebar-suboptions-content > .inteligo-portafolio-arrow').click()
        cy.get('#port2 > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > :nth-child(1) > #cash4').should('include.text','Cash y depósitos')
        cy.get('#port2 > .sidebar-suboptions-money').should('have.length.greaterThan',0)
        cy.get('[style="margin-top: 20px;"] > .sidebar-suboptions-box3').click()
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > :nth-child(1) > .inteligo-portafolio-arrow > .icon').click()
        //cuenta corriente de cash
        cy.get('[style=""] > .portfolio-active-subitems-head > .dev-content-cc-depen > .sidebar-subblock-title').should('include.text','Cuenta corriente')
        cy.get('[style=""] > .portfolio-active-subitems-head > .dev-content-cc-depen > .sidebar-subblock-title > .sidebar-subblock-money-2').should('have.length.greaterThan',0)
        cy.get('[style=""] > .portfolio-active-subitems-head > .dev-content-cc-depen').click()
        //cuenta trading de cash
        cy.get('[style=""] > .portfolio-active-subitems-head > [data-section="secCtaTrading"] > .sidebar-subblock-title').should('include.text','Cuenta trading')
        cy.get('[style=""] > .portfolio-active-subitems-head > [data-section="secCtaTrading"] > .sidebar-subblock-title > .sidebar-subblock-money-2').should('have.length.greaterThan',0)
        cy.get('[style=""] > .portfolio-active-subitems-head > [data-section="secCtaTrading"]').click()
        //Activos
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > .dev-head-portfolio-active > #activo4').should('include.text','Activos')
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > .dev-head-portfolio-active > #activo4 > .sidebar-suboptions-money-2').should('have.length.greaterThan',0)
        cy.get('[style="margin-top: 20px;"] > .block-profile-portfolios-secondary > :nth-child(2) > .dev-head-portfolio-active > .inteligo-portafolio-arrow > .icon').click()
        */
    }

    usuarioRegularFirmanteInicioPatrimonioRentabilidadMensual(){

        //login
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.container-select > .nice-select > .current').click()
        cy.wait(4000)

        //Firmante
        cy.get('.dev-only-signatory').should('be.visible').should('include.text','Firmante').click()
        cy.get('#profileSinRiesgo > .risk-label > :nth-child(1) > .label--alert-warning').should('be.visible').should('include.text','Sin perfil de riesgo')
        cy.get('.portfolio-right > .profile-viewer > .viewer-descript').should('be.visible').should('include.text','Vista como firmante')
        cy.get('.container-select > .nice-select > .current').should('be.visible').should('include.text','Portafolio')
        
        
        
        cy.get('#id-tab-two-portafolios').should('not.be.disabled').click()
        cy.wait(2000)
        cy.get('#id-tab-two-portafolios').should('be.visible').should('include.text','Rentabilidad mensual').click()
        cy.wait(2000)

        //Analisis de portafolio
        cy.get('.portafolio-rentabilidad-table > :nth-child(1)').should('include.text','Rentabilidad')
        cy.get('.portafolio-rentabilidad-table > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('.portafolio-rentabilidad-table > :nth-child(3)').should('have.length.greaterThan',0)
        cy.get('.portafolio-rentabilidad-detail').should('include.text','Ver detalle').click()
        
        
    }

    usuarioRegularFirmanteInicioPatrimonioEvolucionHistorica(){

        //login
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.get('.container-select > .nice-select > .current').click()
        cy.wait(4000)
        //firmante

        cy.get('.dev-only-signatory').should('be.visible').should('include.text','Firmante').click()

        
        cy.get('#profileSinRiesgo > .risk-label > :nth-child(1) > .label--alert-warning').should('be.visible').should('include.text','Sin perfil de riesgo')
        cy.get('.portfolio-right > .profile-viewer > .viewer-descript').should('be.visible').should('include.text','Vista como firmante')
        cy.get('.container-select > .nice-select > .current').should('be.visible').should('include.text','Portafolio')


        cy.get('#id-tab-three-portafolios').should('not.be.disabled').click()
        cy.wait(2000)
        cy.get('#id-tab-three-portafolios').should('be.visible').should('include.text','Evolución histórica').click()
        cy.wait(2000)
        
    }

    usuarioRegularFirmanteInicioPatrimonioCalendarioDePagos(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        cy.get('.m-t-20 > .button-primary').should('be.enabled').click()
        cy.visit('https://dev.inteligobank.com/group/guest/mi-agenda')
        cy.wait(3000)
        //todos
        cy.get(':nth-child(1) > .nice-select > .current').should('include.text','Todos')
        cy.wait(50000)
        //Seleccionando firmante
        cy.get(':nth-child(1) > .nice-select').click().then(()=>{
            cy.get('[data-value="102968-1 - Firmante"]').click()
        })

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

    usuarioRegularTodosteInicioPatrimonioDetallePosicion(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        
        //Seleccionando Todos
          
        cy.get('.dev-only-all').click().then(()=>{
            
            cy.get('#dev-btn-ir-reporte').click()

        })

        cy.visit('https://dev.inteligobank.com/group/guest/reporte-patrimonio-beta')
        cy.get('#text-subtitulo-producto').should('include.text','Detalle')
        cy.get('.detallepos-select-title').should('include.text','Seleccione')
        cy.get('.detallepos-select-title').should('be.visible').should('include.text','Seleccione su portafolio')
        cy.wait(20000)



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

    usuarioRegularFirmanteInicioPatrimonioDetallePosicion(){
        cy.visit('https://dev.inteligobank.com/web/guest/home6')
        cy.get(this.idUsuarioInPut).type("12560")
        cy.get(this.btnLogin).click()
        cy.get(this.idPassInPut).type("Inteligo1")
        cy.get(this.btnIngresar).click()
        cy.wait(6000)
        
        //Seleccionando firmante
          
        cy.get('.dev-only-signatory').click()
        cy.get('.container-select > .nice-select > .current').click().then(()=>{
            
            cy.get('#dev-btn-ir-reporte').click()
        })

        cy.visit('https://dev.inteligobank.com/group/guest/reporte-patrimonio-beta')
        cy.get('#text-subtitulo-producto').should('include.text','Detalle')
        cy.get('.detallepos-select-title').should('include.text','Seleccione')
        cy.get('.detallepos-select-title').should('be.visible').should('include.text','Seleccione su portafolio')
        cy.wait(20000)



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
                cy.log('USD')
            }
            else if (text.includes('PEN')) { //206065
                cy.log('PEN')
            }
            else {
                cy.log('ERROR')
            }
         })

        cy.get('[data-slick-index="1"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="2"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0) 
        cy.get('[data-slick-index="3"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0) 
        cy.get('[data-slick-index="4"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="5"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="6"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)
        cy.get('[data-slick-index="7"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(2)').should('have.length.greaterThan',0)

        
        cy.get('.nombre-productos-reporte-pop > :nth-child(1) > :nth-child(5)').should('include.text','Trading Account')

        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > :nth-child(1) > :nth-child(5)').invoke('text').then((text) => {
            if (text.includes('USD')) {
               cy.log('USD')
            }
            else if (text.includes('PEN')) { //206065
               cy.log('PEN')
            }
            else {
               cy.log('ERROR')
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

//Módulo Patrimonio - Vista Todos (detalle de cada portafolio)

usuarioTodosPatrimonioDetallePortafolio(){
    cy.visit('https://dev.inteligobank.com/web/guest/home6')
    cy.get(this.idUsuarioInPut).type("12560")
    cy.get(this.btnLogin).click()
    cy.get(this.idPassInPut).type("Inteligo1")
    cy.get(this.btnIngresar).click()
    cy.wait(6000)

// Ingresando al modulo de patrimonio

    cy.get(':nth-child(2) > .box-hover > .header-menu-text').should('be.visible').click()
    cy.get('#idFiltroPerfil').should('be.visible').then((e)=>{

        cy.get('#idFiltroPerfil > .icono-select').click()
        cy.get('#idFiltroPerfil > .listaselect > .item-listaselect > :nth-child(2)').click() 
        cy.get('#idFiltroPerfil > .icono-select').click()  
    })

//vista de todos

    cy.get('#idFiltroPerfil > .seleccionado').should('contain.text','Todos')
    cy.get('.titulo_principal').should('contain.text','Mi Patrimonio')

    cy.get('#totalPatrimnio').should('have.length.greaterThan',0)
    cy.get('.tab-grafico-desktop').should('be.visible') 
    cy.get('#content-tabs-int1 > :nth-child(1) > .tab-active-int').should('contain.text','Detalle de Posición').and('be.visible')
    cy.get('.analytics-tab-abono-desktop').should('contain.text','Ver mis abonos').and('not.be.enabled')
    cy.get('#rdClaseActivo').should('be.enabled')
    //cy.get('#rdTipoProducto').should('not.be.enabled').and('contain.text','Tipo de producto')
    cy.get('[for="radio-b"]').should('not.be.enabled').and('contain.text','Tipo de producto')
    
    //Si da click por tipo de producto
    //Detalle de posicion
    // cy.get('#rdTipoProducto').click().then(()=>{
         
    //     cy.get('[for="radio-b"]').then(()=>{

    //         cy.get(':nth-child(2) > [style="text-transform: capitalize;"]').and('contain.text','Trading')
    //         //cy.get(':nth-child(3) > [style="text-transform: capitalize;"]').and('contain.text','Accion')
    //         cy.get(':nth-child(4) > [style="text-transform: capitalize;"]').and('include.text','Bonos')
    //         cy.get(':nth-child(4) > [style="text-transform: capitalize;"]').and('contain.text','Fondos')
    //         cy.get(':nth-child(6) > [style="text-transform: capitalize;"]').and('contain.text','Productos Estructurados')
    //         cy.get('.table-footer-int > :nth-child(1)').and('contain.text','Total')

    //     })


    // })

    //Cash (Cuentas bancarias)

    cy.get(':nth-child(1) > .card-accordion-int.analytics-tipo-Cliente > .nombre-item-int').click().then(()=>{
        cy.get('[style="display: block;"] > :nth-child(1) > .card-accordion-int.acordeon-cash-analytics > .nombre-item-int').should('include.text','Cash').click().then(()=>{

            cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .collapse-accordion-int > .accordion-item-int.detalle-analytics-Current-Account > .card-accordion-int > .nombre-item-int').should('include.text','Current Account').click()
            cy.get('#idCerrarPopUpDetalleCash').click()

            cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .collapse-accordion-int > .accordion-item-int.detalle-analytics-Trading-Account > .card-accordion-int').should('include.text','Trading Account').click()
            cy.get('#idCerrarPopUpDetalleCash').click()

        })
        

        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(3) > .portafolio-content').should('include.text','Portafolio').click().then(()=>{
            cy.get('.card-accordion-int.analytics-tipo-Renta-Fija > .nombre-item-int').should('include.text','Renta Fija')


        })

    })





}

}

module.exports = new bankPage()

//export default bankPage;
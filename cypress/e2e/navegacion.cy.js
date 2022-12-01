describe('Navegacion', () =>{
    it('Navegar a Platzi Homepage', () =>{
        cy.visit("https://platzi.com")
    })
    
    it('Reload the page', () =>{
        cy.reload();
    })
    
    it('Navegar y recargar sin Cache', () =>{
        cy.visit("https://google.com")
        cy.reload(true)
    })
    
    it.only('Navegar y volver hacia atras', () =>{
        cy.visit("https://google.com")
        cy.visit("https://www.google.com/search?q=platzi&hl=es-419&sxsrf=ALiCzsZMqfFyO8h-IU4kRLpH0BvKv_kdLw%3A1669736588700&source=hp&ei=jCiGY9qdKNSDwbkPxPGFoA0&iflsig=AJiK0e8AAAAAY4Y2nPEWcHoIEZCNlWEXZLElsYWbzG-v&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=platz&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QxwEQ0QMQJzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoECCMQJzoICC4QgwEQsQM6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoLCC4QgAQQxwEQrwE6EQguEIAEELEDEIMBEMcBEK8BOgsILhDUAhCxAxCABDoFCAAQsQM6CAguEIAEELEDOgsILhCABBCxAxCDAVCNBFj3EmD6GGgCcAB4AIAB3gKIAa0MkgEHMC4xLjMuMpgBAKABAbABCg&sclient=gws-wiz")
        cy.go("back") // -1
        cy.go("forward") // 1
    })
})

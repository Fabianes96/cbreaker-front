describe('Ccode breaker testing', function(){
    it('Probando funcionalidades', function(){

        cy.visit('http://localhost:3001/')           
        cy.get('#number-secret').type('1234').should('have.value','1234')

        cy.get('#btn-secret').click()
        cy.contains('ok, let the game begins')         
        
        
        cy.get('#number-guess').type('1234').should('have.value','1234')

        cy.get('#btn-guess').click()
        cy.contains('XXXX')          

          
     })
 
 })
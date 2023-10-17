/**
 * @author: Zahin Ahad
 */

export default class Utils{
    /**
     * @description Checks visibility of an element
     * @param {string} selector css selector for elements to be tested
     */
    is_visible(selector) {
        cy.get(selector).should('be.visible')
    }

    /**
     * @description Checks visibility and inner text of an element
     * @param {string} selector css selector for elements to be tested
     * @param {string} text pass the partial/ complete expected inner value of the element
     */
    elemVisibileAndContains(selector, text){
        cy.get(selector).should('be.visible')
            .and('contain', text)
    }
  
    /**
     * @description Checks whether an element is not visible
     * @param {string} selector css selector for element which is not expected to be visible
     */
    not_visible(selector) {
        cy.get(selector).should('not.be.visible')
    }
  
    /**
     * @description Checks whether an element exists
     * @param {string} selector css selector for element to be tested
     */
    elem_exist(selector) {
        cy.get(selector).should('exist')
    }
  
    /**
     * @description Checks whether an element does not exist
     * @param {string} selector css selector for element to be tested
     */
    not_exist(selector) {
        cy.get(selector).should('not.exist')
    }

    /**
     * @description Gets a selector and returns it
     * @param {string} selector css selector for element to be tested
     */
    getAndReturn(selector){
        return cy.get(selector)
    }

    /**
     * @description Checks whether a url is same as expected
     * @param {string} url pass the exact expected URL 
     */
    urlEquals(url){
        cy.url().should('eq', url)
    }

    /**
     * @description Checks whether a url contains partcular text
     * @param {string} text pass partial/ complete of the expected URL
     */
    urlContains(text){
        cy.url().should('contain', text)
    }

    /**
     * @description Checks whether a title contains partcular text
     * @param {string} text pass the text expected to be in the title 
     */
    titleContains(text){
        cy.title().should('contain', text)
    }

    /**
     * @description Checks whether a title equals partcular text
     * @param {string} text pass the exact text expected to be in the title 
     */
    titleEquals(text){
        cy.title().should('eq', text)
    }

    /**
     * @description Checks whether an element contains partcular text
     * @param {string} selector css selector for element to be tested
     * @param {string} text pass the expected inner text 
     */
    containText(selector, text){
        cy.get(selector).should('contain', text)
    }

    /**
     * @description Close the promotional popup if it is displayed
     * @param {int} sec pass the number of seconds to wait
     */
    waitForSeconds(sec){
        cy.wait(sec*1000)
    }

    /**
     * @description Hovers on the selected element 
     * @param {string} selector pass the selector of the element 
     */
    hover(selector) {
        cy.get(selector).trigger('mouseover', { timeout: 2500, force: true })
    }

    /**
     * @description Checks if an attribute of an element is present
     * @param {string} selector pass the selector of the element
     * @param {string} attr pass an attribute of the element
     */
    haveAttr(selector, attr){
        cy.get(selector).should('have.attr', attr)
    }

    /**
     * @description Checks if the value of an attribute exists
     * @param {string} selector pass the selector of the element
     * @param {string} attr pass an attribute of the element
     * @param {string} value pass the partial/ complete expected value of the attribute
     */
    haveAttrVal(selector, attr, value){
        cy.get(selector).should('have.attr', attr, value)
    }

    /**
     * @description Checks if the value of an attribute does not exist
     * @param {string} selector pass the selector of the element
     * @param {string} attr pass an attribute of the element
     * @param {string} value pass the partial/ complete  of the attribute that is not expected to be there
     */
    notHaveAttrVal(selector, attr, value){
        cy.get(selector).should('not.have.attr', attr, value)
    }

    /**
     * @description Checks length
     * @param {string} selector pass the selector of elements
     * @param {int} length pass the length/ number of elements 
     */
    haveLength(selector, length){
        cy.get(selector).should('have.length', length)
    }

    /**
     * @description Checks if length is greater than given number
     * @param {string} selector pass the selector of elements
     * @param {int} num pass a number to compare with
     */
    haveLengthGreaterThan(selector, num){
        cy.get(selector).should('be.gt', num)
    }

    /**
     * @description Checks if length is less than given number
     * @param {string} selector pass the selector of elements
     * @param {int} num pass a number to compare with
     */
    haveLengthLessThan(selector, num){
        cy.get(selector).should('be.lt', num)
    }

    /**
     * @description Clicks on an element
     * @param {string} selector pass the selector of element to be clicked on
     */
    click(selector){
        cy.get(selector).click({force: true})
    }

    /**
     * @description Clicks on first element with given text
     * @param {string} text pass the inner text of the element to be clicked on
     */
    clickText(text){
        cy.contains(text).click({force: true})
    }

    /**
     * @description Check a checkbox, works for both checkboxes and radio buttons
     * @param {string} selector pass the selector of a checkbox/ radio buttons element
     */
    checkCheckbox(selector){
        cy.get(selector).check({ force: true }).should('be.checked')
    }

    /**
     * @description Uncheck a checkbox, works for both checkboxes and radio buttons
     * @param {string} selector pass the selector of a checkbox/ radio buttons element
     */
    uncheckCheckbox(selector){
        cy.get(selector).uncheck({ force: true }).should('not.be.checked')
    }

    /**
     * @description Check a checkbox containing given value, works for both checkboxes and radio buttons
     * @param {string} selector pass the selector of a checkbox/ radio buttons element
     * @param {string} value pass the value attribute of the checkbox/ radio buttons to be selected
     */
    checkByValue(selector, value){
        cy.get(selector).check(value, { force: true })
    }

    /**
     * @description Select a radio button
     * @param {string} selector pass the selector of a radio button element
     */
    selectRadioBtn(selector){
        cy.get(selector).check({ force: true })
    } //works for both checkboxes and radio buttons

    /**
     * @description Selecting an option in a selector using its index
     * @param {string} selector pass the selector of an element
     * @param {int} index pass an integer value to pick an option
     */
    selectorByIndex(selector, index){
        cy.get(selector).select(index, {force: true})
    }

    /**
     * @description Selecting an option in a selector using its value and verifying the value
     * @param {string} selector pass the selector of an element
     * @param {string} value pass an integer to select & verify the option
     */
    selectorByValue(selector, value){
        cy.get(selector).select(value, {force: true}).should('have.value', value)
    }

    /**
     * @description For typing into a field
     * @param {string} selector pass the selector of a text input element
     * @param {string} key pass the input
     */
    type(selector, key){
        cy.get(selector).type(key, {force: true})
    }

    /**
     * @description Clears text in a field
     * @param {string} selector pass the selector of a text input element
     */
    clearField(selector){
        cy.get(selector).clear({force: true})
    }

    /**
     * @description Scroll page to an element
     * @param {string} selector pass the selector of an element
     */
    scrollToView(selector){
        cy.get(selector).scrollIntoView()
    }

    /**
     * @description Visits a URL
     * @param {string} url pass a valid URL
     */
    visitURL(url){
        cy.visit(url)
    }

    /**
     * @description Checks the status of a href url
     * @param {string} selector pass the selector of an element with href attribute
     */
    hrefResponse200(selector){
        cy.get(selector)
            .then((el) => {
                cy.request(el.prop('href'))
                    .its('status')
                    .should('eq', 200)
                this.log('Status 200: ' + el.prop('href'))
            })
    }
}
import Utils from "../utils";
const utils = new Utils();

/**
 * @author Zahin Ahad
 */

export default class AutoExc{
    
    /** 
     * @description Function to Visit the Homepage
    */
    visitPage(){
        utils.visitURL(`${Cypress.env('baseUrl')}`)
    }
    
    /** 
     * @description Function to click the sign up button
    */
    clickSignUp(){
        utils.click(`.shop-menu > .nav > :nth-child(4) > a`)
    }
    
    /** 
     * @description Function to provide input
    */
    addSignUpDetails1(){
        utils.type(`[data-qa="signup-name"]`, `ZZZZ`)
        utils.type(`[data-qa="signup-email"]`, `ztest012299@gmail.com`)
    }
    
    /** 
     * @description Function to click on Sign Up button
    */
    clickSignUpBtn(){
        utils.click(`[data-qa="signup-button"]`)
    }
    
    /** 
     * @description Function to provide rest of the input
    */
    addSignUpDetails2(){
        utils.selectRadioBtn(`#id_gender1`)
        utils.type(`[data-qa="password"]`, `ZZZZ123!@`)
        utils.selectorByValue(`#days`, `1`)
        utils.selectorByValue(`#months`, `1`)
        utils.selectorByValue(`#years`, `2020`)
        utils.checkCheckbox(`#newsletter`)
        utils.checkCheckbox(`#optin`)
        utils.type(`[data-qa="first_name"]`, `ZZ`)
        utils.type(`[data-qa="last_name"]`, `ZZ`)
        utils.type(`[data-qa="company"]`, `ZZZ`)
        utils.type(`[data-qa="address"]`, `ZZZ, ZEZ`)
        utils.type(`[data-qa="address2"]`, `ZZZ, ZEZ!`)
        utils.selectorByValue(`#country`, `Singapore`)
        utils.type(`[data-qa="state"]`, `Singapore`)
        utils.type(`[data-qa="city"]`, `Singapore`)
        utils.type(`[data-qa="zipcode"]`, `1234`)
        utils.type(`[data-qa="mobile_number"]`, `123465789`)
    }
    
    /** 
     * @description Function to click on Create Account button
    */
    clickCreateAccountBtn(){
        utils.click(`[data-qa="create-account"]`)
        utils.urlEquals(`${Cypress.env('baseUrl')}account_created`)
        utils.click(`[data-qa="continue-button"]`)
    }
    
    /** 
     * @description Function to click on add to cart button of a product and going to the cart
    */
    addToCart(){
        utils.click(`.features_items > :nth-child(3) > div > .single-products > .productinfo > a`)
        utils.is_visible(`.modal-content`)
        utils.click(`.modal-body > p:nth-child(2) > a`)
        utils.urlEquals(`${Cypress.env('baseUrl')}view_cart`)
    }
    
    /** 
     * @description Function to proceed to checkout
    */
    checkout(){
        utils.click(`#do_action > .container a`)
        utils.urlEquals(`${Cypress.env('baseUrl')}checkout`)
    }
    
    /** 
     * @description Function to place order with dummy data
    */
    placeOrder(){
        utils.click(`#ordermsg ~ div > a`)
        utils.urlEquals(`${Cypress.env('baseUrl')}payment`)
        utils.type(`[data-qa="name-on-card"]`, `ZZZZ ZZZZ`)
        utils.type(`[data-qa="card-number"]`, `4001919257537193`)
        utils.type(`[data-qa="cvc"]`, `324`)
        utils.type(`[data-qa="expiry-month"]`, `01`)
        utils.type(`[data-qa="expiry-year"]`, `2027`)
        utils.click(`[data-qa="pay-button"]`)
        utils.urlContains(`${Cypress.env('baseUrl')}payment_done`)
    }
} 
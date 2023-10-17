import AutoExc from '../support/POM/automationExc';
const auto = new AutoExc()

/**
 * @author Zahin Ahad
 */

describe('Automation Exercise', () => {

  it('Visit homepage', () => {
    auto.visitPage()
  })

  it('Sign Up', () => {
    auto.clickSignUp()
    auto.addSignUpDetails1()
    auto.clickSignUpBtn()
    auto.addSignUpDetails2()
    auto.clickCreateAccountBtn()
  })

  it('Add to cart', () => {
    auto.addToCart()
  })

  it('Proceed to checkout', () => {
    auto.checkout()
  })

  it('Place order with dummy data', () => {
    auto.placeOrder()
  })
})
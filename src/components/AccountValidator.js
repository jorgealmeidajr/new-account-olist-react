
export default class AccountValidator {

  static isNameValid(name) {
    return (name.trim() !== '')
  }

  static isEmailValid(email) {
    return (email.trim() !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }

  static isConfirmationPasswordValid(password, confirmation) {
    return (password === confirmation)
  }

  static checkPasswordLength(password) {
    return password.length >= 6
  }

  static passwordHasOneNumber(password) {
    return /\d{1}/.test(password)
  }

  static passwordHasOneLetterUppercase(password) {
    return /[A-Z]{1}/.test(password)
  }

  static isPasswordValid(password) {
    return (this.checkPasswordLength(password) 
      && this.passwordHasOneLetterUppercase(password) 
      && this.passwordHasOneNumber(password))
  }

  static getPasswordProgress(password) {
    let progress = 0

    if(this.checkPasswordLength(password)) progress++

    if(this.passwordHasOneLetterUppercase(password)) progress++
    
    if(this.passwordHasOneNumber(password)) progress++

    return progress
  }

  static getPasswordProgressValue(password) {
    return (this.getPasswordProgress(password) * (100 / 3))
  }

}

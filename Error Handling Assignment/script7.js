class User {
    constructor(username, password){
        this.username = username
        this._password = password
    }
    get masterPassword () {
        return this._password.replace(/./g, '*')
    }

    set password (newPassword) {
        if (this.isValidPassword(newPassword)) {
            return this._password = newPassword
        } else { 
            console.log("Password not intact");
        }
    }
    isValidPassword(password) {
       return  newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)
    }
}

const user1 = new User("Kamal", "Mypassword123")
const user2 = new User ("Raj", "mineyou")

console.log(user1.masterPassword);
console.log(user2.masterPassword);
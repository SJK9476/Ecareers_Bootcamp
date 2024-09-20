// Class: class will act as a blueprint for creating multiple objects

class User {
    userName = 'unknown'
    userAddress = 'unknown'
    constructor(userName, userAddress) {
        this.userName = userName
        this.userAddress = userAddress
    }
}

let user1 = new User('Samuel King', '123 Main Street')
let user2 = new User ('Jane Doe', '456 Elm Street')
let user3 = new User ('John Doe', '789 Oak Street')

console.log(user2.userAddress)
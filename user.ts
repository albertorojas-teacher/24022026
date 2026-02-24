interface UserProfile {
    username: string;
    email: string;
    age: number;
    biography?: string;
    phone?:string
}

const userOne: UserProfile = {
    username: "Cara_Loca",
    email: "algo@algo.com",
    age: 25,
    biography: "Amante al codigo",
    phone: "555-Sin corriente"
}

const userTwo: UserProfile = {
    username: "Cara_e_Cabra",
    email: "otro@otro.com",
    age: 20
}

console.log(userOne)
console.log(userTwo)
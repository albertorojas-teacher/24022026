interface MongoObjectId{
    $oid: string
}

interface MongoDate {
    $date: string
}

interface Codes {
    number: number
    string: string,
    boolean: boolean
}

interface Respuesta {
    _id: MongoObjectId
    name: string
    email: string
    movie_id: MongoObjectId
    text: string
    date: MongoDate
    codes: Codes
}
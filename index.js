const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const API = {
        "data": [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Harishankar",
                    "last": "Giri"
                },
                "location": {
                    "street": {
                        "number": 2,
                        "name": "Basantapur"
                    },
                    "post": "Amarda Road",
                    "city": "Balasore",
                    "state": "Odisha",
                    "country": "India",
                    "postcode": 756030,
                    "coordinates": {
                        "latitude": "21.730798",
                        "longitude": "87.104279"
                    },
                    "timezone": {
                        "offset": "+5:30",
                    }
                },
                "email": "giriharishankar90@gmail.com",
                "dob": {
                    "date": "23-12-2002",
                    "age": 20
                },
                "picture": {
                    "large": "https://shorturl.at/jrLX0",
                },
            }
        ],
        "info": {
            "contact": "+91 8260991535",
            "portfolio": "https://hsg15.github.io/lucky/",
            "linkedin": "https://www.linkedin.com/in/hsg15/",
            "github": "https://github.com/HSG15"
        }
    }
    res.json(API); // res.json to send JSON response
})

app.listen('3000', () => {
    console.log('Server is running.');
})

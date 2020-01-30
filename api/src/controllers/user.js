const users = [
    {
        id: 0,
        name: 'diego',
        email: 'eu@diegozf.com.br',
        age: 32,
        city: 'jandira'
    },
    
    {
        id: 1,
        name: 'eder',
        email: 'eder@diegozf.com.br',
        age: 24,
        city: 'itapevi'
    },
]

module.exports = {
    getAll: (req, res) => {
        res.status(200).json(users);
    },
}
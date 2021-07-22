const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

// default resource
app.get('/', (req, res) => {
    res.send('Welcome to Quattie!')
})

const users = {}//{'a':{amount: 100, pending_requests: [], history: []},'b': {amount: 100, pending_requests: [], history: []}};

app.get('/login', (req, res) =>{

    
})

app.post('/deposit', (req, res) => {    
    /*
        Deposit funds into your account
    */
})

app.post('/withdraw', (req, res) => {
    /* 
        Withdraw funds from you account
    */

})


app.post('/signup', (req, res) => {
    /*
        Sign up for a new account
    */

    const { id, initial_deposit } = req.body

    if (users[id] == null){
        // addd new user
        users[id] = { balance: initial_deposit, pending_requests: [], history: [{id:0, amount: parseFloat(initial_deposit), trans_type: 'send'}]}
        res.send({ message: `New user added. Your ID is ${id}, and your balance is ${initial_deposit}`})
    } else {
        res.send({message: 'User already exists'})
    }

})
app.get('/wallet', (req, res) => {
    /*
        get current wallet balance
    */

    const { id } = req.body


    if (users[id] == null){ 
        res.send({ message: 'sender does not exist' })
    } else {
        res.send({ message: `Your current balance is: ${users[id]['balance']}`})
    }

})


app.post('/transact', (req, res) => {
    /*
        request or send money from a sender to a recipient
    */
    //transaction object
    const {recipient, sender, amount, trans_type } = req.body

    const send_user = users[sender]
    const rec_user = users[recipient]

    if (send_user == null) {
        console.log('bad sender')
        res.send({ message: 'sender does not exist'})
    }
    if (rec_user == null) {
        console.log('bad recipient')
        res.send({ message: 'recipient does not exist'})
    }

    if (trans_type === 'send'){
    //check to see if transaction amount is <= sender balance
    console.log('send request')
        if (send_user.balance < amount) {
            res.send({
                message: `${sender} does not have enough balance to conduct this transaction` 
                })
        } else {
            send_user['balance'] -= amount
            rec_user['balance'] += amount
            
            //update transaction history
            send_user['history'].push({recipient, amount, trans_type })
            rec_user['history'].push({sender, amount, trans_type })

            res.send({
                message: `${amount} was sent to ${recipient}`
            })
        }
    } else if (trans_type === 'request'){
        //swap the sender and recipient and put in pending transaction for later confirmation
        rec_user['pending_requests'].push({ sender, amount, trans_type })
        res.send({message: `we have requested a payment of ${amount} from ${recipient}`})
    } else {
        res.send({message: 'Transaction type not recognized'})
    }

})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})
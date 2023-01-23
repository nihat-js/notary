const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.set('strictQuery', true)
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 1515

const { area } = require('./models/area')

app.use(cors())
app.use(express.json())

const resetData = [
  {
    title: 'Bankruptcy Law    ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  },
  {
    title: ' Business Law    ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  },
  {
    title: ' Business Law    ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  },
  {
    title: ' Civil Rights Law    ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  },
  {
    title: 'Criminal Law     ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  },
  {
    title: ' Immigration Law     ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  },
  {
    title: ' Family Law    ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!    ',
    image: 'https://static.thenounproject.com/png/2391755-200.png'
  }
]


app.get('/areas/reset', (req, res) => {
  area.insertMany(resetData, (err, docs) => {
    if (err) {
      throw err
      return false
    }
    res.send(docs)
  })
})

app.get('/areas', async (req, res) => {
  let result = await area.find({})
  if (!result) throw err

  res.send(result)
})


app.post('/areas', async (req, res) => {
  console.log(req.body)
  let result;
  if (req.body.title, !req.body.subTitle, !req.body.image) {
    res.sendStatus(404).json({ message: 'data not found' })
    return false
  }

  let Area = new area({
    title: req.body.title,
    subTitle: req.body.subTitle,
    image: req.body.image
  })
  result = await Area.save()

  if (!result) {
    res.sendStatus(404).json({ error: 'could not save it' })
    return false;
  }

  res.send(result)
})

app.delete('/areas/:id', async (req, res) => {
  if (!req.params.id) {
    res.sendStatus(404).json({ message: ' id not found' })
  }

  let result = await area.findByIdAndDelete(req.params.id)
  if (!result) {
    res.sendStatus(404).json({ message: ' id not found' })
  }

  res.send({ message: 'successful' })


})




mongoose.connect(process.env.DB_URI).
  then(() => {
    app.listen(PORT, () => console.log('Server started'))
  })
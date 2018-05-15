const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
dev && require('dotenv').config()
const port = process.env.PORT || 8080;
const app = next({ dev })
const handle = app.getRequestHandler()

const brainwave = require('./routes/brainwave')
const feed = require('./routes/feed')

app.prepare().then(() => {
  const server = express()

  server.get('/ping', (req, res) => res.send('pong'))

  server.use('/brainwave', brainwave);
  server.use('/feed', feed);

  server.get('/helpage(.html)?', (req, res) => res.sendFile(path.join( __dirname, './static/helpage.html')))

  // redirects
  server.get('/blog/*', (req, res) => res.redirect('http://blog.hoonio.com'))
  server.get('/wiki(/*)?', (req, res) => res.redirect('http://wiki.hoonio.com'))
  server.get('/wiki/CFA', (req, res) => res.redirect('http://wiki.hoonio.com/sciences/cfa'))

  server.get('/error/:reqpage', function(req, res){
    res.status(404).send('No page named' + req.params.reqpage + ' found')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:', port)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
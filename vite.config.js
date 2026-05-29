import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import path from 'node:path'

const SUBSCRIBERS_FILE = path.resolve('./public/subscribers.json')

function subscribePlugin() {
  return {
    name: 'subscribe-api',
    configureServer(server) {
      server.middlewares.use('/api/subscribe', async (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405).end()
          return
        }
        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', () => {
          try {
            const { email } = JSON.parse(body)
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              res.writeHead(400, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'invalid email' }))
              return
            }
            const list = JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8'))
            if (!list.find(e => e.email === email)) {
              list.push({ email, time: new Date().toISOString() })
              fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(list, null, 2))
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.writeHead(500).end()
          }
        })
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), subscribePlugin()],
  server: {
    host: '0.0.0.0',
    port: 9882
  }
})

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

dotenv.config()

const app = express()
const port = 4000

app.use(cors({ origin: ['http://localhost:5173'], credentials: false }))
app.use(express.json({ limit: '5mb' }))

let CLOUDINARY_CLOUD_NAME = 'ddfcyn93x'
let CLOUDINARY_API_KEY = 792363716787154
let CLOUDINARY_API_SECRET = '1UtIQrnAhPXXeoobvyQ9YJML3cI'

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.warn('[cloudinary] Missing env vars. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET')
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.get('/api/assets', async (req, res) => {
  try {
    const maxResults = Math.min(Number(req.query.max || 50), 100)
    const folder = req.query.folder

    let result
    if (folder) {
      result = await cloudinary.api.resources({
        type: 'upload',
        prefix: `${folder}/`,
        max_results: maxResults
      })
    } else {
      result = await cloudinary.api.resources({ type: 'upload', max_results: maxResults })
    }

    res.json({ resources: result.resources || [] })
  } catch (error) {
    console.error('List assets error', error)
    res.status(500).json({ error: 'Failed to list assets' })
  }
})

app.post('/api/rename', async (req, res) => {
  try {
    const { public_id: publicId, to_public_id: toPublicId, overwrite } = req.body || {}
    if (!publicId || !toPublicId) {
      return res.status(400).json({ error: 'public_id and to_public_id are required' })
    }
    const result = await cloudinary.uploader.rename(publicId, toPublicId, { overwrite: Boolean(overwrite) })
    res.json(result)
  } catch (error) {
    console.error('Rename error', error)
    res.status(500).json({ error: 'Failed to rename asset' })
  }
})

app.delete('/api/asset', async (req, res) => {
  try {
    const { public_id: publicId } = req.body || {}
    if (!publicId) {
      return res.status(400).json({ error: 'public_id is required' })
    }
    const result = await cloudinary.uploader.destroy(publicId)
    res.json(result)
  } catch (error) {
    console.error('Delete error', error)
    res.status(500).json({ error: 'Failed to delete asset' })
  }
})

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`)
})


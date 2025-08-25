import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { listAssets, uploadUnsigned, deleteAsset, renameAsset } from './api.js'

function App() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [file, setFile] = useState(null)
  const [renameIds, setRenameIds] = useState({})

  const cloudName = 'ddfcyn93x'
  const uploadPreset = "shofyCluodnary"
  const defaultFolder = 'Default-Projects'

  const canUpload = useMemo(() => Boolean(cloudName && uploadPreset), [cloudName, uploadPreset])

  async function fetchAssets() {
    setLoading(true)
    setError('')
    try {
      const { resources } = await listAssets(defaultFolder ? { folder: defaultFolder } : {})
      setAssets(resources)
    } catch (e) {
      setError(e.message || 'Failed to load assets')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAssets()
  }, [])

  async function handleUpload(e) {
    e.preventDefault()
    if (!file) return
    setLoading(true)
    setError('')
    try {
      await uploadUnsigned(file, { cloudName, uploadPreset, folder: defaultFolder || undefined })
      setFile(null)
      await fetchAssets()
    } catch (e) {
      setError(e.message || 'Upload failed')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(publicId) {
    if (!confirm('Delete this asset?')) return
    setLoading(true)
    setError('')
    try {
      await deleteAsset(publicId)
      await fetchAssets()
    } catch (e) {
      setError(e.message || 'Delete failed')
    } finally {
      setLoading(false)
    }
  }

  async function handleRename(publicId) {
    const toPublicId = renameIds[publicId]
    if (!toPublicId) return
    setLoading(true)
    setError('')
    try {
      await renameAsset(publicId, toPublicId, { overwrite: true })
      setRenameIds(prev => ({ ...prev, [publicId]: '' }))
      await fetchAssets()
    } catch (e) {
      setError(e.message || 'Rename failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Cloudinary Project</h1>
      <div className="mb-6 p-4 border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleUpload}>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-gray-700 border border-gray-300 px-5 py-2 cursor-pointer focus:outline-none"
            />
            <button
              type="submit"
              disabled={!file || loading}
              className="px-4 py-2 text-white bg-blue-500  hover:bg-black disabled:opacity-50"
            >
              Upload
            </button>
            {!canUpload && (
              <span className="text-red-500 text-sm">
                Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UNSIGNED_PRESET
              </span>
            )}
          </div>
        </form>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Assets</h2>
        <button
          onClick={fetchAssets}
          disabled={loading}
          className="px-4 py-2 text-sm text-white bg-green-500 border-1 border-transparent hover:border-black hover:bg-white hover:text-black disabled:opacity-50"
        >
          Refresh
        </button>
      </div>

      {error && <div className="text-red-500 mb-3">{error}</div>}
      {loading && <div className="text-gray-500 mb-3">Loading...</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {assets.map((a) => (
          <div
            key={a.public_id}
            className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm"
          >
            <div className="text-xs text-gray-500 mb-2 truncate">
              {a.public_id}
            </div>
            {a.resource_type === "image" ? (
              <img
                src={a.secure_url}
                alt={a.public_id}
                className="w-full h-40 object-cover rounded-md"
              />
            ) : (
              <video
                src={a.secure_url}
                controls
                className="w-full h-40 object-cover rounded-md"
              />
            )}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleDelete(a.public_id)}
                disabled={loading}
                className="flex-1 px-3 py-2 text-sm text-white bg-red-600 border-1 border-transparent hover:border-black hover:bg-white hover:text-black disabled:opacity-50"
              >
                Delete
              </button>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <input
                type="text"
                placeholder="new public_id"
                value={renameIds[a.public_id] || ""}
                onChange={(e) =>
                  setRenameIds((prev) => ({
                    ...prev,
                    [a.public_id]: e.target.value,
                  }))
                }
                className="flex-1 px-2 py-1 text-sm border border-gray-300  focus:outline-none"
              />
              <button
                onClick={() => handleRename(a.public_id)}
                disabled={!renameIds[a.public_id] || loading}
                className="px-3 py-2 text-sm text-white border-1 border-transparent hover:border-black bg-blue-500 hover:bg-white hover:text-black disabled:opacity-50"
              >
                Rename
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App

export async function listAssets(params = {}) {
  const search = new URLSearchParams(params)
  const res = await fetch(`/api/assets?${search.toString()}`)
  if (!res.ok) {
    let message = 'Failed to list assets'
    try {
      const data = await res.json()
      if (data && data.error) message = data.error
    } catch (e) {
      console.warn('listAssets: failed to parse error response', e)
    }
    throw new Error(message)
  }
  return res.json()
}

export async function renameAsset(publicId, toPublicId, options = {}) {
  const res = await fetch('/api/rename', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ public_id: publicId, to_public_id: toPublicId, ...options })
  })
  if (!res.ok) {
    let message = 'Failed to rename asset'
    try {
      const data = await res.json()
      if (data && data.error) message = data.error
    } catch (e) {
      console.warn('renameAsset: failed to parse error response', e)
    }
    throw new Error(message)
  }
  return res.json()
}

export async function deleteAsset(publicId) {
  const res = await fetch('/api/asset', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ public_id: publicId })
  })
  if (!res.ok) {
    let message = 'Failed to delete asset'
    try {
      const data = await res.json()
      if (data && data.error) message = data.error
    } catch (e) {
      console.warn('deleteAsset: failed to parse error response', e)
    }
    throw new Error(message)
  }
  return res.json()
}

export async function uploadUnsigned(file, { cloudName, uploadPreset, folder } = {}) {
  if (!cloudName || !uploadPreset) {
    throw new Error('cloudName and uploadPreset are required for unsigned upload')
  }
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`
  const form = new FormData()
  form.append('file', file)
  form.append('upload_preset', uploadPreset)
  if (folder) form.append('folder', folder)

  const res = await fetch(url, { method: 'POST', body: form })
  if (!res.ok) {
    try {
      const data = await res.json()
      const message = data?.error?.message || 'Failed to upload'
      throw new Error(message)
    } catch {
      const text = await res.text()
      throw new Error(text || 'Failed to upload')
    }
  }
  return res.json()
}


import { useEffect } from 'react'

const ConfigPreview = (props: any) => {
  const data = props.entry.toJS()
  return (
    <div>
      <h2>{data.label}</h2>
      <p>{props.entry.getIn(['data', 'base_url'])}</p>
      <p>{props.entry.getIn(['data', 'site_title'])}</p>
      <p>{props.entry.getIn(['data', 'site_description'])}</p>
      <p>{props.entry.getIn(['data', 'instagram_account'])}</p>
    </div>
  )
}

const IndexPage = () => {
  useEffect(() => {
    document.title = 'Admin'
    const identScript = document.createElement('script')
    const cmscript = document.createElement('script')
    identScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    cmscript.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js'
    document.head.appendChild(identScript)
    document.body.appendChild(cmscript)
    cmscript.onload = () => {
      ;(window as any).CMS.registerPreviewTemplate('general', ConfigPreview)
    }
  }, [])

  return null
}

export default IndexPage

import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import readme from 'raw-loader!../README.md'

const IndexPage = () => (
  <Layout title="Home">
    <div className="w-full p-4">
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  </Layout>
)

export default IndexPage

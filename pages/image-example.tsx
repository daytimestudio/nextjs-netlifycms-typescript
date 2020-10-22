import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import data from '../data/pages/image-example.json'

const AboutPage = () => (
  <Layout>
    <div className="w-full p-4">
      <ReactMarkdown>{data.content}</ReactMarkdown>
      <br />
      <img
        width="400"
        src={require('../data/media/solen-feyissa-4gc3b-blsji-unsplash.jpg')} // Only optimised when built
        alt="Unnamed Road, Cline River, Canada"
      />
    </div>
  </Layout>
)

export default AboutPage

import React from 'react'
import Layout from '../../components/Layout'
import { graphql, PageProps, Link } from 'gatsby'
import Seo from '../../components/Seo'

interface IPost {
  body: string
  id: string
  parent: { name: string }
}

type IDataPosts = {
  allMdx: {
    nodes: IPost[]
  }
}

export const GET_ALL_POST = graphql`
  query getAllPost {
    allMdx {
      nodes {
        id
        body
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`

const Posts = ({ data }: PageProps<IDataPosts>): JSX.Element => {
  return (
    <Layout>
      <div className="border-2 p-4">
        <p>Todas mis publicaciones</p>
        <div className="flex justify-center gap-6">
          {data.allMdx.nodes.map((post: IPost) => {
            return (
              <Link className="text-gray-800 text-lg font-bold" to={post.id} key={post.id}>
                {post.parent.name}
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Posts" />

export default Posts

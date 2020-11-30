import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const NewExamplesPageTemplate = ({
  image,
  title,
  main
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold text-center is-size-3">
                {main.heading}
              </h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image1} />
              </article>
            </div>
            <div className="column is-4">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image2} />
              </article>
            </div>
            <div className="column is-4">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image3} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

NewExamplesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const NewExamplesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <NewExamplesPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

NewExamplesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewExamplesPage

export const newExamplesPageQuery = graphql`
  query NewExamplesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 352, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 352, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 352, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

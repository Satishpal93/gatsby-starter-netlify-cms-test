import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Products from '../components/Products'
import Features from '../components/Features'

export const NewExamplesPageTemplate = ({
  image,
  title,
  main
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0 margin-bottom-0"
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
    <section className="section">
      <div className="container">
        <h3 className="has-text-weight-semibold text-center is-size-3">
          {main.heading}
        </h3>
        <Products gridItems={main.product} />
      </div>
    </section>
    <div
      className="full-width-image-container margin-top-0 margin-bottom-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="container">

      </div>
    </div>
  </div>
)

NewExamplesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    product: PropTypes.array
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
          product {
            image {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 352, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            heading
            description
          }
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Products from '../components/Products'

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
          <Products gridItems={main.product} />
          {/* <div className="columns">
            <div className="column is-4">
              <div className="">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.product.Image} />
                </article>
                <h3 className="has-text-weight-semibold is-size-3">
                  {main.product.heading}
                </h3>
                <p>{main.product.description}</p>
              </div>
            </div>
          </div> */}
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
    product: PropTypes.array,
    // product: PropTypes.shape({
    //   Image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    //   heading: PropTypes.string,
    //   description: PropTypes.string,
    // }),
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

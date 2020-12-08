import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Products from '../components/Products'
import BlogRoll from '../components/BlogRoll'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
//import Table from '../components/Table'

// const NewExamplesPageTemplate = (props) => {
//   tableData,
//   constructor(props) ({
//     super(props);
//     this.tableData = {}
//   })
// }

export const NewExamplesPageTemplate = ({
  image,
  title,
  main,
  testimonials,
  pricing,  
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
        {/* <Table valueFromData="" perPageLimit={10} visiblecheckboxStatus={false}
        tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" /> */}
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h3 className="has-text-weight-semibold is-size-3">
          {main.heading}
        </h3>
        <Products gridItems={main.product} />
      </div>
    </section>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="container has-text-centered">
        <h3 
          className="has-text-weight-semibold has-text-centered is-size-3"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            display: 'inline-block'
          }}
        >
          Testimonials
        </h3>
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
    <section className="section">
      <div className="container">
        <h3 className="has-text-weight-semibold is-size-3">
          Latest stories
        </h3>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h3 className="has-text-weight-semibold has-text-centered is-size-3">
          {pricing.heading}
        </h3>
        <p className="has-text-centered is-size-5">{pricing.description}</p>
        <Pricing data={pricing.plans} />    
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
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
    product: PropTypes.array
  }),
  testimonials: PropTypes.array,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
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
        testimonials={frontmatter.testimonials}
        pricing={frontmatter.pricing}
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
        testimonials {
          author
          quote
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`

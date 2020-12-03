import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ProductGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section">
          <article className="tile is-child">
            <PreviewCompatibleImage imageInfo={item} />
          </article>
          <h3 className="has-text-weight-semibold is-size-3">
            {item.heading}
          </h3>
          <p>{item.description}</p>
        </section>
      </div>
    ))}
  </div>
)

ProductGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      Image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default ProductGrid

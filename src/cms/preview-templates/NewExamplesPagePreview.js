import React from 'react'
import PropTypes from 'prop-types'
import { NewExamplesPageTemplate } from '../../templates/newexamples-page'

const NewExamplesPagePreview = ({ entry, getAsset }) => {

  return (
    <NewExamplesPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        product: {
          image1: {
            image: getAsset(entry.getIn(['data', 'main', 'product', 'image1', 'image'])),
            alt: entry.getIn(['data', 'main', 'product', 'image1', 'alt']),
          },
          heading: entry.getIn(['data', 'main', 'product', 'heading']),
          description: entry.getIn(['data', 'main', 'product', 'description'])          
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
      }}
    />
  )
}

NewExamplesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NewExamplesPagePreview

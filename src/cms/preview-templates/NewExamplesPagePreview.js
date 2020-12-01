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
          image: {
            image: getAsset(entry.getIn(['data', 'main', 'product', 'image', 'image'])),
            alt: entry.getIn(['data', 'main', 'product', 'image', 'alt']),
          },
          heading: entry.getIn(['data', 'main', 'product', 'heading']),
          description: entry.getIn(['data', 'main', 'product', 'description'])          
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

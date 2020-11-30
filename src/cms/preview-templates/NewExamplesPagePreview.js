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
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
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

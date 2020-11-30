import React from 'react'
import PropTypes from 'prop-types'
import { NewExamplesPageTemplate } from '../../templates/newexamples-page'

const NewExamplesPagePreview = ({ entry, getAsset }) => {

  return (
    <NewExamplesPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
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

import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, richText, link, size, media } = col

            console.log('Column:', col); // Log the entire column object
            console.log('Media:', media); // Log the media object

            return (
              <div key={index} className={[classes.column, classes[`column--${size}`]].join(' ')}>
                <RichText content={richText} />
                <p>this is the right place for the media</p>
                {media && media.url && (
                  <img src={media.url} alt={media.alt || 'Media'} className={classes.media} />
                )}
                {enableLink && <CMSLink className={classes.link} {...link} />}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}

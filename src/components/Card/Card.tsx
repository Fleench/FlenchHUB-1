import { classNames } from 'modules/utils'
import React, { FC, HTMLAttributes } from 'react'
import styles from './index.module.css'

export interface Props extends HTMLAttributes<HTMLElement> {
  href: string | false
  background?: string
  highlight: boolean
  className?: string
}

const Card: FC<Props> = ({
  href,
  background,
  children,
  highlight,
  className = '',
  ...props
}) => {
  const cardContent = (
    <div
      className={classNames([
        styles.card,
        className,
        [highlight, styles.highlight],
      ])}
      style={{
        backgroundImage: background && `url(${background})`,
      }}
      {...props}
    >
      {children}
    </div>
  )

  return href ? (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {cardContent}
    </a>
  ) : (
    <>{cardContent}</>
  )
}

export { Card, Card as default }

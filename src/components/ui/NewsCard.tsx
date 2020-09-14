/** @jsx createElement */

import { createElement, FC, useState } from 'react'
import Image from 'gatsby-image'
import { v4 } from 'uuid'
import { Link } from 'gatsby'

import { NewsModel } from '@/models/news'
import { RoleModel } from '@/models/role'

import Role from '@/components/ui/Role'

const NewsCard: FC<NewsModel> = ({
  postTitle,
  author,
  pageSlug,
  featuredImage,
  createdAt
}) => {
  const [modalActive, setModalActive] = useState<boolean>(false)

  const _handleModal = (e: React.MouseEvent | React.TouchEvent) => {
    setModalActive(!modalActive)
  }

  const _displayAuthorRoles = (roles: RoleModel[]) => {
    return roles.map(role => <Role key={v4()} {...role} />)
  }

  return (
    <section className="news-card">
      <Image className="featured-image" fluid={featuredImage.fluid} />
      <section className="post-information">
        <section
          className="author-information"
          onMouseEnter={_handleModal}
          onMouseLeave={_handleModal}
          onTouchStart={_handleModal}
          onTouchEnd={_handleModal}
        >
          <Image
            className="author-profile"
            fluid={author.profilePicture.fluid}
          />
          {modalActive && (
            <section className="author-modal">
              <h3 className="author-name">{author.name}</h3>
              <section className="author-roles">
                {_displayAuthorRoles(author.roles)}
              </section>
            </section>
          )}
        </section>
        <Link to={`/news/${pageSlug}`}>
          <h2 className="post-title">{postTitle}</h2>
          <em className="post-date">{createdAt.substr(0, 10)}</em>
        </Link>
      </section>
    </section>
  )
}

export default NewsCard

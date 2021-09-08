import React from 'react'

type OctocatType = {
  name: string
  number: string
  image: string
  link: string
  imageAlt: string
  authorImage: string
  authorLink: string
  authorAlt: string
}

export function Octocat(props: OctocatType) {
  return (
    <article>
      <a href={props.link}>
        <img src={props.image} width="400" height="400" alt={props.imageAlt} />
      </a>
      <ul>
        <li>
          #{props.number}:
          <a href={props.link}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.authorLink}>
            <img
              src={props.authorImage}
              width="24px"
              height="24px"
              alt={props.authorAlt}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}

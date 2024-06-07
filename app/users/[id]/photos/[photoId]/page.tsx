import React from 'react'


interface Props{
    params: {
        photoId: number,
        id: number
    }
}

const PhotoDetailPage = ({params : {photoId , id} } : Props) => {
  return (
    <div>PhotoDetailPage { id } - { photoId }</div>
  )
}

export default PhotoDetailPage
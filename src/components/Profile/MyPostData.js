import React from 'react'

const MyPostData = ({name , description , members , category , profilepic  }) => {
  return (
    <>
        <div className="post_card">
            <div className="post_image_and_name">
                <img src={profilepic} alt="" />
                <p>Name :  {name}</p>
            </div>
            <div className="post_info">
                <p>Descrition : {description}</p>
                <p>Members : {members}</p>
                <p>Catergory : {category}</p>
            </div>
        </div>
    </>
  )
}

export default MyPostData
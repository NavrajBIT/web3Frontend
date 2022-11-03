import React from 'react'

const MyPostData = ({content , postedBy}) => {
  return (
    <>
        <div className="post_card">
            {/* <div className="post_image_and_name">
                <img src={profilepic} alt="" />
                <p>Name :  {name}</p>
            </div>
            <div className="post_info">
                <p>Descrition : {description}</p>
                <p>Members : {members}</p>
                <p>Catergory : {category}</p>
            </div> */}
            Content :-  {content} <br/><br/>
            PostedBy :- {postedBy}
        </div>
    </>
  )
}

export default MyPostData
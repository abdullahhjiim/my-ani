/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const FlottingButton = ({ blog }) => {
    const [userData, setUserData] = useState(null);
    const [likes, setLikes] = useState(blog?.likes);

    useEffect(() => {
        const getuser = async () => {
            const res = await fetch('/api/auth/user');
            const user = await res.json();
            console.log(user);
            setUserData(user);
        }
        
        getuser();
    
    },[]);

    const handleLike =  async (likeOrNot) => {
        if(likeOrNot) {
            
            let newLikes = likes.filter((id) => (id != userData._id));
            setLikes(newLikes);
        }else {
            let cloneLikes = [...likes];
            cloneLikes.push(userData._id);
            setLikes(cloneLikes);
        }

       await fetch(`/api/blogs/${blog._id}/like`, {method : "POST", body : JSON.stringify({
            "isLiked": !likeOrNot,
            "authorId": userData?._id
        })})

    }

    const handleFavourite = async (isFavourite) => {
        if(isFavourite) {
            const newFavourite = userData.favouriteBlogs.filter((item) => (item != blog?._id));
            setUserData({...userData, favouriteBlogs : newFavourite});

        }else {
            const cloneUserData = {...userData};
            cloneUserData.favouriteBlogs.push(blog._id);
            setUserData(cloneUserData);
        }

        await fetch(`/api/blogs/${blog._id}/favourite`, {method : "PATCH"})
    }


   const isLiked = likes.find((item) => (item == userData?._id));
   const isFavourite = userData ? userData.favouriteBlogs.find((item) => (item == blog._id)) : null;

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={() => handleLike(isLiked)}>
          <img src="/assets/icons/like.svg" alt="like" className={ isLiked ? `bg-red-500 rounded-md` : '' }/>
          <span>{likes.length}</span>
        </li>

        <li onClick={() => handleFavourite(isFavourite)}>
          {isFavourite ? <img
            src="/assets/icons/heart-filled.svg"
            alt="Favourite"
          /> : <img
          src="/assets/icons/heart.svg"
          alt="Favourite"
        /> }
        </li>
        <a href="#comments">
          <li>
            <img src="/assets/icons/comment.svg" alt="Comments" />
            <span>{blog?.comments?.length}</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default FlottingButton;

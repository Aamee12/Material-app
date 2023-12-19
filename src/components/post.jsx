import React, { useContext } from 'react'
import {Favorite, FavoriteBorder, MoreVert, Share} from '@mui/icons-material'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material'
import postsData from '../constant/array'
import { AppContext } from '../context'

const Post = () => {
  const {title}=useContext(AppContext)

  return (
    <div>
      {postsData?.filter(post=>{
        if(title?.title === ''){
          return postsData
        } else{
          return(post.title &&
            post.title?.toLowerCase()?.includes(title?.toLowerCase())
          )
        }
      }).map(post => (
        <Card key={post.name} sx={{margin: 5}}>
          <CardHeader
            avatar={
              <Avatar sx={{bgcolor: 'red'}} aria-label="recipe">
                {post.avatarLetter}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.name}
            subheader={post.date}
          />
          <CardMedia component="img" height="35%" image={post.image} alt="" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{color: 'red'}} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default Post

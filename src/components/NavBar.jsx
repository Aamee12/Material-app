import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Input,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import React, {useContext, useState} from 'react'
import {Mail, Notifications} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import Ahmad from '../images/Picsart_23-12-15_18-33-18-468.jpg'
import {AppContext} from '../context'
import { auth } from '../firebase/Fire'
import {signOut} from 'firebase/auth'
import {useNavigate,useLocation} from 'react-router-dom'


const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}))

const NavBar = () => {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const {title, setTitle} = useContext(AppContext)
  const [open, setOpen] = useState(false)
  console.log('title is', title)

const location=useLocation()
const user=location.state && location.state.userEmail 





  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography varient="h6" sx={{display: {xs: 'none', sm: 'block'}}}>
          {user}
        </Typography>
        <Avatar
          sx={{
            width: '35px',
            height: '35px',
            display: {xs: 'block', sm: 'none'},
          }}
          src={Ahmad}
          onClick={e => setOpen(true)}
        />
        <Search sx={{alignItems: 'center', display: 'flex'}}>
          <SearchIcon
            color="error"
            sx={{
              padding: '0 10px 0 0',
            }}
          />
          <Input
            disableUnderline={true}
            value={title.title}
            onChange={e => setTitle(e.target.value)}
            sx={{width: '100%'}}
            placeholder="search..."
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: '35px',
              height: '35px',
              display: {xs: 'none', sm: 'block'},
            }}
            src={Ahmad}
            onClick={e => setOpen(true)}
          />
        </Icons>
      </StyledToolBar>
      <Menu
        sx={{display: {xs: 'none', sm: 'block'}}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
      <Menu
        sx={{display: {xs: 'block', sm: 'none'}}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar

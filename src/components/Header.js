import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'

import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle, MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  txtLink: {
    color: 'white',
    textDecoration: 'none'
  },
  txtLinkAncora: {
    textDecoration: 'none',
    color: 'black'
  },
  userName: {
    marginLeft: 8,
  },
  divider: {
    margin: '8px 0'
  },
}))

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const classes = useStyles()

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>

        <Container maxWidth='lg' className={classes.menuContainer}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              AnunX
            </Typography>
            <Link href='/users/publish' className={classes.txtLink}>
              <Button color="inherit" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)} >
              {
                true === false
                  ? <Avatar src='' />
                  : <AccountCircle />
              }
              <Typography variant='subtitle2' color='secondary' className={classes.userName}>
                Zé das Cove
              </Typography>
            </IconButton>

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'left',
                horizontal: 'right'
              }}
            >
              <Link href='/users/dashboard' passHref className={classes.txtLinkAncora}>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/users/publish' passHref className={classes.txtLinkAncora}>
              <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider}/>
              <MenuItem>Sair</MenuItem>


            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

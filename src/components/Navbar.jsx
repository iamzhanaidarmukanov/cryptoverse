import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, FundOutlined, MenuOutlined, BulbOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <Avatar />
            <Typography.Title level={2} className="logo">
                <Link to='/'>Cryptoverse</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}
        </div>
    </div>
  )
}

export default Navbar
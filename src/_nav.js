import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilNotes, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Data User',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Anggota',
        to: '/admin/user',
      },
      {
        component: CNavItem,
        name: 'Admin',
        to: '/admin/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Katalog Buku',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Data Buku',
        to: '/admin/book',
      },
      {
        component: CNavItem,
        name: 'Kategori Buku',
        to: '/admin/category',
      },
      {
        component: CNavItem,
        name: 'Jenis Buku',
        to: '/admin/type',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Data Transaksi',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Peminjaman',
        to: '/admin/peminjaman',
      },
      {
        component: CNavItem,
        name: 'Pengembalian',
        to: '/admin/pengembalian',
      },
    ],
  },
]

export default _nav

import React from 'react'
import LoginAdmin from './views/pages/login/Login'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Admin
const UserList = React.lazy(() => import('./views/pages/admin/UserList'))
const AdminList = React.lazy(() => import('./views/pages/admin/AdminList'))
const BookList = React.lazy(() => import('./views/pages/admin/BookList'))
const CategoryList = React.lazy(() => import('./views/pages/admin/CategoryList'))
const TypeList = React.lazy(() => import('./views/pages/admin/TypeList'))
const PeminjamanList = React.lazy(() => import('./views/pages/admin/PeminjamanList'))
const PengembalianList = React.lazy(() => import('./views/pages/admin/PengembalianList'))
const AddUser = React.lazy(() => import('./views/pages/forms/AddUser'))
const EditUser = React.lazy(() => import('./views/pages/forms/EditUser'))
const AddAdmin = React.lazy(() => import('./views/pages/forms/AddAdmin'))
const EditAdmin = React.lazy(() => import('./views/pages/forms/EditAdmin'))
const AddBook = React.lazy(() => import('./views/pages/forms/AddBook'))
const EditBook = React.lazy(() => import('./views/pages/forms/EditBook'))
const AddCategory = React.lazy(() => import('./views/pages/forms/AddCategory'))
const EditCategory = React.lazy(() => import('./views/pages/forms/EditCategory.js'))
const AddJenis = React.lazy(() => import('./views/pages/forms/AddJenis'))
const EditJenis = React.lazy(() => import('./views/pages/forms/EditJenis.js'))
const AddPinjam = React.lazy(() => import('./views/pages/forms/AddPinjam'))
const EditPinjam = React.lazy(() => import('./views/pages/forms/EditPinjam.js'))

// Login
// const LoginAdmin = React.lazy(() => import('./views/pages/login/Login'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Admin
  { path: '/admin/list', name: 'Admin', element: AdminList },
  { path: '/admin/user', name: 'User', element: UserList },
  { path: '/admin/book', name: 'Book', element: BookList },
  { path: '/admin/category', name: 'Category', element: CategoryList },
  { path: '/admin/type', name: 'Type', element: TypeList },
  { path: '/admin/peminjaman', name: 'Peminjaman', element: PeminjamanList },
  { path: '/admin/pengembalian', name: 'Pengembalian', element: PengembalianList },
  // Admin Forms
  { path: '/admin/adduser', name: 'Form Add User', element: AddUser },
  { path: '/admin/edituser/:id', name: 'Form Edit User', element: EditUser },
  { path: '/admin/addadmin', name: 'Form Add Admin', element: AddAdmin },
  { path: '/admin/editadmin/:id', name: 'Form Edit Admin', element: EditAdmin },
  { path: '/admin/addbook', name: 'Form Add Book', element: AddBook },
  { path: '/admin/editbook/:id', name: 'Form Edit Book', element: EditBook },
  { path: '/admin/addcategory', name: 'Form Add Category', element: AddCategory },
  { path: '/admin/editcategory/:id', name: 'Form Edit Category', element: EditCategory },
  { path: '/admin/addjenis', name: 'Form Add Category', element: AddJenis },
  { path: '/admin/editjenis/:id', name: 'Form Edit Category', element: EditJenis },
  { path: '/admin/addpinjam', name: 'Form Add Peminjaman', element: AddPinjam },
  { path: '/admin/editpinjam/:id', name: 'Form Edit Category', element: EditPinjam },

  // User
]

export default routes

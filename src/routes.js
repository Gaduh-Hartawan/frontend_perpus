import React from 'react'

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

  // User
]

export default routes

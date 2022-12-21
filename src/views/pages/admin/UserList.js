import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CBadge,
} from '@coreui/react'

const UserList = () => {
  const API_URL = 'http://localhost:5000'
  const [users, setUsers] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    axios.get(API_URL + '/users').then((res) => setUsers(res.data))
  }, [users])
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Anggota</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/admin/adduser`}>
            Tambah
          </Link>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jurusan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {users.map((user) => (
                <CTableRow key={user.id_anggota}>
                  <CTableHeaderCell scope="row">{user.nim}</CTableHeaderCell>
                  <CTableDataCell>{user.nama_anggota}</CTableDataCell>
                  <CTableDataCell>{user.jurusan}</CTableDataCell>
                  <CTableDataCell>
                    {user.status === 'active' ? (
                      <CBadge color="success">{user.status}</CBadge>
                    ) : (
                      <CBadge color="danger">{user.status}</CBadge>
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton onClick={() => setVisible(!visible)} color="danger">
                      Delete
                    </CButton>
                    <Link>
                      <CButton color="success">Update</CButton>
                    </Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      {/* Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure want to delete?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default UserList

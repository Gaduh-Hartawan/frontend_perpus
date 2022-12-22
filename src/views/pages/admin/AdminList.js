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
} from '@coreui/react'

const AdminList = () => {
  const API_URL = 'http://localhost:5000'
  const [admins, setAdmins] = useState([])

  const deleteData = (id) => {
    axios.delete(`${API_URL}/admin/${id}`)
  }

  useEffect(() => {
    axios.get(API_URL + '/admin').then((res) => setAdmins(res.data))
  }, [admins])
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Admin</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/admin/addadmin`}>
            Tambah
          </Link>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {admins.map((admin) => (
                <CTableRow key={admin.id_admin}>
                  <CTableDataCell>{admin.nama_admin}</CTableDataCell>
                  <CTableDataCell>{admin.email}</CTableDataCell>
                  <CTableDataCell>
                    <CButton onClick={() => deleteData(admin.id_admin)} color="danger">
                      Delete
                    </CButton>
                    <Link to={`/admin/editadmin/${admin.id_admin}`}>
                      <CButton className="btn btn-success">Update</CButton>
                    </Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default AdminList

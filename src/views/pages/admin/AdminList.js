import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const AdminList = () => {
  const API_URL = 'http://localhost:5000'
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    axios.get(API_URL + '/admin').then((res) => setAdmins(res.data))
  })
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Admin</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/base/cards`}>
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
                  <CTableDataCell>Delete | Edit</CTableDataCell>
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

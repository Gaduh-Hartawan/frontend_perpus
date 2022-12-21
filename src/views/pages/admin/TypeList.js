import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
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
import { Link } from 'react-router-dom'

const TypeList = () => {
  const API_URL = 'http://localhost:5000'
  const [type, setType] = useState([])
  useEffect(() => {
    axios.get(API_URL + '/type').then((res) => setType(res.data))
  })
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Buku</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/base/cards`}>
            Tambah
          </Link>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Jenis Buku</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {type.map((item) => (
                <CTableRow key={item.id_jenis}>
                  <CTableDataCell>{item.nama_jenis}</CTableDataCell>
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

export default TypeList

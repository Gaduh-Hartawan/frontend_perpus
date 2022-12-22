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
  CButton,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const TypeList = () => {
  const API_URL = 'http://localhost:5000'
  const [type, setType] = useState([])

  const getType = () => {
    axios.get(API_URL + '/type').then((res) => setType(res.data))
  }

  useEffect(() => {
    getType()
  }, [])

  const deleteData = (id) => {
    axios.delete(`${API_URL}/type/${id}`).then(getType())
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Buku</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/admin/addjenis`}>
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
                  <CTableDataCell>
                    <CButton onClick={() => deleteData(item.id_jenis)} color="danger">
                      Delete
                    </CButton>
                    <Link to={`/admin/editjenis/${item.id_jenis}`}>
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

export default TypeList

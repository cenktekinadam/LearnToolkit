import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Stack, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormModal from '../components/FormModal'
import { deleteTask } from '../../redux/slices/crudSlice'
import { FaRegEdit } from "react-icons/fa";

const Crud = () => {

    const { isDarkThem } = useSelector((store) => store.counterReducer)
    const { tasks } = useSelector((store) => store.crudReducer)
    const [isOpen, setIsOpen] = useState(false)
    const [editItem, setEditItem] = useState(null)

    const dispatch = useDispatch()
    return (
        <Container className='text-center'>
            <div>
                <Stack className='align-items-end mb-5 me-3 mt-2  '>
                    <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
                </Stack>
                <div className=' p-md-3 p-1     '>
                    <Table responsive variant={isDarkThem ? 'dark' : 'light'} striped bordered hover>
                        <thead className=''>

                            <tr>
                                <th>#</th>
                                <th>Görev</th>
                                <th>Yazan</th>
                                <th>Atanan</th>
                                <th>Tarih</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className='  '>
                            {tasks.map((task, i) => (
                                <tr className='   ' key={task.id}>
                                    <td className=' py-4'>{i + 1}</td>
                                    <td className=' py-4'>{task.title}</td>
                                    <td className=' py-4'>{task.author}</td>
                                    <td className=' py-4'>{task.assigned_to}</td>
                                    <td className='te'>{task.end_date}</td>
                                    <td>
                                        <ButtonGroup className='py-3   ' size='sm'>
                                            <Button onClick={() => dispatch(deleteTask(task.id))} variant='danger' ><FaRegEdit /></Button>
                                            <Button onClick={() => { setEditItem(task), setIsOpen(true) }} variant='primary'><FaRegEdit /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </div >
                <FormModal editItem={editItem} isOpen={isOpen} handleClose={() => { setIsOpen(false), setEditItem(null) }} />
            </div>
        </Container>
    )
}

export default Crud
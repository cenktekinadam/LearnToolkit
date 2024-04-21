import { Button, Modal, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../../redux/slices/crudSlice";


const FormModal = ({ isOpen, handleClose, editItem }) => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        //FormData Örneği oluştur
        const formData = new FormData(e.target)
        //* İnputtaki verileri nesneye çevir
        const taskData = Object.fromEntries(formData.entries())
        // Reducera verilerin ekleneceğini ilet
        editItem ? dispatch(editTask({ id: editItem.id, ...taskData })) : dispatch(addTask(taskData))
        handleClose()

    }
    return (
        <Modal centered show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editItem ? 'Görevi Güncelle' : 'Yeni Görev Ekle'}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form onSubmit={handleSubmit} className="d-flex flex-column  gap-4 ">
                    <Form.Group>
                        <Form.Label>Görev Başlığı  </Form.Label>
                        <Form.Control defaultValue={editItem?.title} name="title" placeholder="Navbarı düzenle" required>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>İlgili Kişi</Form.Label>
                        <Form.Control defaultValue={editItem?.author} name="author" placeholder="Navbarı düzenle" required>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Görev İlgili Kişi  </Form.Label>
                        <Form.Control defaultValue={editItem?.assigned_to} name="assigned_to" placeholder="Navbarı düzenle" required>
                        </Form.Control>
                        <Form.Group>
                            <Form.Label>Son Teslim Tarii </Form.Label>
                            <Form.Control defaultValue={editItem?.end_date} type="date" name="end_date" placeholder="Navbarı düzenle" required>
                            </Form.Control>
                        </Form.Group>

                    </Form.Group>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" >
                            {editItem ? 'Düzenle' : ' Oluştur'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default FormModal
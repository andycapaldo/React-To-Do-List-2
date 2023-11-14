import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

type ToDoDisplayProps = {
    toDos: string[],
    handleDelete: (task: string) => void,
    handleEdit: (task: string) => void;
}

export default function ToDoDisplay({ toDos, handleDelete, handleEdit }: ToDoDisplayProps) {
  return (
    <>
        <h1 className="text-center mt-3">To Do List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {toDos.map( (task, index) => (
                        <tr key={task}>
                            <td>{index + 1}</td>
                            <td>{task} <Button className='ms-3' value={task} variant='danger' type='submit' onClick={() => handleDelete(task)}>Delete</Button>
                            <Button  className='ms-3'value={task} variant='success' type='submit' onClick={() => handleEdit(task)}>Edit</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </>
  )
}
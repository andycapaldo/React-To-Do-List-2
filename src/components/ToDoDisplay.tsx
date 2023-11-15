import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import AlertMessage from './AlertMessage'

type ToDoDisplayProps = {
    toDos: string[],
    handleDelete: (task: string) => void
}

export default function ToDoDisplay({ toDos, handleDelete }: ToDoDisplayProps) {

    const [editOn, setEditOn] = useState<number | null>(null);
    const [message, setMessage] = useState<string|null>(null);

    const handleEdit = (index: number) => {
        setEditOn(index);
    };

    const handleEditSubmit = (editedTask: string, index: number) => {
        toDos[index] = editedTask;
        setEditOn(null);
        flashMessage(`Task #${index + 1} has been edited!`);
    }

    const flashMessage = (newMessage:string|null): void => {
        setMessage(newMessage)
      }

  return (
    <>
        <h1 className="text-center mt-3">To Do List</h1>
        {message && <AlertMessage message={message} flashMessage={flashMessage}></AlertMessage>}
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
                            <td>
                            {editOn === index ? (
                                <div>
                                    <input type="text" value={task} onChange={(e => handleEditSubmit(e.target.value, index))} />
                                </div>
                            ) : (
                            <div>
                                {task}{' '} <Button className='ms-3' value={task} variant='danger' type='submit' onClick={() => handleDelete(task)}>Delete</Button>
                                <Button  className='ms-3'value={task} variant='success' type='submit' onClick={() => handleEdit(index)}>Edit</Button>
                            </div>
                            )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </>
  )
}
import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

type ToDoFormProps = {
    handleSubmit: (e:React.FormEvent) => void
}


export default function ToDoForm({ handleSubmit }: ToDoFormProps) {
  return (
    <Card className='my-3'>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Tasks</Form.Label>
            <Form.Control type='text' placeholder='Enter a new Task' name='task' />
            <Button className='w-100 mt-3' variant='primary' type='submit'> + Add Task </Button>
        </Form>
    </Card.Body>
</Card>
)
}

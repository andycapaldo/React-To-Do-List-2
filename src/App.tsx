import { useState } from 'react';
import Header from './components/Header';
import Container from "react-bootstrap/esm/Container";
import ToDoForm from './components/ToDoForm';
import ToDoDisplay from './components/ToDoDisplay';
import AlertMessage from './components/AlertMessage';
import './App.css';

export default function App() {
    const [toDos, setToDos] = useState<string[]>([]);
    const [message, setMessage] = useState<string|null>(null);

    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      let form = event.target as HTMLFormElement;
      let task = form.task.value;
      setToDos([...toDos, task])
      form.task.value = '';
    }

    const handleDeleteClick = (task: string):void => {
      const updatedToDos = toDos.filter(todo => todo !== task);
      setToDos(updatedToDos);
      flashMessage(`${task} Deleted!`)
    }

    const flashMessage = (newMessage:string|null): void => {
      setMessage(newMessage)
    }

  return (
    <>
      <Container>
        <Header/>
          <ToDoForm handleSubmit={handleFormSubmit}/>
          {message && <AlertMessage message={message} flashMessage={flashMessage}></AlertMessage>}
          <ToDoDisplay toDos={toDos} handleDelete={handleDeleteClick} setToDos={setToDos} />
      </Container>
    </>
  )
}



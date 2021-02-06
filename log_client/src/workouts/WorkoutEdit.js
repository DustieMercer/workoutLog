import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, ModalBody, Modal } from "reactstrap";

const WorkoutEdit = (props) => {
    const[editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const[editDef, setEditDef] = useState(props.workoutToUpdate.defintion);
    const[editRes, setEditRes] = useState(props.workoutToUpdate.result);
    
    return ( 
        <Modal isOpen={true}>
            <ModalHeader>Log a Workout</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Result</Label>
                        <Input name='result' value={editRes} onChange={(e) => setEditRes(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Edit Desription</Label>
                        <Input name='description' value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='definition'>Edit Definition</Label>
                        <Input type='select' name='definition' value={editDef} onChange={(e) => setEditDef(e.target.value)}>
                            <option value='Time'>Time</option>
                            <option value='Weight'>Weight</option>
                            <option value='Distance'>Distance</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'>Update the workout!</Button>
                </Form>
            </ModalBody>
        </Modal>
     );
}
 
export default WorkoutEdit;
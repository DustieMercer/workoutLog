import React, { useState } from 'react';

const WorkoutEdit = (props) => {
    const[editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const[editDef, setEditDef] = useState(props.workoutToUpdate.defintion);
    const[editRes, setEditRes] = useState(props.workoutToUpdate.result);
    
    return ( 
        <Modal isOpe={true}>
            <ModalHeader>Log a Workout</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Result</Label>
                        <Input name='result' value={editRes} onChange={(e) => setEditRes(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Edit Desription</Label>
                        <Input name='description' value={editDef} onChange={(e) => setEditDef(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='definition'>Edit Definition</Label>
                        <Input type='select' name='definition' value={editDef} onChange={(e) => setEditDef(e.target.value)}>
                            <option value='Time'>Time</option>
                            <option value='Weight'>Weight</option>
                            <option value='Distance'>Distance</option>
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
     );
}
 
export default WorkoutEdit;
import React, {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';
import {useUpdateFeedbackMutation} from "../../redux/feedbacksSlice";

export const Checkbox = ({ value, id }) => {
    const [
        updateFeedback
    ] = useUpdateFeedbackMutation()

    const [isActive, setIsActive] = useState(value)

    useEffect(async () => {
        if (value !== isActive)
            await updateFeedback({id: id, isActive: isActive})
    }, [isActive])

    const handleChange = () => {
        setIsActive(!isActive);
    };

    return (
        <Form.Check
            inline
            type="checkbox"
            // type="switch"
            label="Active"
            name={id}
            checked={isActive}
            onChange={handleChange}
        />
    )
}

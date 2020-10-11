import React, {useEffect, useState} from 'react';

const StatusWithHooks = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () =>{
        setEditMode(true);
    };

    const deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    };

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    };

    return(
        <div>
            { editMode &&
                <input
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                />}
            {!editMode &&
                <span
                    onDoubleClick={activateMode}
                >{props.status || 'No status'}</span>
            }
        </div>
    );
}

export default StatusWithHooks;
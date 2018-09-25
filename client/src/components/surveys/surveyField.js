import React from 'react';

export default ({ input, label, placeholder, type, value, meta: { error, touched } }) => {
    return (
        <div style={{marginTop: '30px'}}>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}} type={type} placeholder={placeholder} value={value} />
            <div className="red-text" style={{ marginBottom: '5px' }}>
                {touched && error}
            </div>
        </div>
    );
};
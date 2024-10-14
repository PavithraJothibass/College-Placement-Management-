import React from 'react';

const RoleImages = ({ roles }) => {
    return (
        <div className="role-images-container">
            {roles.map((role) => (
                <div className="role-image" key={role._id}>
                    <img src={role.image} alt={role.name} />
                    <h3>{role.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default RoleImages;

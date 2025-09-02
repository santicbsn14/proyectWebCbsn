import React from 'react';
import { Link } from 'react-router-dom';
import TrashIcon from '../Icons/trash';

const Structure = ({ isOpen, onClose, imageUrl, route }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={imageUrl} style={{height:'486px', width:'648px', position:'relative', left:'24%',top:'150px'}} alt="Modal" />
                <Link to={route} style={{paddingTop:'150px'}}>
                    <button className="btn route-button" style={{backgroundColor:'red'}}>Ir a {route.slice(1)}</button>
                </Link>
                <button className="btn close-button" style={{backgroundColor:'red', width:'100px', position:'relative', left:'45%'}} onClick={onClose}><TrashIcon /></button>
            </div>
        </div>
    );
};

export default Structure;
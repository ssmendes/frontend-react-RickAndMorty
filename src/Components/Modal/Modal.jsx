import './Modal.css'
import ModalAbout from './ModalAbout';

const Modal = ({ character, onClose }) => {     
    return (
        <div className="modal">
            <div className="modal-left">
                <button onClick={onClose} className='button-close'>Close</button>
                <div className="img-container">
                    <img src={character.image_url} alt={character.name} className='modal-img' />
                    <h2>{character.name}</h2>
                    <p>{character.species}</p>
                </div>
            </div> 
            <div className="modal-right">
                <div className="content-right">
                    <div>
                        <ModalAbout character={character}/>
                    </div>
                    <div>
                        <h2 className='modal-title'>origin</h2>
                        <h3 className='modal_subtitle'>Planet</h3>
                        <p className='modal-paragraph'>{character.origin_name}</p>
                    </div>
                    <div>
                        <h2 className='modal-title'>locations</h2>
                        <h3 className='modal_subtitle'>Planet</h3>
                        <p className='modal-paragraph'>{character.location_name}</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;

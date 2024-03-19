import './Modal.css'

const ModalAbout = ({character}) => {
    const {name, status, species, gender, type} = character;
    const pronouns = gender === 'Female' ? 'She' : 'He';
    const message =
        status === 'Alive' ? `${pronouns} is alive and well.` :
        status === 'Dead' ? `${pronouns} is dead.` :
        `${pronouns} can't be found.`;
    const description = `${name} is a ${gender} ${species} ${type}. ${message}`;

    return (
        <div className="modal-about">
            <h2 className='modal-title'>About</h2>
            <p className='modal-description'>{description}</p>
        </div>
    )
}

export default ModalAbout

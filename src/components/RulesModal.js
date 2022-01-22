import rulesImage from "../assets/images/image-rules.svg";

const RulesModal = ({ open, closeModal }) => {
  return (
    <div
      className='modal-backdrop'
      id='modal-backdrop'
      style={{ display: open ? "flex" : "none" }}
      onClick={(e) => {
        e.target.id === "modal-backdrop" && closeModal();
      }}
    >
      <div className='rules-modal'>
        <div className='modal-header'>
          <p className='rules-heading'>RULES</p>
          <span className='close-modal' onClick={closeModal} title='Close'>
            &#x2715;
          </span>
        </div>
        <img src={rulesImage} alt='rules' className='rules-image' />
      </div>
    </div>
  );
};

export default RulesModal;

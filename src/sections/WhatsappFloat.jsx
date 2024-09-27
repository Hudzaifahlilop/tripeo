import WhatsappFloatIcon from '../assets/wa.gif';

export default function WhatsappFloat() {
    return (
        <a href="https://wa.me/6281234500382" target="_blank" rel="noopener noreferrer">
            <button className="fixed bottom-[150px] right-0 z-99" style={{zIndex: 15}}>
                <img className='w-24 object-right' src={WhatsappFloatIcon} alt="facebook" />                
            </button>
        </a>
    );
  }
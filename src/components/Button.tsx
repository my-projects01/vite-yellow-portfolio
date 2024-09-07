import "../styles/home.css";
import CV from '../assets/CV.pdf';
import { ButtonProps } from "../types/Other";



const Button = ({
  variant = 'primary', // Default variant is 'primary'
  url = null,            // Default url as empty string
  title = '',          // Default title as empty string
  className = '',      // Optional className, default as empty
  type,               // not required type
  onClick,            // not required onClick
}: ButtonProps) => {

  // Function to handle redirection
  const toRedirect = (url: string | undefined) => {
    if (url === CV) { 
      const link = document.createElement('a');
      link.href = CV;               
      link.download = 'CV.pdf';      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (url) {               
      window.location.href = url;
    }
  };

  // Determine class name based on variant
  const variantClassName = variant === 'secondary' ? 'buttonSecondary' : 'buttonPrimary';

  // Consolidate all class names
  const combinedClassName = `button ${variantClassName} ${className}`.trim();

  // Render button dummy with props
  const ButtonDummy = ({ title, className }: ButtonProps) => (
    <button type={type} className={className} onClick={onClick? onClick: () => url && toRedirect(url as string)}>
      {title}
    </button>
  );

  return <ButtonDummy title={title} className={combinedClassName} />;
};

export default Button;

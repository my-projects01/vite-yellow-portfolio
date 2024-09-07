export type ActivePage = 'home'|'about'|'projects'|'contact';

// Interface representing the properties for a detail card component
export interface DetailCardProps {
    profession?: string | null;           // The profession of the individual (optional)
    title?: string | null;                // The title of the individual (optional)
    subHeadline?: string | null;          // A brief subheadline or tagline (optional)
    buttonTitle1?: string | null;         // Title for the first button (optional)
    buttonUrl1?: string | null;           // URL for the first button (optional)
    buttonTitle2?: string | null;         // Title for the second button (optional)
    buttonUrl2?: string | null;           // URL for the second button (optional)
    variant?: "primary" | "secondary";    // Variant type for styling the card (optional)
    onClick1?: () => void;                 // Click event handler (optional)
    onClick2?: () => void;                 // Click event handler (optional)
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'; // Define specific variant types if known
  url?: URL |string |null;                                 // URL for the button (optional)
  title: string;                                // Title of the button (required)
  className?: string;                           // Additional CSS class names (optional)
  disabled?: boolean;                           // Disable the button (optional)
  onClick?: () => void;    
  type?: "button" | "reset" | "submit" | undefined;                     // Click event handler (optional)
}
import { Toaster as HotToaster } from 'react-hot-toast';

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Default options
        duration: 4000,
        style: {
          background: 'hsl(240 25% 10%)',
          color: 'hsl(210 20% 98%)',
          border: '1px solid hsl(240 20% 20%)',
          borderRadius: '0.5rem',
          padding: '16px',
          fontSize: '16px',
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: '500',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 20px hsl(270 90% 65% / 0.2), 0 4px 6px -1px rgb(0 0 0 / 0.1)',
        },
        // Success
        success: {
          duration: 4000,
          style: {
            background: 'linear-gradient(135deg, hsl(240 25% 10%) 0%, hsl(270 90% 65% / 0.1) 100%)',
            border: '1px solid hsl(270 90% 65% / 0.3)',
            color: 'hsl(210 20% 98%)',
            boxShadow: '0 0 20px hsl(270 90% 65% / 0.3), 0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
          iconTheme: {
            primary: 'hsl(270 90% 65%)',
            secondary: 'hsl(210 20% 98%)',
          },
        },
        // Error
        error: {
          duration: 5000,
          style: {
            background: 'linear-gradient(135deg, hsl(240 25% 10%) 0%, hsl(0 84% 60% / 0.1) 100%)',
            border: '1px solid hsl(0 84% 60% / 0.3)',
            color: 'hsl(210 20% 98%)',
            boxShadow: '0 0 20px hsl(0 84% 60% / 0.3), 0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
          iconTheme: {
            primary: 'hsl(0 84% 60%)',
            secondary: 'hsl(210 20% 98%)',
          },
        },
        // Loading
        loading: {
          style: {
            background: 'linear-gradient(135deg, hsl(240 25% 10%) 0%, hsl(190 100% 50% / 0.1) 100%)',
            border: '1px solid hsl(190 100% 50% / 0.3)',
            color: 'hsl(210 20% 98%)',
            boxShadow: '0 0 20px hsl(190 100% 50% / 0.3), 0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
          iconTheme: {
            primary: 'hsl(190 100% 50%)',
            secondary: 'hsl(210 20% 98%)',
          },
        },
      }}
    />
  );
}
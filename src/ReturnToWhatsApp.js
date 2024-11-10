import React from 'react';

const ReturnToWhatsApp = () => {
  const handleSendClick = () => {
    // Redireciona para o WhatsApp usando wa.me
    window.location.href = "https://wa.me/";
    
    // Tenta fechar a aba após o redirecionamento (se possível)
    setTimeout(() => {
      window.close();
    }, 1000); // Ajuste o tempo de espera se necessário
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Página de Envio</h1>
      <button 
        onClick={handleSendClick} 
        style={{
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer', 
          backgroundColor: '#25D366', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px'
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default ReturnToWhatsApp;

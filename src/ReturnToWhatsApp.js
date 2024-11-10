import React from 'react';

const ReturnToWhatsApp = () => {
  const handleSendClick = () => {
    // Tenta redirecionar para o WhatsApp
    window.location.href = "whatsapp://";

    // Espera 2 segundos antes de fechar a aba, caso o WhatsApp tenha sido acionado
    setTimeout(() => {
      window.close();
    }, 2000);
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

import React from 'react';

const ReturnToWhatsApp = () => {
  const handleSendClick = () => {
    // Número de telefone para abrir a conversa no WhatsApp
    const phoneNumber = '5521976083834'; // Altere para o número desejado
    const waLink = `https://wa.me/${phoneNumber}`;

    // Redireciona para o WhatsApp com o número especificado
    window.location.href = waLink;
    
    // Tenta fechar a aba após o redirecionamento (se possível)
    setTimeout(() => {
      window.close();
    }, 1000); // Ajuste o tempo se necessário
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Converse Conosco no WhatsApp</h1>
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
        Enviar Mensagem
      </button>
    </div>
  );
};

export default ReturnToWhatsApp;

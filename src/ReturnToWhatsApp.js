import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Caso esteja usando react-router

const RedirectToWhatsApp = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [id, setId] = React.useState('');

  // Função para capturar parâmetros da URL
  const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const phone = params.get('phone'); // Número de telefone
    const id = params.get('id'); // ID

    if (phone) setPhoneNumber(phone);
    if (id) setId(id);
  };

  useEffect(() => {
    // Captura os parâmetros ao carregar o componente
    getUrlParams();
  }, []);

  const handleRedirect = () => {
    if (phoneNumber) {
      const waLink = `https://wa.me/${phoneNumber}`;
      
      // Aqui você pode fazer algo com o ID, como fazer uma requisição para um servidor ou algo no seu site
      console.log('ID capturado:', id);  // Exemplo de uso do ID

      // Redireciona para o WhatsApp
      window.location.href = waLink;

      // Fechar a aba (se possível)
      setTimeout(() => {
        window.close();
      }, 1000); // Ajuste o tempo de espera se necessário
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redirecionando para o WhatsApp...</h1>
      <button
        onClick={handleRedirect}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Enviar Mensagem
      </button>
    </div>
  );
};

export default RedirectToWhatsApp;

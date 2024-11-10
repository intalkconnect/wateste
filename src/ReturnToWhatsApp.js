import React from 'react';

const ReturnToWhatsApp = () => {
    // Função que redireciona para o WhatsApp e tenta fechar a aba
    const handleSendClick = () => {
        // Tenta redirecionar para o WhatsApp
        window.location.href = "whatsapp://";

        // Tenta fechar a aba após o redirecionamento
        setTimeout(() => {
            window.close();
        }, 500);
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

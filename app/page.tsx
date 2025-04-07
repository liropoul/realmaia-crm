'use client';

import { useState } from "react";

const dadosSimulados = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    assunto: "Atraso na viagem",
    mensagem: "Meu ônibus saiu com 1h de atraso.",
    resposta: "",
    status: "pendente",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria@email.com",
    assunto: "Bagagem extraviada",
    mensagem: "Minha mala não chegou ao destino.",
    resposta: "",
    status: "pendente",
  },
];

export default function PainelCRM() {
  const [reclamacoes, setReclamacoes] = useState(dadosSimulados);

  const enviarResposta = (id) => {
    setReclamacoes((recs) =>
      recs.map((rec) =>
        rec.id === id && rec.resposta.trim() !== ""
          ? { ...rec, status: "enviado" }
          : rec
      )
    );
  };

  const atualizarResposta = (id, texto) => {
    setReclamacoes((recs) =>
      recs.map((rec) =>
        rec.id === id ? { ...rec, resposta: texto } : rec
      )
    );
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Plano de Ação: Sistema Real Maia CRM
      </h1>

      <div style={{ background: '#fff', borderRadius: '1rem', padding: '1rem', boxShadow: '0 0 10px #ccc', marginTop: '1rem' }}>
        <h2>Etapa 1 — Estrutura e publicação</h2>
        <p><strong>Objetivo:</strong> Colocar a primeira versão online, acessível no navegador (PC e celular).</p>
        <ul>
          <li>Criar um repositório no GitHub com seu código</li>
          <li>Conectar com a Vercel para hospedagem gratuita</li>
          <li>Publicar um link como realmaia.vercel.app</li>
        </ul>
      </div>

      <div style={{ background: '#fff', borderRadius: '1rem', padding: '1rem', boxShadow: '0 0 10px #ccc', marginTop: '1rem' }}>
        <h2>Etapa 2 — Dados reais</h2>
        <p><strong>Objetivo:</strong> Integrar com sua planilha Google ou banco de dados.</p>
        <ul>
          <li>Conectar com a planilha "CRM de Reclamações Real Maia"</li>
          <li>Exibir as reclamações reais no painel</li>
          <li>Salvar respostas e status na planilha ou banco</li>
        </ul>
      </div>

      <div style={{ background: '#fff', borderRadius: '1rem', padding: '1rem', boxShadow: '0 0 10px #ccc', marginTop: '1rem' }}>
        <h2>Etapa 3 — Recursos adicionais</h2>
        <p><strong>Objetivo:</strong> Tornar o sistema robusto e escalável.</p>
        <ul>
          <li>Login (segurança por usuário)</li>
          <li>Histórico e busca</li>
          <li>Integração com a API do Consumidor.gov.br</li>
          <li>Envio automático de e-mails</li>
          <li>Domínio personalizado: crm.realmaia.com.br</li>
        </ul>
      </div>

      {reclamacoes.map((rec) => (
        <div key={rec.id} style={{ background: '#fff', borderRadius: '1rem', padding: '1rem', boxShadow: '0 0 10px #ccc', marginTop: '1rem' }}>
          <p><strong>Nome:</strong> {rec.nome}</p>
          <p><strong>Email:</strong> {rec.email}</p>
          <p><strong>Assunto:</strong> {rec.assunto}</p>
          <p><strong>Mensagem:</strong> {rec.mensagem}</p>

          <textarea
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}
            placeholder="Escreva sua resposta aqui..."
            value={rec.resposta}
            onChange={(e) => atualizarResposta(rec.id, e.target.value)}
            disabled={rec.status === "enviado"}
          />

          <button
            onClick={() => enviarResposta(rec.id)}
            disabled={rec.status === "enviado" || rec.resposta.trim() === ""}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: rec.status === "enviado" ? '#ccc' : '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: rec.status === "enviado" ? 'not-allowed' : 'pointer',
            }}
          >
            {rec.status === "enviado" ? "Enviado" : "Enviar Resposta"}
          </button>
        </div>
      ))}
    </div>
  );
}

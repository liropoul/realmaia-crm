
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="p-4 grid gap-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Plano de Ação: Sistema Real Maia CRM</h1>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Etapa 1 — Estrutura e publicação</h2>
        <p>
          <strong>Objetivo:</strong> Colocar a primeira versão online, acessível no navegador (PC e celular).
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Criar um repositório no GitHub com seu código</li>
          <li>Conectar com a Vercel para hospedagem gratuita</li>
          <li>Publicar um link como realmaia.vercel.app</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Etapa 2 — Dados reais</h2>
        <p>
          <strong>Objetivo:</strong> Integrar com sua planilha Google ou banco de dados.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Conectar com a planilha "CRM de Reclamações Real Maia"</li>
          <li>Exibir as reclamações reais no painel</li>
          <li>Salvar respostas e status na planilha ou banco</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Etapa 3 — Recursos adicionais</h2>
        <p>
          <strong>Objetivo:</strong> Tornar o sistema robusto e escalável.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Login (segurança por usuário)</li>
          <li>Histórico e busca</li>
          <li>Integração com a API do Consumidor.gov.br</li>
          <li>Envio automático de e-mails</li>
          <li>Domínio personalizado: crm.realmaia.com.br</li>
        </ul>
      </div>

      {reclamacoes.map((rec) => (
        <Card key={rec.id} className="rounded-2xl shadow p-4">
          <CardContent className="space-y-2">
            <p><strong>Nome:</strong> {rec.nome}</p>
            <p><strong>Email:</strong> {rec.email}</p>
            <p><strong>Assunto:</strong> {rec.assunto}</p>
            <p><strong>Mensagem:</strong> {rec.mensagem}</p>

            <Textarea
              placeholder="Escreva sua resposta aqui..."
              value={rec.resposta}
              onChange={(e) => atualizarResposta(rec.id, e.target.value)}
              disabled={rec.status === "enviado"}
            />

            <Button
              onClick={() => enviarResposta(rec.id)}
              disabled={rec.status === "enviado" || rec.resposta.trim() === ""}
            >
              {rec.status === "enviado" ? "Enviado" : "Enviar Resposta"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

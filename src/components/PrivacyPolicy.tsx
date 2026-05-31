import React from "react";

export default function PrivacyPolicy() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Política de Privacidade</h1>
      <p className="text-sm text-slate-500 mb-8">Última atualização: maio de 2026</p>

      <p>
        A Alpha One Tech valoriza a privacidade de seus clientes e visitantes. Esta Política descreve como
        coletamos, usamos e protegemos suas informações pessoais em conformidade com a Lei nº 13.709/2018 (LGPD).
      </p>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">1. Quais dados coletamos</h2>
      <p>
        Ao entrar em contato por meio de nosso formulário, e-mail ou WhatsApp, podemos coletar as seguintes informações:
      </p>
      <ul className="list-disc pl-5 text-slate-600 space-y-1">
        <li>Nome completo</li>
        <li>Empresa (opcional)</li>
        <li>E-mail</li>
        <li>Telefone / WhatsApp</li>
        <li>Detalhes do projeto ou serviço desejado (se fornecidos)</li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">2. Como usamos seus dados</h2>
      <p>As informações coletadas são utilizadas exclusivamente para:</p>
      <ul className="list-disc pl-5 text-slate-600 space-y-1">
        <li>Responder solicitações de orçamento e contato</li>
        <li>Identificar e qualificar o atendimento ao cliente</li>
        <li>Enviar comunicações relacionadas aos serviços prestados</li>
        <li>Cumprir obrigações legais e regulatórias</li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">3. Compartilhamento de dados</h2>
      <p>
        Não compartilhamos, vendemos ou cedemos suas informações pessoais a terceiros. Os dados são acessíveis
        apenas a membros autorizados da equipe Alpha One Tech para fins de atendimento e prestação de serviços.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">4. Armazenamento e segurança</h2>
      <p>
        Os dados coletados são armazenados de forma segura pelo tempo necessário à prestação do serviço ou
        cumprimento de obrigações legais. Adotamos medidas técnicas e organizativas para proteger suas
        informações contra acesso não autorizado, perda ou alteração.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">5. Seus direitos (LGPD)</h2>
      <p>Você tem o direito de:</p>
      <ul className="list-disc pl-5 text-slate-600 space-y-1">
        <li>Confirmar a existência de tratamento dos seus dados</li>
        <li>Acessar seus dados pessoais</li>
        <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
        <li>Solicitar a eliminação dos dados tratados com o seu consentimento</li>
        <li>Revogar o consentimento a qualquer momento</li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">6. Cookies e tecnologias de rastreamento</h2>
      <p>
        Nosso site pode utilizar cookies essenciais para garantir o funcionamento adequado das páginas.
        Caso implementemos ferramentas de análise (como Google Analytics), você será informado e poderá
        gerenciar suas preferências de cookies.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">7. Contato</h2>
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato pelo e-mail:{" "}
        <a href="mailto:contato@alphaonetech.com.br" className="text-[#0036b2] underline">
          contato@alphaonetech.com.br
        </a>
      </p>

      <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">8. Alterações nesta Política</h2>
      <p>
        Esta Política pode ser atualizada periodicamente. Recomendamos que você revise esta página
        regularmente. Alterações relevantes serão comunicadas em nosso site.
      </p>
    </article>
  );
}

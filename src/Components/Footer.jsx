export default function Footer() {
  return(
      <footer>
        <div>
          <img className="logo-rodape" src="./img/logo-starplus.png"></img>
        </div>
        <div className="minidiv-rodape">
          <p>Política de Privacidade</p>
          <p>Proteção de Dados no Brasil</p>
          <p>Contrato de Assinatura</p>
        </div>
        <div className="minidiv-rodape">
          <p>Ajuda</p>
          <p>Dispositivos Compatíveis</p>
          <p>Sobre o Star+</p>
          <p>Anúncios personalizados</p>
        </div>
        <div className="minidiv-rodape">
          <p className="texto-rodape-maior">
            Star+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Star+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
          </p>
        </div>
        <div className="minidiv-rodape">
          <p>
            © Disney. Todos os direitos reservados.
          </p>
        </div>
      </footer>
  );
}
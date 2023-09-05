import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>04/09/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>- R$ 7.000,00</td>
              <td>Alimentação</td>
              <td>01/09/2023</td>
            </tr>
            
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  )
} 
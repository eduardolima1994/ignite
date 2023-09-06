import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>                
              </td>
              <td>Venda</td>
              <td>04/09/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 5.000,00
                </PriceHighlight>  
              </td>
              <td>Alimentação</td>
              <td>01/09/2023</td>
            </tr>
            
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
} 
import { HistoryContainer, HistoryTable } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  )
}

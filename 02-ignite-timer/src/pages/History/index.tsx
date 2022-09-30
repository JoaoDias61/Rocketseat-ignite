import { Header } from "../../components/Header"
import { HistoryContainner, HistoryList } from "./styles"

export function History() {
    return (
        <HistoryContainner>
            <h1>Meu Histórico</h1>

            <HistoryList>
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
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>Concluído</td>

                        </tr>
                    </tbody>
                </table>

            </HistoryList>
        </HistoryContainner>
    )
}
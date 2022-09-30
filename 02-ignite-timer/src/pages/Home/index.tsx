import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task"
                        list="task-suggest"
                        type="text"
                        placeholder="Dê um nome para o seu projeto"
                    />
                    <datalist id="raks-suggestions">
                        <option value="Projeto 1" />
                    </datalist>
                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput
                        placeholder="00"
                        type="number"
                        id="minutesAmout"
                        step="5"
                        min="5"
                        max="60"
                    />

                    <span>minutos</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdownContainer>

                <StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
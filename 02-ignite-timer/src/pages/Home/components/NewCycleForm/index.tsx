import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";



interface NewCycleFormProps { }

export function NewCycleForm(props: NewCycleFormProps) {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (

        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput id="task"
                list="task-suggest"
                type="text"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')}
            />
            <datalist id="raks-suggestions">
                <option value="Projeto 1" />
            </datalist>
            <label htmlFor="">Durante</label>
            <MinutesAmountInput
                placeholder="00"
                type="number"
                disabled={!!activeCycle}
                id="minutesAmout"
                step="5"
                min="5"
                max="60"
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos</span>
        </FormContainer>
    );
}

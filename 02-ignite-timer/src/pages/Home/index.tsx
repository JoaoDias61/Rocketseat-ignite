import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CountdownContainer, 
    FormContainer, 
    HomeContainer,
    MinutesAmountInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number()
    .min(5, 'O ciclo precisa der de no mínimo 5 minutos.')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos.')
})



type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    const { register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })

    function handlwCreateNewCycle(data: NewCycleFormData) {
        console.log(data)
        reset();
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handlwCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task"
                        list="task-suggest"
                        type="text"
                        placeholder="Dê um nome para o seu projeto"
                        value={task}
                        {...register('task')}
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
                        {...register('minutesAmount', { valueAsNumber: true })}
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

                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
    HomeContainer,
    StopCountdownButton,
} from "./styles";
import { StartCountdownButton } from "./components/CountDown/styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";
import { CyclesContext } from "../../contexts/CycleContext";
import { useContext } from "react";

export function Home() {

    const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

    const newCycleFormValidationSchema = zod.object({
        task: zod.string().min(1, "Informe a tarefa"),
        minutesAmount: zod.number()
            .min(5, 'O ciclo precisa der de no mínimo 5 minutos.')
            .max(60, 'O intervalo precisa ser de no máximo 60 minutos.')
    })

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    const { handleSubmit, watch, reset } = newCycleForm

    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>



    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(createNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />
                {activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}

            </form>
        </HomeContainer>
    )
}
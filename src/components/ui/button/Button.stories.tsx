import {Meta} from "@storybook/react";
import {Button} from "./Button";
import {StoryObj} from "@storybook/react";
import {Counter} from "../counter";
import s from './Button.module.scss';
import loaderAnimation from '../../../assets/icons/loader.svg'

const meta: Meta<typeof Button> = {
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
        },
    },
    component: Button,
    tags: ['autodocs'],
    title: 'Components/UI/Button',
}
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: (
            <>
                Что делать
            </>
        ),
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        children: (
            <>
                Что делать
            </>
        ),
        variant: 'secondary',
    },
}
export const PrimaryWithCounter: Story = {
    args: {
        children: (
            <>
                Что cделать
                <Counter variant={'primary'} quantity={3}  size={'m'} className={s.counter}/>
            </>
        ),
        variant: 'primary',
    },
}

export const SecondaryWithCounter: Story = {
    args: {
        children: (
            <>
                Что cделать
                <Counter quantity={3} variant={'secondary'} size={'m'}/>
            </>
        ),
        variant: 'secondary',
    },
}
export const PrimaryButtonWithLoader: Story = {
    args: {
        children: (
            <>
                <img className={s.loader} src={loaderAnimation} alt={'loading'}/>
            </>
        ),
        variant: 'primary',
    },
}
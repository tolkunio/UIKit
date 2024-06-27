import type {Meta} from '@storybook/react'
import {StoryObj} from "@storybook/react";
import {Counter} from "./Counter";

const meta: Meta<typeof Counter> = {
    component: Counter,
    tags: ['autodocs'],
    title: 'Components/UI/Counter',
    argTypes:{
       variant:{
           options: ['primary', 'secondary'],
       }
    }
}
export default meta
type Story = StoryObj<typeof meta>
export const Default = {
    args: {
        quantity:'1'
    },
}
export const Primary: Story = {
    args: {
        quantity: '1',
        variant: 'primary',
    },
}
export const Secondary: Story = {
    args: {
        quantity: '1',
        variant: 'secondary',
    },
}
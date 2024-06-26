import type {Meta} from '@storybook/react'
import Counter from "./Counter";
import {StoryObj} from "@storybook/react";

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
        children:'1'
    },
}
export const Primary: Story = {
    args: {
        children: '1',
        variant: 'primary',
    },
}
export const Secondary: Story = {
    args: {
        children: '1',
        variant: 'secondary',
    },
}
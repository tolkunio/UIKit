import {Meta} from "@storybook/react";
import {Button} from "./Button";
import {StoryObj} from "@storybook/react";

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
        children: 'Button',
        focused:false,
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Button',
        focused: false,
        variant: 'secondary',
    },
}
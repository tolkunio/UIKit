import s from './Button.module.scss'
import {ElementType, ReactNode} from "react";
import {clsx} from "clsx";

export type ButtonSize = 's' | 'm' | 'l' ;
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T,
    children?: ReactNode,
    className?: string,
    variant: 'primary' | 'secondary',
    buttonSize: ButtonSize,
}
export const Button = <T extends ElementType = 'button'>(props: ButtonProps) => {
    const {as: Component = 'button', className, variant = 'primary', buttonSize = 'm', ...rest} = props
    const classNames = clsx(s[variant], getSizeClassName(buttonSize), className)
    return (
        <Component className={classNames} {...rest}/>
    );
};

function getSizeClassName(size: ButtonSize) {
    if (size === 's') {
        return s.s
    }
    if (size === 'm') {
        return s.m
    }
    if (size === 'l') {
        return s.l
    }
}
import s from 'Button.module.scss'
import {ElementType,ReactNode} from "react";
import {clsx} from "clsx";

export type ButtonSize = 's' | 'm' | 'l'  //28 36 56
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T,
    children: ReactNode,
    className?: string,
    variant: 'primary' | 'secondary',
    buttonSize: ButtonSize,
    focused?: boolean,
}
export const Button = <T extends ElementType = 'button'>(props: ButtonProps) => {
    const {as: Component = 'button', className, focused, variant = 'primary', ...rest} = props
    const classnames = clsx(s[variant], focused && s.focused, className)
    return (

        <Component className={classnames} {...rest}/>
    );
};

import s from './Counter.module.scss'
import {ReactNode,ElementType} from "react";
import {clsx} from "clsx";

export type CounterSize = '8' | '12' | '16' | '20' | '24'

export type CounterProps<T extends ElementType = 'div'> = {
    as?: T,
    children?: ReactNode,
    className: string,
    variant: 'primary' | 'secondary',
    size?: CounterSize,
    stroke?: boolean,
    quantity?: string,
    pulse?: boolean

}
const Counter = <T extends ElementType = 'div'>(props: CounterProps<T>) => {
    const {as: Component = 'div', className, variant = 'primary', size, ...rest} = props
    const classNames = clsx(s[variant], size, className);
    return (
        <Component className={classNames}{...rest}/>
    );
};

export default Counter;

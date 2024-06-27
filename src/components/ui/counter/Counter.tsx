import s from './Counter.module.scss'
import {ElementType} from "react";
import {clsx} from "clsx";

export type CounterSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export type CounterProps<T extends ElementType = 'div'> = {
    as?: T,
    quantity: string | number; //строка длиной 1,2 или 3 символа,либо число
    className?: string,
    variant: 'primary' | 'secondary',
    size: CounterSize,
    stroke?: boolean,
    pulse?: boolean

}
export const Counter = <T extends ElementType = 'div'>(props: CounterProps<T>) => {
    const {as: Component = 'div', className, variant = 'primary', size = 'm', quantity, stroke, ...rest} = props
    const formattedQuantity = getQuantity(quantity);
    const classNames = clsx(s[variant], getSizeClassName(size), stroke && s.stroke,
            className
        )
    ;
    return (
        <Component className={classNames} {...rest}>
            {formattedQuantity}
        </Component>
    );
};

function getQuantity(quantity: string | number): string {
    if (typeof quantity === 'number') {
        return quantity > 99 ? '99+' : quantity.toString();
    } else {
        return quantity.length > 3 ? `${quantity.slice(0, 3)}` : quantity;
    }
}

function getSizeClassName(size: CounterSize) {
    if (size === 'xs') {
        return s.xs
    }
    if (size === 's') {
        return s.s
    }
    if (size === 'm') {
        return s.m
    }
    if (size === 'l') {
        return s.l
    }
    if (size === 'xl') {
        return s.xl
    }
}
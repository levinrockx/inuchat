export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
};

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant: ButtonVariant;
    onClick?: () => void;
};
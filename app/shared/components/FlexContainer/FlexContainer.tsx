import { FlexContainerProps } from "./domain/types";

const FlexContainer: React.FC<FlexContainerProps> = ({
    children,
    direction = 'row',
    alignItem = 'start',
    justifyContent = 'start',
    className,
}) => {
    let classes: string = 'flex';

    switch (direction) {
        case 'row': classes += ' flex-row'; break;
        case 'column': classes += ' flex-col'; break;
        default: throw Error('Flex direction is unknown');
    }

    switch (alignItem) {
        case 'start': classes += ' items-start'; break;
        case 'center': classes += ' items-center'; break;
        case 'end': classes += ' items-end'; break;
        default: throw Error('Flex align items is unknown');
    }

    switch (justifyContent) {
        case 'start': classes += ' justify-start'; break;
        case 'center': classes += ' justify-center'; break;
        case 'space-between': classes += ' justify-between'; break;
        case 'space-around': classes += ' justify-around'; break;
        case 'space-evenly': classes += ' justify-evenly'; break;
        case 'end': classes += ' justify-end'; break;
        default: throw Error('Flex justicy content items is unknown');
    }

    return <div className={`${classes} ${className}`}>{children}</div>
};

export default FlexContainer;
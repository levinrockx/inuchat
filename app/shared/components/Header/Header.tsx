import { HeaderProps, HeaderType } from './domain/types';

const Header: React.FC<HeaderProps> = ({
    type,
    children,
}) => {
    switch (type) {
        case HeaderType.H1:
            return <h1>{children}</h1>;
        case HeaderType.H2:
            return <h2>{children}</h2>;
        case HeaderType.H3:
            return <h3>{children}</h3>;
        default:
            throw new Error('Incorrect header type')
    };
};

export default Header;
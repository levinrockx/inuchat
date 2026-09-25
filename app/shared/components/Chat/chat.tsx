'use client';

import FlexContainer from "../FlexContainer/FlexContainer";
import { ButtonVariant } from "../Button/domain/types";
import { HeaderType } from "../Header/domain/types";
import classes from './styles/chat.module.css';
import { IoMdSend } from "react-icons/io";
import Inu from '../../../assets/inu.png';
import Header from "../Header/Header";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Image from "next/image";

const Chat = () => {
    return (
        <FlexContainer direction="column" className="min-h-[100vh] p-4" gap={10}>
            <FlexContainer alignItem="center" gap={10}>
                <Image src={Inu} alt="Logo image" height={30} width={30} />
                <Header type={HeaderType.H1}>InuChat</Header>
            </FlexContainer>
            <FlexContainer direction="column" className={classes.chat}>
                <div></div>
            </FlexContainer>
            <FlexContainer alignItem="stretch" justifyContent="space-between" className="w-full" gap={10}>
                <Input type='text' className="w-full" placeholder="Type a message here..." />
                <Button variant={ButtonVariant.PRIMARY}>
                    <IoMdSend />
                </Button>
            </FlexContainer>
        </FlexContainer >
    );
}

export default Chat;
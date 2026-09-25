'use client';

import FlexContainer from "../FlexContainer/FlexContainer";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { HeaderType } from "../Header/domain/types";
import { ButtonVariant } from "../Button/domain/types";
import Input from "../Input/Input";

const Chat = () => {
    const sendMessage = async (message: string) => {
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        console.log(response);
    };

    return (
        <FlexContainer direction="column" className="min-h-[100vh]">
            <Header type={HeaderType.H1}>InuChat</Header>
            <FlexContainer direction="column" className="flex-1">
                <div></div>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" className="w-full">
                <Input type='text' className="w-full" />
                <div onClick={() => sendMessage('')}>
                    <Button variant={ButtonVariant.PRIMARY}  >
                        Send
                    </Button>
                </div>
            </FlexContainer>
        </FlexContainer >
    );
}

export default Chat;
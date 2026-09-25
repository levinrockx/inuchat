'use client';

import FlexContainer from "../FlexContainer/FlexContainer";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { HeaderType } from "../Header/domain/types";
import { ButtonVariant } from "../Button/domain/types";
import Ollama from "ollama";

const Chat = () => {
    const sendMessage = async (content: string) => {
        const response = await Ollama.chat({
            model: 'gemma4:latest',
            messages: [
                {
                    role: 'user',
                    content,
                }
            ]
        });

        console.log(response);
    };

    return (
        <FlexContainer direction="column" alignItem="center" justifyContent="center">
            <Header type={HeaderType.H1}>InuChat</Header>
            <FlexContainer className="min-h-[90vh]" direction="column">
                <div></div>
            </FlexContainer>
            <FlexContainer >
                {/* <Input type='text' onChange={(event) => setMessage(event.target.value)} /> */}
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
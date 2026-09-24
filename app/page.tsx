import Button from "./shared/components/Button/Button";
import { ButtonVariant } from "./shared/components/Button/domain/types";
import FlexContainer from "./shared/components/FlexContainer/FlexContainer";
import { HeaderType } from "./shared/components/Header/domain/types";
import Header from "./shared/components/Header/Header";
import Input from "./shared/components/Input/Input";

export default function Home() {
  return (
    <FlexContainer direction="column">
      <Header type={HeaderType.H1}>InuChat</Header>
      <FlexContainer className="min-h-[90vh]" direction="column">
        <div></div>
      </FlexContainer>
      <FlexContainer >
        <Input type='text' />
        <Button variant={ButtonVariant.PRIMARY}>
          Send
        </Button>
      </FlexContainer>
    </FlexContainer >
  );
}

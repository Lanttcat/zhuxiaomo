import * as React from "react";
import Input from "../../UI/Input/Input";

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <main>
        <div>
          <Input type={"text"} />
        </div>
        <div>
          图集
        </div>
        <div>
          按钮
        </div>
      </main>
    );
  }
}

export default Home;

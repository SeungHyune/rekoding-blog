import { Fragment } from "react";

interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  return (
    <p>
      {message.split("\n").map((text, idx) => (
        <Fragment key={`${text}${idx}`}>
          {text} <br />
        </Fragment>
      ))}
    </p>
  );
};

export default Message;

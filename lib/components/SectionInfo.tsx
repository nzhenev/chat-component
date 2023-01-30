import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";

export const SectionInfo: FC = () => {
  const { contentWidth, topBarSizeY, dispatch } = useContext(StateChatContext);
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true)
    }, 50);
  }, [])

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowInfo(false)
    setTimeout(() => {
      dispatch({ set: typeSetChatContext.SectionInfoShow, value: false })
    }, 100);
  }

  const transitionVisibilite = {
    transform: `translateY(-${contentWidth < 768 ? topBarSizeY : 0}px)`,
    transition: `opacity 0.4s`,
    opacity: `1`
  }
  const transitionInVisibilite = {
    transform: `translateY(-${contentWidth < 768 ? topBarSizeY : 0}px)`,
    transition: "opacity 0.4s",
    opacity: `0`,
  }

  return (
    <>
      <div style={showInfo ? transitionVisibilite : transitionInVisibilite} className={`${contentWidth < 769 && "asd-absolute asd-z-30"} asd-bg-white asd-flex asd-flex-col sizeSections${contentWidth} @md:!asd-w-[260px]`}>
        <button onClick={handleClick}>cerrar info</button>
      </div>
    </>
  );
};
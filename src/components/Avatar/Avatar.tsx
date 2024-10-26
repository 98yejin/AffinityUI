// Avatar.tsx
import React, { FC } from "react";
import { AvatarContainer, AvatarImage, AvatarInitials } from "./Avatar.styles";

interface AvatarProps {
  imageUrl?: string;
  initials?: string;
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square";
  backgroundColor?: string;
}

const Avatar: FC<AvatarProps> = ({
  imageUrl,
  initials,
  size = "medium",
  shape = "circle",
  backgroundColor = "#007bff",
}) => {
  return (
    <AvatarContainer
      size={size}
      shape={shape}
      backgroundColor={backgroundColor}
    >
      {imageUrl && imageUrl.trim() !== "" ? (
        <AvatarImage
          src={imageUrl}
          alt="Avatar"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        <AvatarInitials>{initials}</AvatarInitials>
      )}
    </AvatarContainer>
  );
};

export default Avatar;

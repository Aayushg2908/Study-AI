"use client";

import { Button, Link } from "@nextui-org/react";

export const SignInButton = ({
  size,
}: {
  size?: "sm" | "md" | "lg" | undefined;
}) => {
  return (
    <Button
      size={size}
      href="/sign-in"
      as={Link}
      className="bg-gradient-to-r from-[#7EE7FC] to-[#45D483] text-black font-bold"
    >
      Sign Up
    </Button>
  );
};

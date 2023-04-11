import { Spacer, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0,20px",
        backgroundColor: theme?.colors.gray500.value,
      }}
    >
      
      <Link href="/">
        <Text color="white" h2 css={{ marginLeft:'15px'}}>
          Pokemon
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" passHref>
        <Text color="white" h3 css={{ marginRight: "10px" }}>
          Favorites
        </Text>
      </Link>
    </div>
  );
};

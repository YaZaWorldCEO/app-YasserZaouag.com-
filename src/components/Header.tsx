import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <>
            <Flex
                as={"nav"}
                position={"fixed"}
                top={0}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                backgroundColor={"#C8C8C8"}
                padding={"1rem"}
                borderBottom={".25rem solid #333333"}
            >
                <Heading
                    fontFamily={"Noto Sans"}
                    fontSize={"1.5rem"}
                >
                    Yasser Zaouag
                </Heading>
                <Flex
                    alignItems={"center"}
                    columnGap={"1rem"}
                >
                    <Link
                        href="#about"
                        color={"#555555"}
                        fontSize={"1.25rem"}
                        transition={"all ease-out 250ms"}
                        fontWeight={"700"}
                        _hover={{
                            transform: "rotate(-5deg)",
                            color: "#333333"
                        }}
                    >
                        About Me
                    </Link>
                    <Link
                        href="#skills"
                        color={"#555555"}
                        fontSize={"1.25rem"}
                        transition={"all ease-out 250ms"}
                        fontWeight={"700"}
                        _hover={{
                            transform: "rotate(-5deg)",
                            color: "#333333"
                        }}
                    >
                        My Skills
                    </Link>
                    <Link
                        href="#projects"
                        color={"#555555"}
                        fontSize={"1.25rem"}
                        transition={"all ease-out 250ms"}
                        fontWeight={"700"}
                        _hover={{
                            transform: "rotate(-5deg)",
                            color: "#333333"
                        }}
                    >
                        My Projects
                    </Link>
                    <Link
                        href="#contact"
                        color={"#555555"}
                        fontSize={"1.25rem"}
                        transition={"all ease-out 250ms"}
                        fontWeight={"700"}
                        _hover={{
                            transform: "rotate(-5deg)",
                            color: "#333333"
                        }}
                    >
                        Contact Me
                    </Link>
                </Flex>
                <Button
                    backgroundColor={"#C8C8C8"}
                    color={"#333333"}
                    padding={".5rem"}
                    border={".125rem solid #333333"}
                    borderRadius={".375rem"}
                    boxShadow={".125rem .125rem 0 #333333"}
                    fontSize={"1.25rem"}
                    fontWeight={"700"}
                    transition={"all 125ms"}
                    _active={{
                        transform: "translate(.125rem, .125rem)",
                        boxShadow: "none"
                    }}
                >
                    Resume
                    <FontAwesomeIcon
                        icon={faFilePdf}
                        style={{
                            marginInlineStart: ".25rem"
                        }}
                    />
                </Button>
            </Flex>
        </>
    );
}

export default Header;
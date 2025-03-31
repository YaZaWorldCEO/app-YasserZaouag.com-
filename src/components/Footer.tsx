import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
    return (
        <>
            <Flex
                marginTop={"5rem"} // Temp
                as={"footer"}
                direction={"column"}
                rowGap={"2.5rem"}
                backgroundColor={"#C8C8C8"}
                padding={"2.5rem 1.5rem .75rem 1.5rem"}
                borderTop={".25rem solid #333333"}
            >
                <Flex
                    width={"100%"}
                    alignItems={"center"}
                >
                    <Flex
                        width={"50%"}
                        justifyContent={"center"}
                        columnGap={"1.5rem"}
                    >
                        <Link
                            href="https://www.youtube.com/@yazaworldceo"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/yazaworldceo"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/yazaworldceo"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                            />
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@yazaworldceo"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faTiktok}
                            />
                        </Link>
                        <Link
                            href="https://x.com/yazaworldceo"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faXTwitter}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/yasser-zaouag-a287b5321"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                            />
                        </Link>
                        <Link
                            href="https://github.com/YaZaWorldCEO"
                            isExternal={true}
                            textDecoration={"none"}
                            color={"#555555"}
                            fontSize={"2rem"}
                            fontWeight={"400"}
                            transition={"all ease-out 250ms"}
                            _hover={{
                                color: "#333333",
                                transform: "rotate(-10deg)"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                            />
                        </Link>
                    </Flex>
                    <Flex
                        width={"50%"}
                        direction={"column"}
                        alignItems={"start"}
                        rowGap={".75rem"}
                    >
                        <ReactRouterLink
                            to={"/"}
                        >
                            <Text
                                color={"#555555"}
                                fontSize={"1.125rem"}
                                fontWeight={400}
                                transition={"all ease-out 250ms"}
                                _hover={{
                                    color: "#333333",
                                    fontWeight: 700
                                }}
                            >
                                Home
                            </Text>
                        </ReactRouterLink>
                        <ReactRouterLink
                            to={"/privacy-policy"}
                        >
                            <Text
                                color={"#555555"}
                                fontSize={"1.125rem"}
                                fontWeight={400}
                                transition={"all ease-out 250ms"}
                                _hover={{
                                    color: "#333333",
                                    fontWeight: 700
                                }}
                            >
                                Privacy Policy
                            </Text>
                        </ReactRouterLink>
                    </Flex>
                </Flex>
                <Text
                    textAlign={"center"}
                >
                    <FontAwesomeIcon
                        icon={faCopyright}
                        style={{
                            marginInlineEnd: ".25rem"
                        }}
                    />
                    2025 Yasser Zaouag
                </Text>
            </Flex>
        </>
    );
}

export default Footer;
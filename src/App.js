import React, { Component } from 'react';
import './App.css';
import styled, { injectGlobal } from 'styled-components'
import { Box, Container, Flex, Heading, Image, Measure, Provider, TabItem, Tabs, Text } from 'rebass';

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const StyledTabs = styled(Tabs)`
    font-family: 'Lora', 'Georgia', serif;
    text-transform: lowercase;
`
const StyledTabItem = styled(TabItem)`
    &:active {
        border-bottom: 0;
    }
`
const Navigation = () =>
    <StyledTabs width={1} center px={2} mb={4}>
        <StyledTabItem fontSize={3} mr={4} ml='auto' active>
            About
        </StyledTabItem>
        <StyledTabItem fontSize={3} mr={4}>
            Services
        </StyledTabItem>
        <StyledTabItem fontSize={3} mr={4}>
            Favorites
        </StyledTabItem>
        <StyledTabItem fontSize={3} mr={4}>
            Contact
        </StyledTabItem>
        <StyledTabItem fontSize={3} mr='auto'>
            Beauty Counter
        </StyledTabItem>
    </StyledTabs>

const StyledHeading = styled(Heading)`
    font-family: 'Meddon', 'Garamond', script;
`
class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider>
                    <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Meddon" rel="stylesheet" />
                    <StyledHeading is='h4' mt={3} mb={2} py={3}>
                        <Text center bold>
                            Lorem Ipsum
                        </Text>
                    </StyledHeading>

                    <Navigation/>

                    {/*Hero*/}
                    {/*<Banner
                        color='white'
                        bg='gray8'
                        backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
                        <Heading
                            f={[4, 5, 6, 7]}>
                            Welcome
                        </Heading>
                    </Banner>*/}
                    <Container>
                        <StyledHeading children='About' mb={3} center />
                        {/*<Text center mb={4}>
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </Text>*/}
                        <Flex mx={4} wrap={true} p={1 / 2}>
                            <Box w={1 / 3} px={2}>
                                <Image
                                    p={1}
                                    src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                                />
                            </Box>
                            <Box w={2 / 3} pl={4}>
                                <Measure p={1}>
                                    Bleghbleghvomit my furball really tie the room together. Demand to be let outside at
                                    once, and expect owner to wait for me as i think about it asdflkjaertvlkjasntvkjn
                                    (sits on keyboard) yet lick the other cats sit in box yet lick butt. Leave dead
                                    animals as gifts plan steps for world domination chirp at birds jump on human and
                                    sleep on her all night long be long in the bed, purr in the morning and then give a
                                    bite to every human around for not waking up request food, purr loud scratch the
                                    walls, the floor, the windows.
                                </Measure>
                                <Measure p={1}> I cry and cry and cry unless you pet me, and then maybe i cry just for
                                    fun. Find a way to fit in tiny box climb a tree, wait for a fireman jump to fireman
                                    then scratch his face yet warm up laptop with butt lick butt fart rainbows until
                                    owner yells pee in litter box hiss at cats lick arm hair, open the door, let me out,
                                    let me out, let me-out, let me-aow, let meaow, meaow!</Measure>
                            </Box>
                        </Flex>
                    </Container>
                </Provider>

            </div>
        );
    }
}

export default App;

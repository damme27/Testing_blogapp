import {
    AspectRatio,
    Avatar,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Image,
    NativeBaseProvider,
    ScrollView,
    Stack,
    Text,
    VStack
} from "native-base";
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const Home = ({ navigation }) => {
    return(
        <NativeBaseProvider>
            <ScrollView
      flex={1}
      px={2}
      _contentContainerStyle={{
        
        px: "5px",
        w: "100%",
      }} // style={{ backgroundColor: 'blue' }}
    >
        <Box
      shadow={2}
      rounded="lg"
      maxWidth="90%"
      mb={5}   
      onPress={() => navigation.navigate("Detail")}
    >
      <Image source={{uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/3c9f76054c021c0ce3c1ca970d57bcdb053b5b2f/1200Wx1200H?use=banner&assetDescr=ES-580W_S02_multiple%20paper-1"}} alt="image base" width={"100%"} height={150} roundedTop="md" />
      <Text bold position="absolute" color="black" top={0} m={[4, 4, 8]}>
        NEWS
      </Text>
      <Stack space={4} p={[4, 4, 8]} bg="#fafafa">
        <Text color="gray.400">May 20, 2021</Text>
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
        ES-580W
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
        Epson looks into the details and designs equipment for a seamless workflow, like the innovative WorkForce ES-580W. Paired with the Epson Smart Panel app, users can scan and share documents with their workgroup on their mobile devices, enhancing productivity.
        </Text>
        <Button onPress={() => navigation.navigate("Detail")}>Detail</Button> 
      </Stack>
      </Box>
      
      <Box
      shadow={2}
      rounded="lg"
      maxWidth="90%"
      mb={5}
    >
      <Image source={{uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/106e6beca7880b49eeda2e94a1a9e077ad3e3768/1200Wx1200H?use=banner&assetDescr=M1100_02_1-1-1-1"}} alt="image base" width={"100%"} height={150} roundedTop="md" />
      <Text bold position="absolute" color="black" top={0} m={[4, 4, 8]}>
        NEWS
      </Text>
      <Stack space={4} p={[4, 4, 8]} bg="#fafafa">
        <Text color="gray.400">June 22, 2021</Text>
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
        M1100
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
        Efficiency meets economy with the EcoTank monochrome M1100 printer. Taking care of details to meet business needs, look forward to lower costs with bottles that provide an ultra-high page yield of 6,000 pages1 each
        </Text>
      </Stack>
      </Box>

      <Box
      shadow={2}
      rounded="lg"
      maxWidth="90%"
      mb={5}
    >
      <Image source={{uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/a2dea8b8c2e912e59b8265813b1b09ef12ab1a42/1200Wx1200H?use=banner&assetDescr=EB-2155W_03"}} alt="image base" width={"100%"} height={150} roundedTop="md" />
      <Text bold position="absolute" color="black" top={0} m={[4, 4, 8]}>
        NEWS
      </Text>
      <Stack space={4} p={[4, 4, 8]} bg="#fafafa">
        <Text color="gray.400">Jan 22, 2021</Text>
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
        EB-2155W
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
        Leave the lights on and take control whether in the meeting room or classroom. Epson’s EB-2155W projector is engineered to shine outstandingly even in well-lit environments to enrich your presentation experience.
        </Text>
      </Stack>
      </Box>
    </ScrollView>
        </NativeBaseProvider>
    ); 
};

export default Home
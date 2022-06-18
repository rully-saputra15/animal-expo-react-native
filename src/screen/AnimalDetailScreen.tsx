import React, {FC} from "react";
import {Avatar, Badge, Box, HStack, Icon, PresenceTransition, ScrollView, Text, VStack, Wrap} from "native-base";
import {Animal} from "../interface";
import {
  colorBoxAmphibian,
  colorBoxBird, colorBoxFish,
  colorBoxInvertebrate,
  colorBoxMammal,
  colorBoxReptile
} from "../constants/colors";
import { FontAwesome5 , MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

interface AnimalDetailScreenProps {
  animalDetailData?: Animal;
}

interface IdentityBadgeProps {
  title?: string;
  color: string;
}
const AnimalDetailScreen: FC<AnimalDetailScreenProps> = ({ animalDetailData }) => {
  const identityBadge = (color: string, title?: string) => (
    <Badge borderRadius={10} colorScheme={color}>{title}</Badge>
  )
  const renderFullCard = (
    color: string[],
    title: string,
    icon: JSX.Element,
    subTitle?: string,
    value?: string) => (
    <Box borderRadius={10}
         shadow={5}
         flexDirection="row"
         alignItems="center"
         justifyContent="flex-start"
         bg={{
           linearGradient:{
             colors: color,
             start: [0,1],
             end: [0,0]
           }
         }}
         p={4}>
      {icon}
      <VStack ml={4} w="80%">
        {subTitle !== "" && (
          <>
            <Text fontWeight={300} fontSize={14} key="region">
              Region
            </Text>
            <Text fontWeight={600} fontSize={14} key="region-value">
              {subTitle}
            </Text>
          </>
        )}
        <Text fontWeight={300} fontSize={14} key="habitat">
          {title}
        </Text>
        <Text fontWeight={700} fontSize={14} numberOfLines={2} key="habitat-value">
          {value}
        </Text>
      </VStack>
    </Box>
  )
  return (
    <ScrollView>
      <VStack flex={1}
              py={3}
              px={4}
              alignItems="center"
              space={3}>
        <PresenceTransition visible initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 300
          }
        }}>
          <Avatar size={40}
                  shadow={5}
                  source={{
                    uri: animalDetailData?.imageLink
                  }}
          />
        </PresenceTransition>
        <PresenceTransition visible initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 400
          }
        }}>
          <Text fontWeight={700} fontSize={20}>{animalDetailData?.name}</Text>
        </PresenceTransition>
        <PresenceTransition visible initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 500
          }
        }}>
          <Text fontWeight={300} fontSize={14}>Latin Name: {animalDetailData?.latinName}</Text>
        </PresenceTransition>
        <PresenceTransition visible initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 570
          }
        }}>
          <Wrap flexDirection="row" space={3}>
            {
              identityBadge("red", animalDetailData?.type)
            }
            {
              animalDetailData?.activeTime.toLowerCase() === "diurnal" ?
                identityBadge("teal", animalDetailData?.activeTime)
                :
                identityBadge("indigo", animalDetailData?.activeTime)
            }
          </Wrap>
        </PresenceTransition>
        <HStack justifyContent="space-evenly" width="100%">
         <PresenceTransition visible initial={{
           opacity: 0,
           translateY: -20
         }} animate={{
           translateY: 0,
           opacity: 1,
           transition: {
             duration: 600
           }
         }}>
           <Box
             borderRadius={10}
             shadow={5}
             flexDirection="row"
             alignItems="center"
             justifyContent="flex-start"
             p={4}
             bg={{
               linearGradient: {
                 colors: colorBoxBird,
                 start: [0, 1],
                 end: [0, 0]
               }
             }}
           >
             <Icon as={FontAwesome5}
                   name="weight-hanging"
                   size={8}
                   color="muted.500" />
             <VStack>
               <Text fontWeight={400} fontSize={14} ml={4}>
                 Weight
               </Text>
               <Text fontWeight={700} fontSize={14} ml={4} ellipsizeMode="tail" numberOfLines={2} w={20}>
                 {`${animalDetailData?.weightMin} - ${animalDetailData?.weightMax} Kg`}
               </Text>
             </VStack>
           </Box>
         </PresenceTransition>
          <PresenceTransition visible initial={{
            opacity: 0,
            translateY: -20
          }} animate={{
            translateY: 0,
            opacity: 1,
            transition: {
              duration: 700
            }
          }}>
            <Box
              borderRadius={10}
              shadow={5}
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              p={4}
              bg={{
                linearGradient: {
                  colors: colorBoxAmphibian,
                  start: [0, 1],
                  end: [0, 0]
                }
              }}
            >
              <Icon as={MaterialIcons}
                    name="height"
                    size={8}
                    color="muted.500" />
              <VStack>
                <Text fontWeight={400} fontSize={14} ml={4}>
                  Max Length
                </Text>
                <Text fontWeight={700} fontSize={14} ml={4} w={20}>
                  {`${animalDetailData?.lengthMax} Cm`}
                </Text>
              </VStack>
            </Box>
          </PresenceTransition>
        </HStack>
        <PresenceTransition visible initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          translateY: 0,
          opacity: 1,
          transition:{
            duration: 800
          }
        }}>
          {renderFullCard(colorBoxReptile,
            "Habitat",
            <Icon as={MaterialIcons} name="place" size={8} color="muted.500" />,
            animalDetailData?.geoRange,
            animalDetailData?.habitat)}
        </PresenceTransition>
        <PresenceTransition visible initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          translateY: 0,
          opacity: 1,
          transition:{
            duration: 900
          }
        }}>
          {renderFullCard(["muted.100", "muted.200"],
            "Diet",
            <Icon as={MaterialCommunityIcons}
                  name="food-drumstick" size={8} color="muted.500" />,
            "",
            animalDetailData?.diet)}
        </PresenceTransition>
      </VStack>
    </ScrollView>
  );
};

export default AnimalDetailScreen;

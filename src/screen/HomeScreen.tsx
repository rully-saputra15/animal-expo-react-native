import React from "react";
import {
  AspectRatio,
  Badge,
  Box,
  Divider,
  HStack,
  Image,
  PresenceTransition, Pressable,
  ScrollView,
  Text,
  VStack,
  Wrap
} from "native-base";
import {colorDivider} from "../constants/colors";
import {Animal, AnimalCategory} from "../interface";

interface HomeScreenProps {
  animalData: Animal[],
  animalCategory: AnimalCategory[];
  navigateToAnimalDetailScreen: (id: number) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = (
  { animalCategory, animalData, navigateToAnimalDetailScreen
  }) => {
  const renderHeader = (title: string) => (
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
      <Box w={48} pl={5} key={title}>
        <Text fontWeight={700} fontSize={32}>{title === "Animal" ? `${title} 🐵` : title}</Text>
        <Divider bgColor={{
          linearGradient: {
            colors: colorDivider,
            start: [0, 1],
            end: [0, 1]
          }
        }} py={1} mt={2}/>
      </Box>
    </PresenceTransition>
  );
  const renderGroupBadgeAnimalCard = (animalType: string, activeTime: string) => {
    return (
      <HStack position="absolute" bottom={2} left={2}>
        <Badge borderRadius={20}
               mr={2}
               bgColor="pink.200"
               _text={{
                 fontWeight: "bold",
                 color: "black"
               }}>
          {animalType}
        </Badge>
        <Badge borderRadius={20}
               bgColor={activeTime === "Diurnal" ? "warning.200" : "muted.700"}
               _text={{
                 fontWeight: "bold",
                 color: activeTime === "Diurnal" ? "black" : "white"
               }}>
          {activeTime}
        </Badge>
      </HStack>
    );
  };
  const renderAnimalCard = () => {
    const animalCard: JSX.Element[] = [];

    animalData.forEach((animal, index) => {
      animalCard.push(
        <PresenceTransition visible key={animal.id} initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: index * 500
          }
        }}>
          <Pressable onPress={() => navigateToAnimalDetailScreen(animal.id)}>
            <Box mr={3}
                 borderRadius={10}
                 shadow={5}>
              <AspectRatio ratio={9 / 16} height={400}>
                <Image src={animal.imageLink} alt={`image${index}`} resizeMode="cover" borderRadius={10}/>
              </AspectRatio>
              <Badge borderRadius={10}
                     position="absolute"
                     top={2}
                     right={2}
                     _text={{
                       fontWeight: "bold"
                     }}>
                {animal.name}
              </Badge>
              {renderGroupBadgeAnimalCard(animal.type, animal.activeTime)}
            </Box>
          </Pressable>
        </PresenceTransition>
      );
    });
    return animalCard;
  };
  const AnimalCategories = () => {
    let categoryCard: JSX.Element[] = [];

    animalCategory.forEach((category, index) => {
      categoryCard.push(
        <PresenceTransition visible key={category.name} initial={{
          opacity: 0,
          translateY: -20
        }} animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: index * 300
          }
        }}>
          <Box w={40}
               rounded={10}
               mr={5}
               mb={4}
               shadow={5}
               py={8} bgColor={{
            linearGradient: {
              colors: category.color,
              start: [0, 1],
              end: [0, 0]
            }
          }} _text={{
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
            color: "muted.900"
          }}>
            {category.name.toUpperCase()}
          </Box>
        </PresenceTransition>
      );
    });
    return (
      <Wrap key="category"
            flexDirection="row"
            w="100%"
            pl={5}
            justifyContent="space-between">
        {categoryCard}
      </Wrap>
    );
  };
  return (
    <ScrollView>
      <VStack
        alignItems="flex-start"
        flex={1}
        py={6}
        space={6}
        safeArea>
        {renderHeader("Animal")}
        <ScrollView w="100%"
                    px={5}
                    pb={4}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
          {renderAnimalCard()}
        </ScrollView>
        {renderHeader("Category")}
        <AnimalCategories/>
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;

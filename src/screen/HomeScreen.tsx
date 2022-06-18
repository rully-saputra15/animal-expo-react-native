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
  Wrap,
  FlatList, Center
} from "native-base";
import {colorDivider} from "../constants/colors";
import {Animal, AnimalCategory} from "../interface";
import LottieView from "lottie-react-native";

interface HomeScreenProps {
  animalData: Animal[],
  animalCategory: AnimalCategory[];
  isFetchingAnimalData: boolean;
  navigateToAnimalDetailScreen: (id: number) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = (
  {
    animalCategory,
    animalData,
    isFetchingAnimalData,
    navigateToAnimalDetailScreen
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
      <Box w={48} key={title}>
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
  const renderAnimalCard = ({ item }: any) => {
    return (
      <PresenceTransition visible key={item.id} initial={{
        opacity: 0,
        translateY: -20
      }} animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 650
        }
      }}>
        <Pressable onPress={() => navigateToAnimalDetailScreen(item.id)}>
          <Box mr={3}
               borderRadius={10}
          >
            <AspectRatio ratio={9 / 16} height={400}>
              <Image src={item.imageLink} alt={`image${item.id}`} resizeMode="cover" borderRadius={10}/>
            </AspectRatio>
            <Badge borderRadius={10}
                   position="absolute"
                   top={2}
                   right={2}
                   _text={{
                     fontWeight: "bold"
                   }}>
              {item.name}
            </Badge>
            {renderGroupBadgeAnimalCard(item.type, item.activeTime)}
          </Box>
        </Pressable>
      </PresenceTransition>
    );
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
            justifyContent="space-evenly">
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
        pl={5}
        space={6}
        safeArea>
        {renderHeader("Animal")}
        {
          isFetchingAnimalData ?
            <HStack w="100%" justifyContent="center" alignItems="center">
              <LottieView autoPlay
                          style={{ width: "40%" }}
                          loop
                          autoSize
                          source={require("../assets/loading.json")}/>
            </HStack>
            :
            <FlatList data={animalData}
                      horizontal
                      w="full"
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderAnimalCard}
                      keyExtractor={item => item.id.toString()}/>
        }
        {renderHeader("Category")}
        <AnimalCategories/>
      </VStack>

    </ScrollView>
  );
};

export default HomeScreen;

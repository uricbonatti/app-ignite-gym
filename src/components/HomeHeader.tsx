import { MaterialIcons } from '@expo/vector-icons';
import { HStack, Heading, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';
import { useAuth } from '@hooks/useAuth';
import { api } from '@services/api';

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={
          user.avatar
            ? {
                uri: `${api.defaults.baseURL}/avatar/${user.avatar}`
              }
            : defaultUserPhotoImg
        }
        alt="Foto de perfil do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}

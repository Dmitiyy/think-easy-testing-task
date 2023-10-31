import { GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TPost } from '../state/atoms/postsAtom';

export const PostItem: FC<{data: TPost}> = ({ data }) => {
  return (
    <Link to={`/post/${data.id}`}>
      <GridItem 
        w='100%' p="15px"
        bg='custom.secondary' 
        borderRadius={10}
      >
        <Text 
          color="custom.white" 
          fontWeight="medium"
          maxW="100px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {data.title}
        </Text>
        <Text 
          color="custom.white" fontSize="14px" mt="5px"
          maxW="100px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {data.content}
        </Text>
      </GridItem>
    </Link>
  )
}
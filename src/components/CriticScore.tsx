import { Badge, HStack } from '@chakra-ui/react';


interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <HStack paddingY='1px'>
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
    </HStack>
  )
}

export default CriticScore
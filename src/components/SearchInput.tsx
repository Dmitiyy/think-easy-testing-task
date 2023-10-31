import { FC } from 'react';
import { Input } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { useSetRecoilState } from 'recoil';
import { pageState, searchState } from '../state/atoms/postsAtom';

export const SearchInput: FC = () => {
  const setValue = useSetRecoilState(searchState);
  const setPage = useSetRecoilState(pageState);

  const debouncedChangeHandler = debounce((search: string) => {
    setValue(search.toLowerCase());
    setPage(1);
  }, 500);

  return (
    <Input 
      placeholder="Enter a keyword" 
      maxW="350px" h="35px" id="search"
      color="custom.white" 
      onChange={(event) => { debouncedChangeHandler(event.target.value) }}
    />
  )
}
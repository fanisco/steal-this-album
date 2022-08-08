import { FC, useEffect, useRef } from 'react';
import { useState } from 'react';

import { SearchForm } from '../../components/Search/SearchForm';
import { SearchResults } from '../../components/Search/SearchResults';
import { SearchWrapper } from '../../components/Search/SearchWrapper';
import { useSearchBuddiesLazyQuery } from '../../graphql';

const SEARCH_MIN_QUERY_LENGTH = 2;
const SEARCH_TIMEOUT = 20;
const SEARCH_BUDDIES_LIMIT = 5;

export const Search: FC<{
  onSearchResults?: (hasResults: boolean) => void;
}> = ({ onSearchResults }) => {
  const debounceRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [getBuddies, { data, previousData, loading }] =
    useSearchBuddiesLazyQuery();
  let cachedData = data;

  if (loading && !data) {
    cachedData = previousData;
  }

  if (!searchValue) {
    cachedData = null;
  }

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (searchValue.length < SEARCH_MIN_QUERY_LENGTH) {
        return;
      }
      try {
        getBuddies({
          variables: { name: searchValue, limit: SEARCH_BUDDIES_LIMIT },
        });
      } catch (e) {
        console.log('[Error]', e);
      }
    }, SEARCH_TIMEOUT);
  }, [searchValue, getBuddies]);

  useEffect(() => {
    onSearchResults(Boolean(cachedData));
  }, [cachedData, onSearchResults]);

  return (
    <SearchWrapper>
      <SearchForm value={searchValue} onChange={(v) => setSearchValue(v)} />
      {cachedData?.buddies?.length > 0 && (
        <SearchResults buddies={cachedData.buddies} />
      )}
    </SearchWrapper>
  );
};

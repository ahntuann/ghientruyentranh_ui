import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';

import style from './Search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import useDebounce from '~/hooks/MyDebounce';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchMangaItem from '~/components/SearchMangaItem';

const cs = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState(() => '');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const debounce = useDebounce(searchValue, 800);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        async function fetchData() {
            const res = await fetch(`http://localhost:8080/testmaven/mangas?name=${debounce}&author=${debounce}`);
            const manga = await res.json();

            setSearchResult(manga);
        }

        fetchData();
    }, [debounce]);

    function handleHideResult() {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cs('search-result')} {...attrs}>
                    <PopperWrapper>
                        {searchResult.map((search, index) => (
                            <SearchMangaItem key={index} manga={search} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cs('wrapper')}>
                <input
                    className={cs('search-manga')}
                    value={searchValue}
                    placeholder="Truyện, tác giả, thể loại,..."
                    name="search-manga"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={(e) => setShowResult(true)}
                />
                <FontAwesomeIcon className={cs('search-btn')} icon={faMagnifyingGlass} />
            </div>
        </HeadlessTippy>
    );
}

export default Search;

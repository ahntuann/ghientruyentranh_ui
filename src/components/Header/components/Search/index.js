import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(style);

function Search() {
    return (
        <div className={cs('wrapper')}>
            <input placeholder="Truyện, tác giả, thể loại,..." name="search-manga" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    );
}

export default Search;

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState('');
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok"></img>
        </div>
        <Tippy
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className="box" tabIndex="-1" {...attrs}>
              My tippy box
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Tìm kiếm" spellCheck={false} onChange={(e) => setSearchResult(e.target.value)} />
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <Tippy content="Search">
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Tippy>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;

import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faSignIn,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import styles from './Header.router.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '../../Popper/menu';

const cx = classNames.bind(styles);

const hadleMenuchange = (menuItem) => {
  console.log(menuItem);
};
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',

          code: 'en',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoaa',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header(onClick) {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setSearchResult([1]);
  }, 0);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                <AccountItem />

                <AccountItem />

                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('serach')}>
            <input placeholder="Search accouunt and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('serach-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>

              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log In
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="data:image/jpeg;base64,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"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
